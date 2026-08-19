<h1 align="center">💻 Personal Developer Portfolio</h1>

<p align="center">
  A modern, highly performant developer portfolio built with Next.js 15 App Router, featuring seamless localization (EN/ES) and dynamic content management via a headless CMS.
</p>

<p align="center">
  <a href="https://portafolio-five-iota-26.vercel.app/"><strong>Live Demo</strong></a>
</p>

## 🌐 About The Project

This project serves as my digital resume and project showcase. Instead of hardcoding the data, I engineered it as a full-stack application with a custom CMS, allowing me to easily add new projects, update my experience, and manage translations without touching the codebase.

### 🛠️ Built With

* **Framework:** Next.js 15 (App Router)
* **Language:** TypeScript
* **CMS & Database:** Payload CMS 3.0, PostgreSQL (NeonDB)
* **Storage:** Vercel Blob
* **Styling:** Tailwind CSS

## ✨ Key Features

- **🌍 Seamless Localization:** Custom Context API implementation that handles English and Spanish translations without relying on heavy i18n libraries, keeping the bundle size minimal.
- **📝 Headless CMS Integration:** Powered by Payload CMS with a PostgreSQL database to dynamically fetch projects, experience, and skills.
- **⚡ Next.js 15 Optimizations:** Leverages Server Components (RSC) and optimized image rendering for maximum performance and SEO scores.
- **🎨 Modern UI/UX:** Fully responsive design with smooth animations and a consistent design system.

## 🧠 What I Learned

- **Next.js 15 App Router & Payload 3.0:** Learned the intricacies of integrating a headless CMS directly into the Next.js App Router, handling Server Components alongside Client Components for optimal hydration.
- **Database Management:** Configured and connected a serverless PostgreSQL database (NeonDB) and managed object storage (Vercel Blob) for project images.
- **State Management for Localization:** Designed a lightweight cookie-based language provider that persists user preference across sessions and renders the correct language server-side to prevent UI flickering.

## 🚀 Getting Started

\```bash
git clone https://github.com/Osvaldorg/Portafolio.git
npm install

# Generate Payload types based on the schema
npm run generate:types

# Run the development server
npm run dev
\```
