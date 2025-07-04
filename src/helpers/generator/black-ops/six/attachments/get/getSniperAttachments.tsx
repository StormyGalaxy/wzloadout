// --- Data ---
import lr762 from '@/data/black-ops/six/attachments/sniper/lr762.json';
import lw3a1Frostline from '@/data/black-ops/six/attachments/sniper/lw3a1Frostline.json';
import svd from '@/data/black-ops/six/attachments/sniper/svd.json';
import amrmod4 from '@/data/black-ops/six/attachments/sniper/amrmod4.json';
import hdr from '@/data/black-ops/six/attachments/sniper/hdr.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  lr762,
  lw3a1frostline: lw3a1Frostline,
  svd,
  amrmod4,
  hdr,
};

export function getSniperAttachments(
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
