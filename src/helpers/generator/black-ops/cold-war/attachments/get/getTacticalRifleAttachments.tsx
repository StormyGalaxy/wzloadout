// --- Data ---
import aug from '@/json/black-ops/cold-war/attachments/tactical_rifle/aug.json';
import dmr14 from '@/json/black-ops/cold-war/attachments/tactical_rifle/dmr14.json';
import m16 from '@/json/black-ops/cold-war/attachments/tactical_rifle/m16.json';
import type63 from '@/json/black-ops/cold-war/attachments/tactical_rifle/type63.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = { aug, dmr14, m16, type63 };

export function getTacticalRifleAttachments(
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
