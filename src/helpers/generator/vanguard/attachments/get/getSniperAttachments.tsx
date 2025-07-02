// --- Data ---
import threeLineRifle from '@/data/vanguard/attachments/sniper/3lineRifle.json';
import gorenkoAntitankRifle from '@/data/vanguard/attachments/sniper/gorenkoAntitankRifle.json';
import kar98k from '@/data/vanguard/attachments/sniper/kar98k.json';
import type99 from '@/data/vanguard/attachments/sniper/type99.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  '3linerifle': threeLineRifle,
  gorenkoantitankrifle: gorenkoAntitankRifle,
  kar98k,
  type99,
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
