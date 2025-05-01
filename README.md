# SiloCityPages

Welcome to SiloCityPages, a modern and efficient website framework built using Next.js, React Bootstrap, and TypeScript, designed for optimal performance and easy maintainability. This project leverages the power of GitHub Pages for seamless deployment and hosting. It also uses json files to hold project metadata and custom components to keep the project organized.

This repository is structured as a monorepo containing the main application shell and core reusable components/utilities in separate packages.

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Website Setup](#website-setup)
3.  [Monorepo Structure](#monorepo-structure)
4.  [Linting Configuration (Important for Forks)](#linting-configuration-important-for-forks)
5.  [Deployment](#deployment)
6.  [Editing the Website](#editing-the-website)
7.  [Features](#features)

## Getting Started

To get started with the SiloCityPages project and run it locally, follow these steps:

1. **Fork and Clone the Repository:**

Fork the SiloCityLabs/SiloCityPages repository on GitHub. Then, clone your forked repository to your local machine:

```bash
git clone git@github.com:YOUR_GITHUB_USERNAME/SiloCityPages.git
cd SiloCityPages
```

Replace YOUR_GITHUB_USERNAME with your actual GitHub username.

2. **Install pnpm:**

This project uses pnpm as its package manager, which is recommended for monorepos. If you don't have pnpm installed globally, you can install it using npm:

```bash
npm install -g pnpm
```

3. **Install Dependencies:**

Navigate to the root of the cloned repository and install all project and package dependencies using pnpm:

```bash
pnpm install
```

4. **Run the Development Server:**

Start the Next.js development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Website Setup

- Copy .env.example and create .env.local and update values
- Update package.json
- Update manifest.json
- Update sitemap.xml
- Update GA_TRACKING_ID to implement Google Analytics
- Update .prettierrc to match your code style preferences.
- Review the [Linting Configuration](#linting-configuration-important-for-forks) below

## Monorepo Structure

This repository is organized as a monorepo using pnpm workspaces.

- The root directory (/) contains the main Next.js application shell and configuration files (`package.json`, `pnpm-workspace.yaml`, `next.config.js`, `.eslintrc.json`, etc.).
- The packages/ directory contains reusable code divided into separate pnpm packages (e.g., `@silocitypages/ui-core`, `@silocitypages/utils`).

When you run `pnpm install` from the root, pnpm links these local packages together and installs their dependencies alongside the root project's dependencies.

## Linting Configuration (Important for Forks)

This repository includes an ESLint configuration (`.eslintrc.json`) at the root that is set up to lint the code in both the root application shell and the packages within the `packages/` directory.

When you fork this repository, the `packages/` directory will be part of your working copy, not installed into `node_modules`. By default, your linter might try to lint the code within the `packages/` directory, which is usually not desired in a derived project.

To prevent your linter from processing the framework code in the `packages/` directory, it is recommended to explicitly ignore the `packages/` directory in your linting configuration.

The simplest way to do this is by creating or updating a `.eslintignore` file at the root of your forked project and adding the following line:

```bash
# Ignore the packages directory containing framework source code
packages/
```

Alternatively, you can add `"packages/"` to the ignorePatterns array in your `.eslintrc.json` file.

## Editing the Website

You can modify the main content and application-specific logic of your site by editing the files in the root application structure (e.g., files in the `pages/` directory, root components).

Core reusable components and utilities are located within the `packages/` directory. You should generally only modify code within `packages/` if you intend to contribute changes back to the base framework or customize the framework itself.

The project auto-updates changes as you edit when running `pnpm run dev`.

## Deployment

This website is hosted on GitHub Pages. To deploy updates, create a pull request with your changes. When merged into the `main` branch, GitHub Actions will automatically build and deploy the site using the workflow defined in `.github/workflows/nextjs.yml`.

## Features

- **Optimized Performance**: Uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) for automatic font optimization.
- **Modern Framework**: Built with the power of Next.js and React.
- **Monorepo Structure**: Organizes code into reusable packages using pnpm workspaces.
- **Consistent Styling**: Leverages React Bootstrap and custom components for a unified look and feel.
