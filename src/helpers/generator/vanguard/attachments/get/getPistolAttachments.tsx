// --- Data ---
import one911 from '@/json/vanguard/attachments/pistol/1911.json';
import klauser from '@/json/vanguard/attachments/pistol/klauser.json';
import machinePistol from '@/json/vanguard/attachments/pistol/machinePistol.json';
import ratt from '@/json/vanguard/attachments/pistol/ratt.json';
import topBreak from '@/json/vanguard/attachments/pistol/topBreak.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  '1911': one911,
  klauser,
  machinepistol: machinePistol,
  ratt,
  topbreak: topBreak,
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
