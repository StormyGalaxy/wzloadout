# SiloCityPages

Welcome to SiloCityPages, a modern and efficient website framework built using Next.js, React Bootstrap, and TypeScript, designed for optimal performance and easy maintainability. This project leverages the power of GitHub Pages for seamless deployment and hosting. It also uses JSON files to hold project metadata and custom components to keep the project organized.

This repository is structured as a monorepo containing the main application shell and core reusable components/utilities in separate packages.

## Table of Contents

1.  [Getting Started](#getting-started)
2.  [Website Setup](#website-setup)
3.  [Configuration Deep Dive](#configuration-deep-dive)
4.  [Monorepo Structure](#monorepo-structure)
5.  [Linting Configuration (Important for Forks)](#linting-configuration-important-for-forks)
6.  [Editing the Website](#editing-the-website)
7.  [Testing](#testing)
8.  [Deployment](#deployment)
9.  [Features](#features)
10. [Contributing](#contributing)
11. [License](#license)
12. [Support](#support)

## Getting Started

To get started with the SiloCityPages project and run it locally, follow these steps:

1.  **Fork and Clone the Repository:**

    Fork the `SiloCityLabs/SiloCityPages` repository on GitHub. Then, clone your forked repository to your local machine:

    ```bash
    git clone git@github.com:YOUR_GITHUB_USERNAME/SiloCityPages.git
    cd SiloCityPages
    ```

    Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

2.  **Install pnpm:**

    This project uses pnpm as its package manager, which is recommended for monorepos. If you don't have pnpm installed globally, you can install it using npm:

    ```bash
    npm install -g pnpm
    ```

3.  **Install Dependencies:**

    Navigate to the root of the cloned repository and install all project and package dependencies using pnpm:

    ```bash
    pnpm install
    ```

4.  **Run the Development Server:**

    Start the Next.js development server:

    ```bash
    pnpm run dev:turbo
    ```

5.  **Build one package**

    Replace `<package-name>` with the package you would like to build (e.g., `ui-core`, `utils`).

    ```bash
    pnpm --filter=@silocitypages/<package-name> run build
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Website Setup

Before diving deep, ensure your environment is correctly set up:

- **Environment Variables**: Copy `.env.example` to `.env.local` and update the necessary values. This file is for local environment variables like API keys or your Google Analytics ID. For example, `NEXT_PUBLIC_GA_TRACKING_ID` is used for Google Analytics.
- **`package.json`**: Review and update the root `package.json` with your project's specific details (name, author, repository URL, etc.).
- **Public Assets & SEO**:
  - `public/manifest.json`: Update the Web App Manifest with your site's name, short name, icons, and theme colors. This is crucial for PWA behavior.
  - `public/sitemap.xml`: Modify the sitemap to reflect your website's page structure. This helps search engines crawl your site effectively.
  - `public/robots.txt`: Adjust `robots.txt` if you need to control how search engine crawlers access parts of your site.
- **Code Style**: Update `.prettierrc.mjs` if you have specific code style preferences that differ from the project's defaults.
- **Linting**: Review the [Linting Configuration](#linting-configuration-important-for-forks) section, especially if you are forking this repository.

## Configuration Deep Dive

Understanding the key configuration files will help you tailor SiloCityPages to your needs:

- **`next.config.mjs`**: This is the main configuration file for Next.js. Here you can customize settings related to:
  - **Output Mode**: Configured for `export` for static site generation compatible with GitHub Pages.
  - **Image Optimization**: Settings for `next/image`.
  - **Environment Variables**: Public environment variables are prefixed with `NEXT_PUBLIC_`.
  - **Webpack Customization**: Advanced options to modify the webpack build process if needed.
- **`.env.local`**: Used for defining environment variables for your local development. Values here override those in `.env.example` and are not committed to Git. Ensure sensitive keys are stored securely.
- **`tsconfig.json`**: TypeScript compiler options for the project. It defines how TypeScript files are transpiled into JavaScript, including target ECMAScript version, module system, JSX processing, and path aliases.
- **`public/manifest.json`**: Defines your Progressive Web App (PWA) settings. It allows users to add your website to their home screen, and specifies icons, theme colors, and display mode.
- **`public/sitemap.xml`**: Provides a map of your site's pages to search engines. Essential for SEO, ensure it's updated as you add or remove pages.

## Monorepo Structure

This repository is organized as a monorepo using pnpm workspaces, defined in `pnpm-workspace.yaml`.

- The root directory ( `/` ) contains the main Next.js application shell and global configuration files (`package.json`, `next.config.mjs`, `.eslintrc.mjs`, etc.).
- The `packages/` directory contains reusable code divided into separate pnpm packages:
  - **`@silocitypages/ui-core`**: Contains core reusable UI components (e.g., `CustomAlert`, `SclCard`, `SclFooter`), custom hooks, and associated styles (including CSS Modules like `SclBadges.module.css`). This package helps maintain a consistent look and feel across the application.
  - **`@silocitypages/utils`**: Provides shared utility functions that can be used across the application and other packages. Examples include `capitalizeFirstLetter`, `generateGithubLink`, and analytics helpers for `gtag.js`.
  - **`@silocitypages/data-access`**: Manages data operations, currently set up for PouchDB for client-side storage. It includes functions for saving, retrieving, and deleting documents.
  - **`@silocitypages/eslint-config`**: A shareable ESLint configuration used across the monorepo to enforce consistent code style and quality.

When you run `pnpm install` from the root, pnpm links these local packages together and installs their dependencies alongside the root project's dependencies.

## Linting Configuration (Important for Forks)

This repository includes an ESLint configuration file (`.eslintrc.mjs`) at the root. This configuration extends the shared rules defined in the `@silocitypages/eslint-config` package and is used to lint the code in the root application shell and the source code within the `packages/` directory when working in the monorepo base.

When you fork this repository to start a new project, the `packages/` directory containing the framework source code will be part of your working copy, not installed into `node_modules`. By default, your linter will try to process the code within this `packages/` directory, which is usually not desired in a forked project.

To prevent your linter from processing the framework code in the `packages/` directory, it is **highly recommended** to explicitly ignore the `packages/` directory in your linting configuration in your forked project.

The simplest way to do this is by creating or updating a `.eslintignore` file at the root of your forked project and adding the following line:

```bash
# Ignore the packages directory containing framework source code
packages/
```
