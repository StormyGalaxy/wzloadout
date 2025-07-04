// --- Data ---
import gallosa12 from '@/data/black-ops/cold-war/attachments/shotgun/gallosa12.json';
import hauer77 from '@/data/black-ops/cold-war/attachments/shotgun/hauer77.json';
import ironhide410 from '@/data/black-ops/cold-war/attachments/shotgun/ironhide410.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  gallosa12,
  hauer77,
  ironhide410,
};

export function getShotgunAttachments(
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
