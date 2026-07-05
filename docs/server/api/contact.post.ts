import { createError, readValidatedBody } from 'h3'
import { Resend } from 'resend'

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'xinyiartschool@gmail.com'
const CONTACT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || ''
const trialClassInterest = 'Trial Class'
const interestOptions = new Set([
  trialClassInterest,
  'Art Classes',
  'Wellness Programs',
  'Private Sessions',
  'Portfolio Preparation',
  'Workshops or Retreats',
])

type ContactBody = {
  name: string
  email: string
  phone: string
  interest: string
  preferredTime: string
  message: string
  updates: boolean
}

function badRequest(message: string): never {
  throw createError({ statusCode: 400, statusMessage: message })
}

function readString(body: Record<string, unknown>, key: string, max: number, required = true) {
  const value = body[key]

  if (typeof value !== 'string') {
    if (!required) return ''
    badRequest(`${key} is required`)
  }

  const trimmed = value.trim()

  if (required && !trimmed) badRequest(`${key} is required`)
  if (trimmed.length > max) badRequest(`${key} is too long`)

  return trimmed
}

function looksLikeEmail(value: string) {
  const at = value.indexOf('@')
  const dot = value.indexOf('.', at + 2)

  return at > 0 && dot > at + 1 && dot < value.length - 1 && !value.includes(' ')
}

function validateContactBody(body: unknown): ContactBody {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    badRequest('Invalid request body')
  }

  const source = body as Record<string, unknown>
  const name = readString(source, 'name', 120)
  const email = readString(source, 'email', 254).toLowerCase()
  const phone = readString(source, 'phone', 60, false)
  const interest = readString(source, 'interest', 80)
  const preferredTime = readString(source, 'preferredTime', 160, false)
  const message = readString(source, 'message', 3000)

  if (!looksLikeEmail(email)) badRequest('Email address is invalid')
  if (!interestOptions.has(interest)) badRequest('Interest is invalid')

  return {
    name,
    email,
    phone,
    interest,
    preferredTime,
    message,
    updates: source.updates === true,
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (char) => {
    switch (char) {
      case '&': return '&amp;'
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '\'': return '&#39;'
      case '"': return '&quot;'
      default: return char
    }
  })
}

function contactEmailHtml(body: ContactBody) {
  const fields: Array<[string, string]> = [
    ['Name', body.name],
    ['Email', body.email],
    ['Phone', body.phone || 'Not provided'],
    ['Interest', body.interest],
    ['Preferred Time', body.preferredTime || 'Not provided'],
    ['Updates', body.updates ? 'Yes' : 'No'],
  ]
  const rows = fields
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
    .join('')

  return `${rows}<p><strong>Message:</strong></p><p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>`
}

function contactEmailText(body: ContactBody) {
  return [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone || 'Not provided'}`,
    `Interest: ${body.interest}`,
    `Preferred Time: ${body.preferredTime || 'Not provided'}`,
    `Updates: ${body.updates ? 'Yes' : 'No'}`,
    '',
    body.message,
  ].join('\n')
}

function contactSubject(body: ContactBody) {
  return body.interest === trialClassInterest
    ? 'New Xinyi Class trial class request'
    : `New Xinyi Class inquiry: ${body.interest}`
}

function autoReplySubject(body: ContactBody) {
  return body.interest === trialClassInterest
    ? 'We received your trial class request'
    : 'We received your Xinyi Class message'
}

function autoReplyEmailHtml(body: ContactBody) {
  return [
    `<p>Hi ${escapeHtml(body.name)},</p>`,
    `<p>Thanks for contacting Xinyi Class. ${escapeHtml(autoReplySubject(body))}. We’ll contact you soon.</p>`,
    '<p>Art • Wellness • Community</p>',
  ].join('')
}

function autoReplyEmailText(body: ContactBody) {
  return [
    `Hi ${body.name},`,
    '',
    `Thanks for contacting Xinyi Class. ${autoReplySubject(body)}. We’ll contact you soon.`,
    '',
    'Art • Wellness • Community',
  ].join('\n')
}

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, validateContactBody)
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'RESEND_API_KEY is not configured' })
  }

  if (!CONTACT_FROM_EMAIL) {
    throw createError({ statusCode: 500, statusMessage: 'RESEND_FROM_EMAIL is not configured' })
  }

  const resend = new Resend(apiKey)
  const { data, error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: [CONTACT_TO_EMAIL],
    subject: contactSubject(body),
    html: contactEmailHtml(body),
    text: contactEmailText(body),
    replyTo: body.email,
  })

  if (error) {
    console.error('[contact] Resend failed', error)
    throw createError({ statusCode: 502, statusMessage: 'Error sending email' })
  }

  const { data: replyData, error: replyError } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: [body.email],
    subject: autoReplySubject(body),
    html: autoReplyEmailHtml(body),
    text: autoReplyEmailText(body),
  })

  if (replyError) console.error('[contact] Resend auto-reply failed', replyError)

  return { ok: true, id: data?.id, autoReplyId: replyData?.id }
})
