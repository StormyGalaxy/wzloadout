// --- Attachments ---
import { getOptics } from './attachments/get/getOptics';
import { getAttachments } from './attachments/get/getAttachments';
// --- Types ---
import { Weapon } from '@/types/Generator';

// Define the specific return types for clarity
type AllAttachmentsResult = { optic: string[]; attachments: string[] };
type BO3AttachmentsResult = AllAttachmentsResult | string[] | Record<string, never>;

const attachmentGetter: Record<string, (type: string, gun: string, count: number) => string[]> = {
  optic: getOptics,
  attachments: getAttachments,
};

export function getBO3Attachments(
  weapon: Weapon,
  type: string,
  count: number = 1
): BO3AttachmentsResult {
  const gun = weapon.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (type === 'all') {
    return {
      optic: getOptics(weapon.type, gun, count),
      attachments: getAttachments(weapon.type, gun, count),
    };
  }
  const getGunAttachments = attachmentGetter[type];

  if (getGunAttachments) {
    return getGunAttachments(weapon.type, gun, count);
  } else {
    return {};
  }
}
