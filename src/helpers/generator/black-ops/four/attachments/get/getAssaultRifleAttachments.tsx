// --- Data ---
import grav from '@/data/black-ops/four/attachments/assault_rifle/grav.json';
import icr7 from '@/data/black-ops/four/attachments/assault_rifle/icr7.json';
import kn57 from '@/data/black-ops/four/attachments/assault_rifle/kn57.json';
import maddoxRfb from '@/data/black-ops/four/attachments/assault_rifle/maddoxRfb.json';
import peacekeeper from '@/data/black-ops/four/attachments/assault_rifle/peacekeeper.json';
import rampart17 from '@/data/black-ops/four/attachments/assault_rifle/rampart17.json';
import vaprxkg from '@/data/black-ops/four/attachments/assault_rifle/vaprxkg.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  grav,
  icr7,
  kn57,
  maddoxrfb: maddoxRfb,
  peacekeeper,
  rampart17,
  vaprxkg,
};

export function getAssaultRifleAttachments(
  type: string,
  gun: string,
  count: number
): string[] | Record<string, string[]> {
  const attachments: string[] = [];
  const data = attachmentsList[gun];
  const dataList = data[type];
  if (count === -1) {
    return data;
  }

  if (data && dataList) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
