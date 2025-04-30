# SiloCityPages

Welcome to SiloCityPages, a modern and efficient website framework built using Next.js, React Bootstrap, and TypeScript, designed for optimal performance and easy maintainability. This project leverages the power of GitHub Pages for seamless deployment and hosting. It also uses json files to hold project metadata and custom components to keep the project organized.

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Website Setup](#website-setup)
3.  [Deployment](#deployment)
4.  [Editing the Website](#editing-the-website)
5.  [Features](#features)

## Getting Started

To get started with the SiloCityPages project and run it locally, follow these steps:

1.  **Clone the Repository:**

To run the project locally:

```bash
git clone git@github.com:SiloCityLabs/SiloCityPages.git
cd SiloCityPages
```

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Website Setup

- Copy .env.example and create .env.local and update values
- Update package.json
- Update manifest.json
- Update sitemap.xml
- Update GA_TRACKING_ID to implement Google Analytics
- Update .prettierrc to your style needs!

## Editing the Website

You can modify the main content of the site by editing the following files:

- app/pages.tsx: The main landing page of the website.

- app/layout.tsx: The layout file for shared elements like headers or footers.

The project auto-updates changes as you edit.

## Deployment

This website is hosted on GitHub Pages. To deploy updates create a PR, commit and push. When merged into master github actions will automatically build and deploy.

## Features

- **Optimized Performance**: Uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) for automatic font optimization.

- **Modern Framework**: Built with the power of Next.js and React.
