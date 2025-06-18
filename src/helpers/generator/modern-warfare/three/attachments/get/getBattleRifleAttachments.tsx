import dtir3006 from '@/json/modern-warfare/three/attachments/battle_rifle/dtir3006.json';
import soasubverter from '@/json/modern-warfare/three/attachments/battle_rifle/soaSubverter.json';
import basb from '@/json/modern-warfare/three/attachments/battle_rifle/basb.json';
import sidewinder from '@/json/modern-warfare/three/attachments/battle_rifle/sidewinder.json';
import mtz762 from '@/json/modern-warfare/three/attachments/battle_rifle/mtz762.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  dtir3006,
  soasubverter,
  basb,
  sidewinder,
  mtz762,
};

export function getBattleRifleAttachments(
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
