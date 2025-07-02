// --- Data ---
import sirin9mm from '@/data/black-ops/six/attachments/special/sirin9mm.json';
import d13sector from '@/data/black-ops/six/attachments/special/d13sector.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { sirin9mm, d13sector };

export function getSpecialAttachments(
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
