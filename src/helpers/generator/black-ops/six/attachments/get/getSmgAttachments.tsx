// --- Data ---
import c9 from '@/data/black-ops/six/attachments/smg/c9.json';
import jackalpdw from '@/data/black-ops/six/attachments/smg/jackalPdw.json';
import kompakt92 from '@/data/black-ops/six/attachments/smg/kompakt92.json';
import ksv from '@/data/black-ops/six/attachments/smg/ksv.json';
import pp919 from '@/data/black-ops/six/attachments/smg/pp919.json';
import tanto22 from '@/data/black-ops/six/attachments/smg/tanto22.json';
//DLC Weapons
import saug from '@/data/black-ops/six/attachments/smg/saug.json';
import ppsh41 from '@/data/black-ops/six/attachments/smg/ppsh41.json';
import lc10 from '@/data/black-ops/six/attachments/smg/lc10.json';
import ladra from '@/data/black-ops/six/attachments/smg/ladra.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  c9,
  jackalpdw,
  kompakt92,
  ksv,
  pp919,
  tanto22,
  saug,
  ppsh41,
  lc10,
  ladra,
};

export function getSmgAttachments(gun: string, count: number) {
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
