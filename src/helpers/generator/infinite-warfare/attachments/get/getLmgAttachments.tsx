// --- Data ---
import default1 from '@/json/infinite-warfare/attachments/lmg/default1.json';
import default2 from '@/json/infinite-warfare/attachments/lmg/default2.json';
import auger from '@/json/infinite-warfare/attachments/lmg/auger.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  auger,
  mauler: default1,
  atlas: default1,
  raw: default2,
  titan: default2,
};

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

  if (data) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
