# Zoozeal-style Next.js website

A responsive, independently implemented Next.js recreation inspired by the public Zoozeal website. It includes Home, About, Works and Contact pages, responsive navigation, scroll reveals, animated hero artwork and project layouts.

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production
```bash
npm run build
npm start
```

## Customize
- Main styles and design tokens: `app/globals.css`
- Home page: `app/page.tsx`
- About / Works / Contact: `app/about/page.tsx`, `app/works/page.tsx`, `app/contact/page.tsx`
- Navigation and footer: `components/site-shell.tsx`

The contact form is currently frontend-only. Connect it to Resend, Formspree or your own API route to receive submissions. Images use remote Unsplash URLs as replaceable visual placeholders; replace them with licensed project imagery before publishing. This is a recreation, not the original site's proprietary source code or assets.
