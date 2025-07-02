// --- Data ---
import assault_rifle from '@/data/black-ops/three/attachments/assault_rifle/optics.json';
import lmg from '@/data/black-ops/three/attachments/lmg/optics.json';
import pistol from '@/data/black-ops/three/attachments/pistol/optics.json';
import shotgun from '@/data/black-ops/three/attachments/shotgun/optics.json';
import smg from '@/data/black-ops/three/attachments/smg/optics.json';
import sniper from '@/data/black-ops/three/attachments/sniper/optics.json';
// --- Weapon Specific ---
import nxShadowclawOptic from '@/data/black-ops/three/attachments/special/nxShadowclawOptic.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  assault_rifle,
  lmg,
  pistol,
  shotgun,
  smg,
  sniper,
  nxshadowclaw: nxShadowclawOptic,
};

export function getOptics(gun: string, type: string, count: number = 1): string[] {
  const attachments: string[] = [];

  // Check if optics exist for the gun OR the type
  const data = attachmentsList[gun] || attachmentsList[type];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
