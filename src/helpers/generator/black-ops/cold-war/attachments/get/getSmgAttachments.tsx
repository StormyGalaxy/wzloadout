// --- Data ---
import ak74u from '@/data/black-ops/cold-war/attachments/smg/ak74u.json';
import bullfrog from '@/data/black-ops/cold-war/attachments/smg/bullfrog.json';
import ksp45 from '@/data/black-ops/cold-war/attachments/smg/ksp45.json';
import lapa from '@/data/black-ops/cold-war/attachments/smg/lapa.json';
import lc10 from '@/data/black-ops/cold-war/attachments/smg/lc10.json';
import mac10 from '@/data/black-ops/cold-war/attachments/smg/mac10.json';
import milano821 from '@/data/black-ops/cold-war/attachments/smg/milano821.json';
import mp5 from '@/data/black-ops/cold-war/attachments/smg/mp5.json';
import ots9 from '@/data/black-ops/cold-war/attachments/smg/ots9.json';
import ppsh41 from '@/data/black-ops/cold-war/attachments/smg/ppsh41.json';
import tec9 from '@/data/black-ops/cold-war/attachments/smg/tec9.json';
import ugr from '@/data/black-ops/cold-war/attachments/smg/ugr.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  ak74u,
  bullfrog,
  ksp45,
  lapa,
  lc10,
  mac10,
  milano821,
  mp5,
  ots9,
  ppsh41,
  tec9,
  ugr,
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
