// --- Data ---
import default1 from '@/json/world-war-two/attachments/pistol/default1.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  p08: default1,
  '1911': default1,
  machinepistol: default1,
  '9mmsap': default1,
};

export function getPistolAttachments(gun: string, count: number): string[] {
  const attachments: string[] = [];
  const data = attachmentsList[gun];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
