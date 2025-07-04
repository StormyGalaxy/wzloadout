// --- Data ---
import gpmg7 from '@/data/black-ops/six/attachments/lmg/gpmg7.json';
import pu21 from '@/data/black-ops/six/attachments/lmg/pu21.json';
import xmg from '@/data/black-ops/six/attachments/lmg/xmg.json';
// --- DLC ---
import feng82 from '@/data/black-ops/six/attachments/lmg/feng82.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { gpmg7, pu21, xmg, feng82 };

export function getLmgAttachments(
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
