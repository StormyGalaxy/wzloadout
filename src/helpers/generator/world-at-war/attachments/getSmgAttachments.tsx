// --- Data ---
import thompson from '@/data/world-at-war/attachments/smg/thompson.json';
import mp40 from '@/data/world-at-war/attachments/smg/mp40.json';
import type100 from '@/data/world-at-war/attachments/smg/type100.json';
import ppsh41 from '@/data/world-at-war/attachments/smg/ppsh41.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = { thompson, mp40, type100, ppsh41 };

export function getSmgAttachments(gun: string, count: number): string[] {
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
