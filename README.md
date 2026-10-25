# Ricardo Barbosa — Portfolio

Personal portfolio built with Next.js and the Pages Router. English is served at `/` and Portuguese at `/pt` using Next.js internationalized routing. Page data lives in `_data/`; static assets and the localized CV files live in `public/`.

## Requirements

- Node.js 24.22.1 (see `.nvmrc`)
- npm 11.19.1, bundled with the pinned Node.js release

Use a Node version manager to select the repository runtime, then install the locked dependencies:

```sh
nvm use
npm ci
```

## Development

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site uses the Next.js Pages Router; keep localized routing and static generation in `pages/` and `getStaticProps`.

## Quality checks and production build

Run each check independently:

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm start
```

The package matrix is pinned in `package.json` and the lockfile. Tailwind 3.4.19 is an intermediate migration checkpoint; the finished project uses Tailwind 4.

`npm start` serves the production build on port 3000 by default. The production runtime must use Node.js 24.22.1. This repository does not contain a hosting-provider or CI runtime declaration, so configure the deployment environment separately before release.

## Dependency maintenance

The lockfile is authoritative; use `npm ci` for clean installs and do not bypass peer dependency checks. TypeScript 6.0.3 is held because the TypeScript ESLint parser included by the Next.js lint configuration supports TypeScript `<6.1.0`. ESLint 9.39.5 is held because React, import, and accessibility lint plugins in the Next.js configuration do not declare ESLint 10 support. The ESLint 9 release line reached end of life on 2026-08-06, so this is a known tooling maintenance limitation; recheck the complete peer dependency tree and upgrade to a supported ESLint release as soon as the included plugins declare compatibility.

Tailwind CSS 4 uses its CSS theme in `styles/globals.css`; the custom fonts, colors, breakpoints, grid areas, and negative margin are part of the site layout and should be preserved when changing tokens.
