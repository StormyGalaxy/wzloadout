// --- Data ---
import lachmann762 from '@/data/modern-warfare/two/attachments/battle_rifle/lachmann762.json';
import cronensquall from '@/data/modern-warfare/two/attachments/battle_rifle/cronenSquall.json';
import ftacrecon from '@/data/modern-warfare/two/attachments/battle_rifle/ftacRecon.json';
import taqv from '@/data/modern-warfare/two/attachments/battle_rifle/taqv.json';
import so14 from '@/data/modern-warfare/two/attachments/battle_rifle/so14.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  lachmann762,
  cronensquall,
  ftacrecon,
  taqv,
  so14,
};

export function getBattleRifleAttachments(
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
