// --- Data ---
import koshka from '@/data/black-ops/four/attachments/sniper/koshka.json';
import outlaw from '@/data/black-ops/four/attachments/sniper/outlaw.json';
import paladinHb50 from '@/data/black-ops/four/attachments/sniper/paladinHb50.json';
import sdm from '@/data/black-ops/four/attachments/sniper/sdm.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  koshka,
  outlaw,
  paladinhb50: paladinHb50,
  sdm,
};

export function getSniperAttachments(
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
