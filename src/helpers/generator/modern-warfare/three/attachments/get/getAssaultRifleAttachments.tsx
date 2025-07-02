// --- Data ---
import stg44 from '@/data/modern-warfare/three/attachments/assault_rifle/stg44.json';
import bal27 from '@/data/modern-warfare/three/attachments/assault_rifle/bal27.json';
import mtz556 from '@/data/modern-warfare/three/attachments/assault_rifle/mtz556.json';
import sva545 from '@/data/modern-warfare/three/attachments/assault_rifle/sva545.json';
import bp50 from '@/data/modern-warfare/three/attachments/assault_rifle/bp50.json';
import holger556 from '@/data/modern-warfare/three/attachments/assault_rifle/holger556.json';
import mcw from '@/data/modern-warfare/three/attachments/assault_rifle/mcw.json';
import dg56 from '@/data/modern-warfare/three/attachments/assault_rifle/dg56.json';
import fr556 from '@/data/modern-warfare/three/attachments/assault_rifle/fr556.json';
import ram7 from '@/data/modern-warfare/three/attachments/assault_rifle/ram7.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  stg44,
  bal27,
  mtz556,
  sva545,
  bp50,
  holger556,
  mcw,
  dg56,
  fr556,
  ram7,
};

export function getAssaultRifleAttachments(
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
