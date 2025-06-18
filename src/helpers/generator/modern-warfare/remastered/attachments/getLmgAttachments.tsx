// --- Data ---
import default1 from '@/json/modern-warfare/remastered/attachments/lmg/default1.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  m249saw: default1,
  rpd: default1,
  m60e4: default1,
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
