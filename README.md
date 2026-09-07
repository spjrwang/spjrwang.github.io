# Jingran Wang · Personal Site

Vite + React bilingual (EN / 中文) personal site for GitHub Pages.

**Live (after deploy):** https://spjrwang.github.io

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to Pages.

First-time setup on GitHub:

1. Repo **Settings → Pages**
2. Source: **GitHub Actions**

## Customize

- Copy / bilingual text: `src/i18n.ts`
- Email & GitHub links: `src/App.tsx`
- Chinese name / email: `src/i18n.ts`, `src/App.tsx`
