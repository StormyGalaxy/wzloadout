// --- Data ---
import kvBroadside from '@/data/modern-warfare/two/attachments/shotgun/kvBroadside.json';
import lockwood300 from '@/data/modern-warfare/two/attachments/shotgun/lockwood300.json';
import expedtite12 from '@/data/modern-warfare/two/attachments/shotgun/expedtite12.json';
import bryson800 from '@/data/modern-warfare/two/attachments/shotgun/bryson800.json';
import mxguardian from '@/data/modern-warfare/two/attachments/shotgun/mxGuardian.json';
import bryson890 from '@/data/modern-warfare/two/attachments/shotgun/bryson890.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  kvBroadside,
  lockwood300,
  expedtite12,
  bryson800,
  mxguardian,
  bryson890,
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
