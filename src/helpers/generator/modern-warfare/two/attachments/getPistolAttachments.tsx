// --- Data ---
import p890 from '@/data/modern-warfare/two/attachments/pistol/p890.json';
import gs50 from '@/data/modern-warfare/two/attachments/pistol/50gs.json';
import x12 from '@/data/modern-warfare/two/attachments/pistol/x12.json';
import basilisk from '@/data/modern-warfare/two/attachments/pistol/basilisk.json';
import ftacsiege from '@/data/modern-warfare/two/attachments/pistol/ftacSiege.json';
import gsmagna from '@/data/modern-warfare/two/attachments/pistol/gsmagna.json';
import daemon9mm from '@/data/modern-warfare/two/attachments/pistol/9mmDaemon.json';
import x13auto from '@/data/modern-warfare/two/attachments/pistol/x13auto.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  p890,
  '50gs': gs50,
  x12,
  basilisk,
  ftacsiege,
  gsmagna,
  '9mmdaemon': daemon9mm,
  x13auto,
};

export function getPistolAttachments(
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
