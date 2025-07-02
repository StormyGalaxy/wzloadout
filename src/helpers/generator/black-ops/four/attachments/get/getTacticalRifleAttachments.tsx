// --- Data ---
import abr223 from '@/data/black-ops/four/attachments/tactical_rifle/abr223.json';
import augerdmr from '@/data/black-ops/four/attachments/tactical_rifle/augerdmr.json';
import swordfish from '@/data/black-ops/four/attachments/tactical_rifle/swordfish.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { abr223, augerdmr, swordfish };

export function getTacticalRifleAttachments(
  type: string,
  gun: string,
  count: number
): string[] | Record<string, string[]> {
  const attachments: string[] = [];
  const data = attachmentsList[gun];
  const dataList = data[type];
  if (count === -1) {
    return data;
  }

  if (data && dataList) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
