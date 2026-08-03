#!/usr/bin/env node
import { createCLI } from './cli'

const cli = createCLI({
  name: 'create-tockdocs',
  description: 'Create a new Xinyi Class documentation project',
  setup: {
    defaults: {},
  },
})

cli.runMain()
