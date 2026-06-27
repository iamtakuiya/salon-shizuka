# Shared package

This package holds source-of-truth contracts for the booking flow. The web app imports these schemas directly, and the API keeps a matching validation shape in its middleware.

## Contents

- `schemas/bookingSchema.ts` — Zod schemas for booking and contact validation.

## Why it exists

- Keeps the booking payload shape aligned between the React form and the Express validation middleware.
- Prevents schema drift across the client and server.
- Makes the booking contract easier to update in one place.

## Related docs

- [Documentation index](../../docs/README.md)
- [Root README](../../README.md)
- [Contributing guide](../../docs/CONTRIBUTING.md)
- [Web app README](../web/README.md)
- [API README](../api/README.md)
