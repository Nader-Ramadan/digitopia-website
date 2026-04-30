# AGENTS.md

## Cursor Cloud specific instructions

This is a statically-exported Next.js 16 website (DigitalForge Agency). No backend, database, or external services required.

### Dev server

- `npm run dev` starts the Next.js dev server on `http://localhost:3000`.
- The site uses Turbopack by default in Next.js 16.

### Build

- `npm run build` produces a static export in the `out/` directory (configured via `output: 'export'` in `next.config.js`).

### Lint

- **`npm run lint` does not work.** Next.js 16 removed the built-in `next lint` CLI command. There is no ESLint config (`.eslintrc*` / `eslint.config.*`) in this repo. To add linting, install ESLint separately and create a config file.

### Tests

- No test framework is configured. There are no test files or test runner dependencies.

### Key caveats

- The contact form (`/contact/`) uses a client-side `alert()` on submit — there is no backend handler.
- All pages are statically generated; there are no API routes or server-side rendering.
- See `README.md` for project structure and customization guidance.
