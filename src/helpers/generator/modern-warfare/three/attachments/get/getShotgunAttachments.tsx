// --- Data ---
import reclaimer18 from '@/data/modern-warfare/three/attachments/shotgun/reclaimer18.json';
import lockwood680 from '@/data/modern-warfare/three/attachments/shotgun/lockwood680.json';
import haymaker from '@/data/modern-warfare/three/attachments/shotgun/haymaker.json';
import riveter from '@/data/modern-warfare/three/attachments/shotgun/riveter.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  reclaimer18,
  lockwood680,
  haymaker,
  riveter,
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
