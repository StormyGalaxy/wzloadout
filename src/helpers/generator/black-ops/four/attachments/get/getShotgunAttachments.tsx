// --- Data ---
import mog12 from '@/data/black-ops/four/attachments/shotgun/mog12.json';
import rampage from '@/data/black-ops/four/attachments/shotgun/rampage.json';
import sg12 from '@/data/black-ops/four/attachments/shotgun/sg12.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { mog12, rampage, sg12 };

export function getShotgunAttachments(
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
