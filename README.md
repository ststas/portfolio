# Portfolio

This is a personal developer portfolio built with Next.js, featuring multilingual support (i18n) and a modern UI/UX.

## About the Project

- Up-to-date portfolio with project examples, tech stack, and contacts
- Modern design, fully responsive layout
- Supports three languages: English, Russian, Hebrew
- Fast and responsive interface
- Easily extensible architecture

## Tech Stack

- **Next.js** (Pages Router)
- **React**
- **TypeScript**
- **Tailwind CSS** — styling and responsiveness
- **react-i18next** — internationalization
- **ESLint, Prettier** — code quality tools

## Translations Structure

- All translations are stored in `public/locales/{lang}/translation.json`
- Language switching is implemented via `react-i18next`
- Language switcher buttons are available on all screens (desktop and mobile)

## Project Structure

- `src/components` — UI components (Header, Footer, Projects, TechStack, etc.)
- `src/i18n` — i18n logic and types
- `public/locales` — translation JSON files
- `src/pages` — application pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) in your browser.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production version
- `npm run start` — run production server
- `npm run lint` — run linter

## Deployment

It is recommended to use [Vercel](https://vercel.com/) for deploying Next.js applications.

---

**Author:** [Your name or nickname]
