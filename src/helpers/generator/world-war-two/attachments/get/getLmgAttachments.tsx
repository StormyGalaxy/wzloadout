// --- Data ---
import default1 from '@/json/world-war-two/attachments/lmg/default1.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  lewis: default1,
  mg15: default1,
  bren: default1,
  mg42: default1,
  gpmg: default1,
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
