// --- Data ---
import nineMmPm from '@/data/black-ops/six/attachments/pistol/9mmPm.json';
import grekhova from '@/data/black-ops/six/attachments/pistol/grekhova.json';
import gs45 from '@/data/black-ops/six/attachments/pistol/gs45.json';
import stryder22 from '@/data/black-ops/six/attachments/pistol/stryder22.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  '9mmpm': nineMmPm,
  grekhova,
  gs45,
  stryder22,
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
