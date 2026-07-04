# Plan: Home Page Redesign

## Problem
The current `/` route is a generic Xinyi Class knowledge-base directory. It does not match the provided XinYi Class marketing design, which presents an art/wellness studio brand, program cards, studio imagery, testimonials, and contact/footer content.

## Solution
Create a custom docs-site home page that visually matches `XinYi Class-page-1.png` while leaving the reusable layer and all `/docs/...` knowledge-base pages unchanged.

## Implementation Decisions
- Add `docs/app/pages/index.vue`; this makes Nuxt use the docs app's home page instead of the layer-injected `KnowledgeBaseDirectory`.
- Use `definePageMeta({ header: false, footer: false })` so the page can own the pastel navigation and footer shown in the mockup.
- Copy the provided assets from `/Users/max/projects/resources/soulart/images/Home Page` into `docs/public/home/` with simple kebab-case names, because production cannot serve files from an absolute local path.
- Use plain Vue/Tailwind/CSS and existing Nuxt/Nuxt UI capabilities. Do not add dependencies.
- Keep the marketing copy and section data in the page component for now. A content/CMS model is out of scope until the page needs frequent non-developer editing.
- Keep non-home navigation simple: point buttons to anchors on `/` or existing `/docs/...` routes where appropriate. Do not create Art Programs, Wellness, Schedule, Resource, About, or Contact pages in this redesign pass.

## Testing Decisions
- Highest useful automated seam: Nuxt prepare/build for route generation and Vue compile errors.
- Visual seam: run the docs dev server only with user permission, then compare `/` against the mockup with Playwright screenshots at desktop and mobile widths.
- Verification commands:
  - `pnpm run dev:prepare`
  - `pnpm run lint`
  - `pnpm run docs:build`

## Out of Scope
- Creating new program/detail/schedule/contact pages.
- Adding form submission, newsletter/community signup backend, or chat behavior beyond existing assistant links.
- Pixel-perfect reproduction of every watercolor texture if the source asset set does not include those decorative layers.
- Changing the shared `layer/` home-page behavior for other consumers.

## Task List

### Phase 1: Foundation

#### Task 1: Prepare Home-Page Assets
**Description:** Copy the supplied home-page photos/cards/QR image into the docs public directory with stable web filenames and record the route names used by the page.

**Acceptance criteria:**
- [ ] Assets exist under `docs/public/home/` with kebab-case names.
- [ ] No page code references `/Users/max/...` absolute paths.
- [ ] Source image dimensions are preserved unless a smaller derivative is intentionally created.

**Verification:**
- [ ] `find docs/public/home -maxdepth 2 -type f | sort`
- [ ] `rg "/Users/max/projects/resources" docs/app docs/public` returns no matches.

**Dependencies:** None.

**Files likely touched:**
- `docs/public/home/*`

**Estimated scope:** Small.

#### Task 2: Add the Branded Home Route and Hero
**Description:** Add `docs/app/pages/index.vue` with custom page metadata, pastel page chrome, top navigation, hero copy, hero image, announcement card, and primary program links.

**Acceptance criteria:**
- [ ] `/` renders the custom branded landing page instead of the KB directory.
- [ ] The page hides the default docs header/footer only on `/`.
- [ ] The hero section visually matches the mockup's brand direction: soft pastel background, centered “Art • Wellness • Community” headline, supporting tagline, and photo/card composition.

**Verification:**
- [ ] `pnpm run dev:prepare`
- [ ] Manual browser check of `/` with user-approved dev server.

**Dependencies:** Task 1.

**Files likely touched:**
- `docs/app/pages/index.vue`

**Estimated scope:** Medium.

### Phase 2: Core Page Sections

#### Task 3: Build the Main Landing Sections
**Description:** Complete the visible landing-page sections: Explore Our Programs, Welcome to Our Studio, Why Families Choose XinYi, Handwritten Memories, and custom footer.

**Acceptance criteria:**
- [ ] The art and wellness program cards use the provided program images.
- [ ] The studio section uses the classroom photo and communicates the four studio qualities from the mockup.
- [ ] The family-benefits grid and handwritten-memory cards are present with accessible text alternatives.
- [ ] The footer includes brand, explore links, visit/contact info, social placeholders, assistant CTA, and QR image.

**Verification:**
- [ ] `pnpm run lint`
- [ ] Manual scroll-through check of all sections at desktop width.

**Dependencies:** Task 2.

**Files likely touched:**
- `docs/app/pages/index.vue`

**Estimated scope:** Medium.

### Phase 3: Polish and Verification

#### Task 4: Responsive Polish and Final Checks
**Description:** Tune spacing, typography, image cropping, contrast, keyboard focus, and responsive stacking so the page works on desktop, tablet, and mobile.

**Acceptance criteria:**
- [ ] Desktop width visually follows the provided mockup.
- [ ] Mobile width has no horizontal overflow and keeps navigation usable.
- [ ] Links/buttons have discernible labels and visible focus states.
- [ ] Existing docs routes under `/docs/...` still render through the shared docs shell.

**Verification:**
- [ ] `pnpm run docs:build`
- [ ] Playwright screenshots for `/` at desktop and mobile widths, using a user-approved dev server.
- [ ] Spot-check one existing docs route, for example `/docs/manual/en/getting-started/installation`.

**Dependencies:** Task 3.

**Files likely touched:**
- `docs/app/pages/index.vue`

**Estimated scope:** Small.

## Checkpoints
- [ ] After Task 2: `/` is custom and docs routes are unchanged.
- [ ] After Task 3: all sections in the reference image exist.
- [ ] After Task 4: build passes and screenshots are ready for review.

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| The supplied asset set lacks decorative watercolor/leaf/icon artwork from the mockup. | Medium | Recreate decorative accents with CSS gradients, simple SVG/icon components, and low-opacity shapes instead of adding dependencies. |
| Existing global docs styles conflict with the marketing page. | Low | Scope styles to `docs/app/pages/index.vue` and disable only the home page's default header/footer. |
| Pixel-perfect matching takes too long. | Medium | First ship a faithful branded version using available assets; tighten spacing/colors only after screenshot review. |
| Current repo has many unrelated dirty files. | Medium | Touch only `docs/app/pages/index.vue`, `docs/public/home/`, and this plan/beads metadata. Do not stage unrelated changes. |

## Beads
- Epic: `soulart-7cy`
- Child issues:
  - `soulart-7cy.1` — Prepare home-page assets
  - `soulart-7cy.2` — Add branded home route and hero
  - `soulart-7cy.3` — Build main landing sections
  - `soulart-7cy.4` — Polish responsive layout and verify

## Further Notes
- Source design: `/Users/max/projects/resources/soulart/web-design/XinYi Class-page-1.png`.
- Source assets: `/Users/max/projects/resources/soulart/images/Home Page`.
- Current `/` behavior is provided by `layer/app/templates/landing.vue` falling back to `KnowledgeBaseDirectory` because `docs/app/pages/index.vue` does not exist.
