// --- Data ---
import combatShotgun from '@/json/vanguard/attachments/shotgun/combatShotgun.json';
import doubleBarrel from '@/json/vanguard/attachments/shotgun/doubleBarrel.json';
import einhornRevolving from '@/json/vanguard/attachments/shotgun/einhornRevolving.json';
import graceyAuto from '@/json/vanguard/attachments/shotgun/graceyAuto.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  combatshotgun: combatShotgun,
  doublebarrel: doubleBarrel,
  einhornrevolving: einhornRevolving,
  graceyauto: graceyAuto,
};

export function getShotgunAttachments(
  gun: string,
  count: number
): Record<string, string> | Record<string, string[]> {
  const attachments: Record<string, string> = {};
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
