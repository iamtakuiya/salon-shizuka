# Contributing to Salon Shizuka

This is the docs-side mirror of the repository contribution guide.
For the canonical copy, see [../CONTRIBUTING.md](../CONTRIBUTING.md).

## Before you start

- Read the [documentation index](README.md) to find the right subsystem.
- Skim the relevant app README before changing code.
- Keep changes small and focused on one behavior or doc set at a time.

## Recommended workflow

1. Create a feature branch.
2. Install dependencies with `npm install` at the repository root.
3. Make the smallest change that solves the problem.
4. Run the relevant checks for the app you touched.
5. Update docs when behavior, scripts, env vars, or deployment steps change.
6. Open a pull request with a short summary of the user-facing impact.

## Validation

Use the narrowest useful check first:

- Web changes: `npm run lint`, `npm run type-check`, and `npm run build:web` when relevant.
- API changes: `npm run build:api` and any targeted backend checks or scripts you touched.
- Shared schema changes: verify both the web and API docs still describe the same payload shape.
- Documentation changes: read through the rendered Markdown and confirm links resolve.

## Code expectations

- Match the existing style and structure.
- Prefer root-cause fixes over surface patches.
- Avoid unrelated refactors.
- Keep environment variables documented when you add or change them.
- Keep API endpoint docs current when routes or payloads change.

## Environment files

- Never commit real secrets.
- Use the example env files as the source of truth for required variables.
- Treat `.env.local` as machine-specific and keep it out of version control.

## Pull requests

- Include a concise summary of what changed and why.
- Call out any setup or deployment impact.
- Mention follow-up work separately if it is intentionally out of scope.
