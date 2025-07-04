import { isset } from '@/helpers/isset';

const AKIMBO = 'Akimbo';
const BURST = '3-Round Burst Mod';
const G_GRIP = 'G-Grip';

/**
 * Verifies attachment compatibility rules for Black Ops 6, preventing invalid attachment combinations.
 * This function checks if a proposed `attachment` can be added given the `currently selected attachments`
 * and applies game-specific rules for Akimbo and 3-Round Burst mods. It also adjusts the
 * total allowed attachment `count` if certain conditions are met (e.g., Akimbo being selected).
 *
 * @param attachData The full pool of available attachments, typically an object where keys are
 * attachment slots (e.g., 'stock') and values are arrays of attachment names (e.g.,
 * `['Akimbo', 'No Stock']`). This is the raw list of options for each slot.
 * @param attachments The *currently selected* attachments on the weapon, represented as an object
 * where keys are attachment slots and values are single string names of the
 * selected attachment (e.g., `{ stock: 'Akimbo', barrel: 'Long Barrel' }`).
 * @param attachment The name of the attachment currently being considered for addition to the weapon.
 * @param attachmentType The type or slot of the `attachment` being considered (e.g., 'stock', 'laser').
 * @param count The current total number of attachments allowed or selected. This value might be
 * modified by the function via `modifyCount`.
 * @param modifyCount A callback function used to update the `count` of allowed attachments
 * if game rules (like Akimbo) reduce the maximum.
 * @returns {boolean} `true` if the `attachment` can be added without violating game rules;
 * `false` otherwise.
 */
export function verifyBO6Attachments(
  attachData: Record<string, string[]>, // Changed type to match randomizeAttachments' data parameter
  attachments: Record<string, string>,
  attachment: string,
  attachmentType: string,
  count: number,
  modifyCount: (newCount: number) => void
): boolean {
  const attachmentBooleans = getAttachmentBooleans(attachmentType);
  const issetAttachment = getIssetAttachments(attachments);
  const LASER_INCOMPATIBLE_WITH_AKIMBO = ['Tactical Laser', 'Strelok Laser', 'Target Laser'];

  // Current state of attachments
  const hasAkimbo = issetAttachment.stock && attachments['stock'] === AKIMBO;
  const hasThreeRoundBurst = issetAttachment.fireMods && attachments['fire_mods'] === BURST;
  const hasGGrip = issetAttachment.underbarrel && attachments['underbarrel'] === G_GRIP;

  // State of the attachment currently being considered
  const isCurrentAkimbo = attachment === AKIMBO;
  const isCurrentBurst = attachment === BURST;
  const isCurrentGGrip = attachment === G_GRIP;

  // --- Akimbo Incompatibility Checks ---
  if (
    (isCurrentAkimbo && (issetAttachment.optic || issetAttachment.underbarrel)) ||
    (isCurrentAkimbo &&
      issetAttachment.laser &&
      LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachments['laser'])) ||
    (hasAkimbo && (attachmentBooleans.isStock || attachmentBooleans.isOptic)) ||
    (hasAkimbo && attachmentBooleans.isLaser && LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachment))
  ) {
    // Note: attachData.stock will now be a string[] (e.g., ['Akimbo', 'Normal Stock'])
    // Object.keys on an array returns array indices (e.g., ['0', '1']), and .length returns the size.
    // So, `Object.keys(attachData.stock).length === 1` means `attachData.stock.length === 1`.
    if (Object.keys(attachData.stock || {}).length === 1 && count > 7) {
      modifyCount(7);
    }
    return false;
  }

  // --- 3-Round Burst Mod Incompatibility Checks ---
  if (
    (isCurrentBurst && (issetAttachment.barrel || issetAttachment.underbarrel)) ||
    (hasThreeRoundBurst && (attachmentBooleans.isBarrel || attachmentBooleans.isUnderbarrel))
  ) {
    return false;
  }

  // --- G-Grip and Laser Incompatibility Checks ---
  if (
    (isCurrentGGrip && attachmentBooleans.isUnderbarrel && issetAttachment.laser) ||
    (attachmentBooleans.isLaser && hasGGrip)
  ) {
    return false;
  }

  // Determine if Akimbo or 3-Round Burst will be in the loadout AFTER this attachment is (potentially) added.
  const willHaveAkimboInFinalLoadout = hasAkimbo || (isCurrentAkimbo && attachmentType === 'stock');
  const willHaveThreeRoundBurstInFinalLoadout =
    hasThreeRoundBurst || (isCurrentBurst && attachmentType === 'fire_mods');

  // Lower the count to 7 if it's at 8 and akimbo or 3-round burst is selected (or will be selected after this addition)
  if ((willHaveAkimboInFinalLoadout || willHaveThreeRoundBurstInFinalLoadout) && count > 7) {
    modifyCount(7);
  }

  return true;
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
