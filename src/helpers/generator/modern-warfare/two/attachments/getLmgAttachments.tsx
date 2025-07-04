// --- Data ---
import sakinmg38 from '@/data/modern-warfare/two/attachments/lmg/sakinMg38.json';
import raalmg from '@/data/modern-warfare/two/attachments/lmg/raalMg.json';
import icarus556 from '@/data/modern-warfare/two/attachments/lmg/556icarus.json';
import rapph from '@/data/modern-warfare/two/attachments/lmg/rapph.json';
import hcr56 from '@/data/modern-warfare/two/attachments/lmg/hcr56.json';
import rpk from '@/data/modern-warfare/two/attachments/lmg/rpk.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  sakinmg38,
  raalmg,
  '556icarus': icarus556,
  rapph,
  hcr56,
  rpk,
};

export function getLmgAttachments(
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
