# Azure Channel Studio

A content management website for the **Azure + AI YouTube series**. Every video has:

- 📊 **Presentation slides** — visual content for each slide
- 🎤 **Speaker scripts** — word-for-word what to say per slide
- 🖥️ **Azure demo steps** — what to show in the portal
- 🎬 **YouTube assets** — SEO title, description, hashtags, chapters

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS**
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding New Videos

Edit `lib/data.ts` — add a new entry to the `videos` array following the existing structure.

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Click Deploy — no config needed
