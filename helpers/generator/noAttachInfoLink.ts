//Helpers
import { generateGithubLink } from "@/helpers/_silabs/generateGithubLink";
//Types
import { Weapon } from "@/types/Generator";

export function noAttachInfoLink(weapon: Weapon, count: number) {
  const game = weapon.game
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const type = weapon.type
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    {
      title: `[${game}] - Manage Weapon Attachments - [${weapon.name} - ${type}]`,
      labels: "enhancement",
      template: "manage-weapon-attachments-template.md",
    }
  );

  return [
    `No attachment info. Randomly select ${count}. <br> <a href="${githubLink}" target="_blank">Suggest Attachments</a>`,
  ];
}
