// --- Data ---
import aek973 from '@/data/black-ops/six/attachments/marksman_rifle/aek973.json';
import dm10 from '@/data/black-ops/six/attachments/marksman_rifle/dm10.json';
import swat556 from '@/data/black-ops/six/attachments/marksman_rifle/swat556.json';
import tsarkov762 from '@/data/black-ops/six/attachments/marksman_rifle/tsarkov762.json';
// --- DLC ---
import tr2 from '@/data/black-ops/six/attachments/marksman_rifle/tr2.json';
import essexmodel07 from '@/data/black-ops/six/attachments/marksman_rifle/essexmodel07.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  aek973,
  dm10,
  swat556,
  tsarkov762,
  tr2,
  essexmodel07,
};

export function getMarksmanRifleAttachments(
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
