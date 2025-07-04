// --- Data ---
import as44 from '@/data/vanguard/attachments/assault_rifle/as44.json';
import automaton from '@/data/vanguard/attachments/assault_rifle/automaton.json';
import bar from '@/data/vanguard/attachments/assault_rifle/bar.json';
import bp50 from '@/data/vanguard/attachments/assault_rifle/bp50.json';
import cooperCarbine from '@/data/vanguard/attachments/assault_rifle/cooperCarbine.json';
import ex1 from '@/data/vanguard/attachments/assault_rifle/ex1.json';
import itraBurst from '@/data/vanguard/attachments/assault_rifle/itraBurst.json';
import kgm40 from '@/data/vanguard/attachments/assault_rifle/kgm40.json';
import nikitaAvt from '@/data/vanguard/attachments/assault_rifle/nikitaAvt.json';
import nz41 from '@/data/vanguard/attachments/assault_rifle/nz41.json';
import stg44 from '@/data/vanguard/attachments/assault_rifle/stg44.json';
import vargos from '@/data/vanguard/attachments/assault_rifle/vargos.json';
import volkssturmgewehr from '@/data/vanguard/attachments/assault_rifle/volkssturmgewehr.json';
// --- Helpers ---
import { randomizeAttachments } from '@/helpers/randomizeAttachments';

const attachmentsList: Record<string, Record<string, string[]>> = {
  as44,
  automaton,
  bar,
  bp50,
  coopercarbine: cooperCarbine,
  ex1,
  itraburst: itraBurst,
  kgm40,
  nikitaavt: nikitaAvt,
  nz41,
  stg44,
  vargos,
  volkssturmgewehr,
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
