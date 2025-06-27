// --- Data ---
import hades from '@/json/black-ops/four/attachments/lmg/hades.json';
import titan from '@/json/black-ops/four/attachments/lmg/titan.json';
import vkm750 from '@/json/black-ops/four/attachments/lmg/vkm750.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { hades, titan, vkm750 };

export function getLmgAttachments(
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
