// --- Data ---
import default1 from '@/data/world-war-two/attachments/sniper/default1.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  karabin: default1,
  leeenfield: default1,
  m1903: default1,
  kar98k: default1,
};

export function getSniperAttachments(gun: string, count: number): string[] {
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
