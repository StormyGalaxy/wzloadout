// --- Data ---
import renetti from '@/json/modern-warfare/three/attachments/pistol/renetti.json';
import tyr from '@/json/modern-warfare/three/attachments/pistol/tyr.json';
import wspStinger from '@/json/modern-warfare/three/attachments/pistol/wspStinger.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  renetti,
  tyr,
  wspstinger: wspStinger,
};

export function getPistolAttachments(
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
