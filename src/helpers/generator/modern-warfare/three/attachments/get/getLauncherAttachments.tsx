// --- Data ---
import rgl80 from '@/data/modern-warfare/three/attachments/launcher/rgl80.json';
import stormender from '@/data/modern-warfare/three/attachments/launcher/stormender.json';
import torque35 from '@/data/modern-warfare/three/attachments/launcher/torque35.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { rgl80, stormender, torque35 };

export function getLauncherAttachments(
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
