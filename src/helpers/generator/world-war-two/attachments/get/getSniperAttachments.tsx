// --- Data ---
import default1 from '@/json/world-war-two/attachments/sniper/default1.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  karabin: default1,
  leeenfield: default1,
  m1903: default1,
  kar98k: default1,
};

export function getSniperAttachments(gun: string, count: number): string[] {
  const attachments: string[] = [];
  const data = attachmentsList[gun];

  console.log('Sniper Attachments: ', gun, data, count);

  if (data) {
    if (count === -1) {
      console.log('Sniper Attachments 1.25: ');
      return data;
    }
    console.log('Sniper Attachments 1.5: ');

    randomizeAttachments(attachments, data, count);
    console.log('Sniper Attachments 1.75: ', attachments);
  }
  console.log('Sniper Attachments 2: ', attachments);

  return attachments;
}
