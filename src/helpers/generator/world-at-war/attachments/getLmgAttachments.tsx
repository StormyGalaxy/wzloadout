// --- Data ---
import default1 from '@/data/world-at-war/attachments/lmg/default.json';
import type99 from '@/data/world-at-war/attachments/lmg/type99.json';
import fg42 from '@/data/world-at-war/attachments/lmg/fg42.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  type99,
  bar: default1,
  dp28: default1,
  mg42: default1,
  fg42,
  browningm1919: default1,
};

export function getLmgAttachments(gun: string, count: number): string[] {
  const attachments: string[] = [];
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
