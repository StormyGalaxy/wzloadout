import { isset } from '@/helpers/isset';

const AKIMBO = 'Akimbo';
const BURST = '3-Round Burst Mod'; // This is the generic 3-Round Burst Mod
const G_GRIP = 'G-Grip';
const STRYDER_BURST = 'Stryder .22 3-Round Burst Mod'; // Constant for the specific mod
const SVD_FULL_AUTO_MOD = 'SVD Full Auto Mod';
const TR2_CQB_AUTO_CONVERSION = 'TR2 CQB Auto Conversion';
const SWAT_GRAU_CONVERSION = 'Swat 5.56 Grau Conversion'; // New constant for Swat 5.56 Grau Conversion

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
  attachData: Record<string, string[]>,
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
  const hasStryderBurst = issetAttachment.fireMods && attachments['fire_mods'] === STRYDER_BURST;
  const hasSVDFullAutoMod =
    issetAttachment.fireMods && attachments['fire_mods'] === SVD_FULL_AUTO_MOD;
  const hasTR2CQBAutoConversion =
    issetAttachment.fireMods && attachments['fire_mods'] === TR2_CQB_AUTO_CONVERSION;
  const hasSWATGrauConversion =
    issetAttachment.fireMods && attachments['fire_mods'] === SWAT_GRAU_CONVERSION; // New check

  // State of the attachment currently being considered
  const isCurrentAkimbo = attachment === AKIMBO;
  const isCurrentBurst = attachment === BURST;
  const isCurrentGGrip = attachment === G_GRIP;
  const isCurrentStryderBurst = attachment === STRYDER_BURST;
  const isCurrentSVDFullAutoMod = attachment === SVD_FULL_AUTO_MOD;
  const isCurrentTR2CQBAutoConversion = attachment === TR2_CQB_AUTO_CONVERSION;
  const isCurrentSWATGrauConversion = attachment === SWAT_GRAU_CONVERSION; // New check

  // --- Akimbo Incompatibility Checks ---
  if (
    (isCurrentAkimbo && (issetAttachment.optic || issetAttachment.underbarrel)) ||
    (isCurrentAkimbo &&
      issetAttachment.laser &&
      LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachments['laser'])) ||
    (hasAkimbo && (attachmentBooleans.isStock || attachmentBooleans.isOptic)) ||
    (hasAkimbo && attachmentBooleans.isLaser && LASER_INCOMPATIBLE_WITH_AKIMBO.includes(attachment))
  ) {
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

  // --- Stryder .22 3-Round Burst Mod Incompatibility Checks ---
  if (
    (isCurrentStryderBurst &&
      attachmentBooleans.isFireMods &&
      (issetAttachment.magazine || issetAttachment.barrel)) ||
    (hasStryderBurst && (attachmentBooleans.isMagazine || attachmentBooleans.isBarrel))
  ) {
    return false;
  }

  // --- SVD Full Auto Mod Incompatibility Checks ---
  if (
    (isCurrentSVDFullAutoMod &&
      attachmentBooleans.isFireMods &&
      (issetAttachment.barrel ||
        issetAttachment.underbarrel ||
        issetAttachment.magazine ||
        issetAttachment.stock)) ||
    (hasSVDFullAutoMod &&
      (attachmentBooleans.isBarrel ||
        attachmentBooleans.isUnderbarrel ||
        attachmentBooleans.isMagazine ||
        attachmentBooleans.isStock))
  ) {
    return false;
  }

  // --- TR2 CQB Auto Conversion Incompatibility Checks ---
  if (
    (isCurrentTR2CQBAutoConversion && attachmentBooleans.isFireMods && issetAttachment.barrel) ||
    (hasTR2CQBAutoConversion && attachmentBooleans.isBarrel)
  ) {
    return false;
  }

  // --- Swat 5.56 Grau Conversion Incompatibility Checks (NEW) ---
  if (
    (isCurrentSWATGrauConversion && attachmentBooleans.isFireMods && issetAttachment.barrel) || // Proposed Swat Grau, and a barrel is present
    (hasSWATGrauConversion && attachmentBooleans.isBarrel) // Swat Grau is present, and a barrel is proposed
  ) {
    return false; // Prevent adding the incompatible attachment
  }

  // Determine if Akimbo, generic 3-Round Burst, Stryder Burst, or SVD Full Auto Mod
  // will be in the loadout AFTER this attachment is (potentially) added.
  const willHaveAkimboInFinalLoadout = hasAkimbo || (isCurrentAkimbo && attachmentType === 'stock');
  const willHaveThreeRoundBurstInFinalLoadout =
    hasThreeRoundBurst || (isCurrentBurst && attachmentType === 'fire_mods');
  const willHaveStryderBurstInFinalLoadout =
    hasStryderBurst || (isCurrentStryderBurst && attachmentType === 'fire_mods');
  const willHaveSVDFullAutoModInFinalLoadout =
    hasSVDFullAutoMod || (isCurrentSVDFullAutoMod && attachmentType === 'fire_mods');

  // Adjust the total allowed attachment count based on the presence of specific mods
  if (count > 5 && willHaveSVDFullAutoModInFinalLoadout) {
    modifyCount(5); // SVD Full Auto Mod limits to a maximum of 5 attachments (highest priority)
  } else if (count > 6 && willHaveStryderBurstInFinalLoadout) {
    modifyCount(6); // Stryder Burst limits to a maximum of 6 attachments
  } else if (count > 7 && (willHaveAkimboInFinalLoadout || willHaveThreeRoundBurstInFinalLoadout)) {
    modifyCount(7); // Akimbo or generic 3-Round Burst limits to a maximum of 7 attachments
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
