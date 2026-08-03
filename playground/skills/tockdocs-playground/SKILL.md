---
name: tockdocs-playground
description: Sample skill for testing the Xinyi Class agent skills discovery feature. Use to verify that /.well-known/skills/ routes work correctly.
metadata:
  author: tockdocs
  version: '1.0'
---

# Xinyi Class Playground Skill

This is a sample skill used to test the agent skills discovery feature in the Xinyi Class playground.

## Verify Discovery

Check these endpoints:

- `GET /.well-known/skills/index.json` -- should list this skill
- `GET /.well-known/skills/tockdocs-playground/SKILL.md` -- should return this file
- `GET /.well-known/skills/tockdocs-playground/references/example.md` -- should return the reference file

For more details, see [references/example.md](references/example.md).
