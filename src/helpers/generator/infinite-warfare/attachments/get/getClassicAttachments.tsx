// --- Data ---
import hornet from '@/data/infinite-warfare/attachments/classic/hornet.json';
import m1 from '@/data/infinite-warfare/attachments/classic/m1.json';
import mactav45 from '@/data/infinite-warfare/attachments/classic/mactav45.json';
import osa from '@/data/infinite-warfare/attachments/classic/osa.json';
import sravage from '@/data/infinite-warfare/attachments/classic/sravage.json';
import tf141 from '@/data/infinite-warfare/attachments/classic/tf141.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  hornet,
  m1,
  mactav45,
  osa,
  sravage,
  tf141,
};

export function getClassicAttachments(
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

  if (data) {
    randomizeAttachments(attachments, dataList, count);
  }

  return attachments;
}
