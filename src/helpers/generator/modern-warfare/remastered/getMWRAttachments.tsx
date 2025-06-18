import {
  getAssaultRifleAttachments,
  getSmgAttachments,
  getSniperAttachments,
  getShotgunAttachments,
  getLmgAttachments,
  getPistolAttachments,
} from './attachments';

const attachmentGetters = {
  assault_rifle: getAssaultRifleAttachments,
  smg: getSmgAttachments,
  lmg: getLmgAttachments,
  pistol: getPistolAttachments,
  shotgun: getShotgunAttachments,
  sniper: getSniperAttachments,
};

export function getMWRAttachments(type: string, gun: string, count: number) {
  const getter = attachmentGetters[type];

  return getter ? getter(gun, count) : {};
}
