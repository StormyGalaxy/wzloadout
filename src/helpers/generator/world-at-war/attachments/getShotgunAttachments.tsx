// --- Data ---
import m1897trenchgun from '@/data/world-at-war/attachments/shotgun/m1897trenchgun.json';
import doublebarreledshotgun from '@/data/world-at-war/attachments/shotgun/doublebarreledshotgun.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = { m1897trenchgun, doublebarreledshotgun };

export function getShotgunAttachments(gun: string, count: number): string[] {
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
