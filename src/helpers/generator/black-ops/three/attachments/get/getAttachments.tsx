// --- Data ---
import assault_rifle from '@/data/black-ops/three/attachments/assault_rifle/attachments.json';
import lmg from '@/data/black-ops/three/attachments/lmg/attachments.json';
import pistol from '@/data/black-ops/three/attachments/pistol/attachments.json';
import shotgun from '@/data/black-ops/three/attachments/shotgun/attachments.json';
import smg from '@/data/black-ops/three/attachments/smg/attachments.json';
import sniper from '@/data/black-ops/three/attachments/sniper/attachments.json';
// --- Weapon Specific ---
import nxShadowclaw from '@/data/black-ops/three/attachments/special/nxShadowclaw.json';
import rifte9 from '@/data/black-ops/three/attachments/pistol/rifte9.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, string[]> = {
  assault_rifle,
  lmg,
  pistol,
  shotgun,
  smg,
  sniper,
  rifte9,
  nxshadowclaw: nxShadowclaw,
};

export function getAttachments(gun: string, type: string, count: number): string[] {
  const attachments: string[] = [];

  // Check if attachments exist for the gun OR the type
  const data = attachmentsList[gun] || attachmentsList[type];

  if (data) {
    if (count === -1) {
      return data;
    }

    randomizeAttachments(attachments, data, count);
  }

  return attachments;
}
