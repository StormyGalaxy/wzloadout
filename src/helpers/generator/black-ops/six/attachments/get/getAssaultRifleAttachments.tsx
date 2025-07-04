// --- Data ---
import default556 from '@/data/black-ops/six/attachments/assault_rifle/default556.json';
import ak74 from '@/data/black-ops/six/attachments/assault_rifle/ak74.json';
import asval from '@/data/black-ops/six/attachments/assault_rifle/asVal.json';
import goblinmk2 from '@/data/black-ops/six/attachments/assault_rifle/goblinMk2.json';
import xm4 from '@/data/black-ops/six/attachments/assault_rifle/xm4.json';
// --- DLC ---
import krigc from '@/data/black-ops/six/attachments/assault_rifle/krigC.json';
import cypher091 from '@/data/black-ops/six/attachments/assault_rifle/cypher091.json';
import kilo141 from '@/data/black-ops/six/attachments/assault_rifle/kilo141.json';
import cr56amax from '@/data/black-ops/six/attachments/assault_rifle/cr56amax.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  ames85: default556,
  gpr91: default556,
  modell: default556,
  ak74,
  asval,
  goblinmk2,
  xm4,
  krigc,
  cypher091,
  kilo141,
  cr56amax,
};

export function getAssaultRifleAttachments(
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
