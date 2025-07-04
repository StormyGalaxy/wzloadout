# COD RCG

[![Visit Site](https://img.shields.io/badge/Visit-codrcg.com-blue?style=for-the-badge&logo=rocket)](https://codrcg.com)

Welcome to the **Call of Duty Random Class Generator (COD RCG)**! This is your essential utility website and toolkit for the popular [Call of Duty](https://www.callofduty.com/) franchise, providing helpful tools and information to enhance your gameplay experience. You can also refer to it as the **COD RCG**.

This project is built using the [SiloCityPages](https://github.com/SiloCityLabs/SiloCityPages) Next.js starter. You can find the original SiloCityPages README [in our wiki: [README]-SiloCityPages](https://github.com/SiloCityLabs/codrcg.com/wiki/%5BREADME%5D-SiloCityPages).

## ✨ Key Features

The **COD RCG** offers several tools to assist players across various Call of Duty titles:

- **🎲 Random Loadout Generator:**
  - Can't decide on your next class setup? Get a completely random loadout including:
    - Primary Weapon (with attachments)
    - Secondary Weapon (with attachments)
    - Perks
    - Lethal and Tactical Equipment
    - Killstreaks / Scorestreaks
    - Wildcards (where applicable)
    - Unique class names
  - Fine-tune your randomization by selecting specific categories or games.
  - Visit the site and select your desired Call of Duty game's generator (e.g., Multiplayer, Zombies).
- **📍 Where We Droppin' (Warzone Battle Royale & Resurgence):**
  - Take the guesswork out of your squad's landing spot in Call of Duty: Warzone.
  - Randomly selects a named location on popular maps like Verdansk, Urzikstan, Rebirth Island, or Area 99.
  - Try it out: [Where We Droppin'](https://codrcg.com/warzone/where-we-droppin)
- **📚 Info Hub:**
  - Browse detailed information about in-game items across various Call of Duty titles, including:
    - Weapons (Primary, Secondary, Melee, Launchers, Special, Marksman Rifles, Classic) - including available attachments!
    - Equipment (Lethal, Tactical, Field Upgrades, Vests, Gear, Combat Rigs, Divisions)
    - Perks (Perk 1, 2, 3 / Base, Bonus, Ultimate)
    - Streaks (Killstreaks / Scorestreaks)
    - Specialists
    - Wildcards
    - Zombies (Maps, Elixirs, Gobblegums, Ammo Mods, Augments, Artifacts, Specials, Talismans, Characters)
    - Custom Match (Game Modes, Maps, Rules, General)
  - Explore the Info Hub by selecting your desired Call of Duty game and category (e.g., Weapons, Perks).

## 🚀 How to Use

1.  **Visit the site:** [codrcg.com](https://codrcg.com) (Home of the Call of Duty Random Class Generator)
2.  **Navigate to your desired tool:**
    - **Loadout Generator:** Head to the "Generator" section (e.g., `/black-ops/six/generator`). Click the "Randomize" button to get a new loadout. Use the dropdowns to filter by specific options if desired.
    - **Where We Droppin':** Go to "[Where We Droppin'](https://codrcg.com/warzone/where-we-droppin)" and select your preferred Warzone map type (Battle Royale or Resurgence). A random map location will be displayed. Click the button again for a new suggestion.
    - **Info Hub:** Explore the "Info" section (e.g., `/black-ops/six/info`) and its sub-categories (Weapons, Equipment, Perks, etc.) to find details on game items for different Call of Duty games.

## 🛠️ Technology Stack & Deployment

- **Framework:** [Next.js](https://nextjs.org/) (React Framework)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules, global styles
- **Base Template:** [SiloCityPages](https://github.com/SiloCityLabs/SiloCityPages)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 🖥️ Running Locally

To get a local copy up and running for development or testing the COD RCG:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SiloCityLabs/codrcg.com.git](https://github.com/SiloCityLabs/codrcg.com.git)
    cd codrcg.com
    ```
2.  **Install dependencies:**
    This project uses `pnpm` as per the `pnpm-lock.yaml`.
    ```bash
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For more detailed information on the underlying framework structure, linting, testing, etc., please refer to the original [SiloCityPages documentation in our wiki: [README]-SiloCityPages](https://github.com/SiloCityLabs/codrcg.com/wiki/%5BREADME%5D-SiloCityPages).

## 🤝 Contributing to the COD RCG

Contributions are welcome! Whether it's bug reports, feature requests, or direct code contributions to the **COD RCG**, your help is appreciated.

- **Found a bug?** Please submit a [Bug Report](https://github.com/SiloCityLabs/codrcg.com/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D).
- **Have an idea for a new feature?** Submit a [Feature Request](https://github.com/SiloCityLabs/codrcg.com/issues/new?assignees=&labels=enhancement&template=feature-request-template.md&title=%5BFEATURE%5D).
- **Want to help with game data?**
  - **Add Missing Weapon Attachments:** If you notice a weapon is missing attachments in the Info Hub, you can help us add them! Please use the [Manage Weapon Attachments Template](https://github.com/SiloCityLabs/codrcg.com/issues/new?template=manage-weapon-attachments-template.md) to submit the details.
- **Want to contribute code?**
  1.  Fork the Project
  2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4.  Push to the Branch (`git push origin feature/AmazingFeature`)
  5.  Open a Pull Request

You can also provide general feedback through the [Feedback Form](https://codrcg.com/feedback) on the website.

## 📜 Disclaimer

The **Call of Duty Random Class Generator** is a fan-made project and is not officially affiliated with Activision Publishing, Inc. or the "Call of Duty" franchise. All game content, names, and trademarks are the property of their respective owners.

For official information, please visit the [Official Call of Duty website](https://www.callofduty.com/).

## 📄 License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

[![CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

You are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial** — You may not use the material for commercial purposes.
- **ShareAlike** — If you remix, transform, and build upon the material, you must distribute your contributions under the same license as the original.

---

The **COD RCG** is made with ❤️ by SiloCityLabs for the Call of Duty community.
