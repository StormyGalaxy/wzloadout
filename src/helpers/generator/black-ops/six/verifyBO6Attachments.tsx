import { isset } from '@/helpers/isset';

const AKIMBO = 'Akimbo';
const BURST = '3-Round Burst Mod';

export function verifyBO6Attachments(
  attachData: Record<string, any>, // This is the full pool of available attachments, e.g., {stock: ['Akimbo', 'No Stock']}
  attachments: Record<string, string>, // This is the *currently selected* attachments, e.g., {stock: 'Akimbo'}
  attachment: string, // The attachment currently being considered for addition (a single string)
  attachmentType: string, // The type/slot of the attachment being considered (e.g., 'stock', 'laser')
  count: number,
  modifyCount: (newCount: number) => void
): boolean {
  const attachmentBooleans = getAttachmentBooleans(attachmentType);
  const issetAttachment = getIssetAttachments(attachments); // This will now correctly receive Record<string, string>
  const LASER_INCOMPATIBLE_WITH_AKIMBO = ['Tactical Laser', 'Strelok Laser', 'Target Laser'];

  // These checks now correctly compare single strings
  const hasAkimbo = issetAttachment.stock && attachments['stock'] === AKIMBO;
  const hasThreeRoundBurst = issetAttachment.fireMods && attachments['fire_mods'] === BURST;

  // --- Akimbo Incompatibility Checks ---
  const isCurrentAkimbo = attachment === AKIMBO; // Check if the NEW attachment is Akimbo

  if (
    // Scenario 1: New attachment is Akimbo, AND an incompatible existing attachment is present
    (isCurrentAkimbo && (issetAttachment.optic || issetAttachment.underbarrel)) ||
    (isCurrentAkimbo &&
      issetAttachment.laser &&
      LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachments['laser'])) ||
    // Scenario 2: Akimbo is ALREADY selected, AND the new attachment is incompatible
    (hasAkimbo && (attachmentBooleans.isStock || attachmentBooleans.isOptic)) || // If Akimbo is present, can't add another stock or an optic
    (hasAkimbo && attachmentBooleans.isLaser && LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachment)) // If Akimbo is present, can't add certain lasers
  ) {
    if (Object.keys(attachData.stock || {}).length === 1 && count > 7) {
      // This logic is specific to your game's rules. Ensure it's what you intend.
      // It reduces the total attachment count if only Akimbo is available in 'stock' and count is high.
      modifyCount(7);
    }
    return false; // Prevent adding the attachment
  }

  // --- 3-Round Burst Mod Incompatibility Checks ---
  const isCurrentBurst = attachment === BURST; // Check if the NEW attachment is 3-Round Burst

  if (
    // Scenario 1: New attachment is 3-Round Burst, AND an incompatible existing attachment is present
    (isCurrentBurst && (issetAttachment.barrel || issetAttachment.underbarrel)) ||
    // Scenario 2: 3-Round Burst is ALREADY selected, AND the new attachment is incompatible
    (hasThreeRoundBurst && (attachmentBooleans.isBarrel || attachmentBooleans.isUnderbarrel))
  ) {
    return false; // Prevent adding the attachment
  }

  // Lower the count to 7 if it's at 8 and akimbo or 3-round burst is selected
  // This is a general adjustment to the total attachment count.
  if ((hasAkimbo || hasThreeRoundBurst) && count > 7) {
    modifyCount(7);
  }

  return true; // Allow the attachment
}

function getAttachmentBooleans(attachmentType: string) {
  return {
    isBarrel: attachmentType === 'barrel',
    isUnderbarrel: attachmentType === 'underbarrel',
    isStock: attachmentType === 'stock',
    isLaser: attachmentType === 'laser',
    isFireMods: attachmentType === 'fire_mods',
    isMuzzle: attachmentType === 'muzzle',
    isOptic: attachmentType === 'optic',
    isMagazine: attachmentType === 'magazine',
    isRearGrip: attachmentType === 'rear_grip',
  };
}

function getIssetAttachments(attachments: Record<string, string>) {
  return {
    barrel: isset(attachments['barrel']),
    underbarrel: isset(attachments['underbarrel']),
    stock: isset(attachments['stock']),
    laser: isset(attachments['laser']),
    fireMods: isset(attachments['fire_mods']),
    muzzle: isset(attachments['muzzle']),
    optic: isset(attachments['optic']),
    magazine: isset(attachments['magazine']),
    rearGrip: isset(attachments['rear_grip']),
  };
}
