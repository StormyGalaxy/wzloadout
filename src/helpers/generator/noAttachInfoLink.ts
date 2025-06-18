//Helpers
import { generateGithubLink } from '@/helpers/_silabs/generateGithubLink';
import { capitalizeFirstLetter } from '@/helpers/_silabs/capitalizeFirstLetter';
//Types
import { Weapon } from '@/types/Generator';

export function noAttachInfoLink(weapon: Weapon, count: number) {
  const game = capitalizeFirstLetter(weapon.game, '-');
  const type = capitalizeFirstLetter(weapon.type, '_');
  const githubLink = generateGithubLink(
    process.env.NEXT_PUBLIC_APP_GITHUB_OWNER,
    process.env.NEXT_PUBLIC_APP_GITHUB_REPO,
    {
      title: `[${game}] - Manage Weapon Attachments - [${weapon.name} - ${type}]`,
      labels: 'enhancement',
      template: 'manage-weapon-attachments-template.md',
    }
  );

  return [
    `No attachment info. Randomly select ${count}. <br> <a href="${githubLink}" target="_blank">Suggest Attachments</a>`,
  ];
}
