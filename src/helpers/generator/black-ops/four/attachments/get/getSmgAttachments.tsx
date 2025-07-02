// --- Data ---
import cordite from '@/data/black-ops/four/attachments/smg/cordite.json';
import gks from '@/data/black-ops/four/attachments/smg/gks.json';
import mx9 from '@/data/black-ops/four/attachments/smg/mx9.json';
import saug9mm from '@/data/black-ops/four/attachments/smg/saug9mm.json';
import spitfire from '@/data/black-ops/four/attachments/smg/spitfire.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  cordite,
  gks,
  mx9,
  saug9mm,
  spitfire,
};

export function getSmgAttachments(
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
