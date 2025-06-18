// --- Attachments ---
import { getBO4Attachments } from './getBO4Attachments';
// --- Helpers ---
import { noAttachInfoLink } from '@/helpers/generator/noAttachInfoLink';
// --- Types ---
import { Weapon } from '@/types/Generator';

export function fetchAttachments(weapon: Weapon, type: string, count: number = 1): string[] {
  if (weapon?.no_attach_info) {
    return noAttachInfoLink(weapon, count);
  }

  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const data = getBO4Attachments(weapon.type, gun, count, type);

  return data;
}
