// --- Data ---
import bren from '@/data/vanguard/attachments/lmg/bren.json';
import dp27 from '@/data/vanguard/attachments/lmg/dp27.json';
import lienna57 from '@/data/vanguard/attachments/lmg/lienna57.json';
import mg42 from '@/data/vanguard/attachments/lmg/mg42.json';
import type11 from '@/data/vanguard/attachments/lmg/type11.json';
import ugm8 from '@/data/vanguard/attachments/lmg/ugm8.json';
import whitley from '@/data/vanguard/attachments/lmg/whitley.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  bren,
  dp27,
  lienna57,
  mg42,
  type11,
  ugm8,
  whitley,
};

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
