export type GeneratorItem = {
  name: string;
  type: string;
  game: string;
  description?: string;
  isDlc?: boolean;
};

export type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

export interface PerkObject {
  perk1: string;
  perk2: string;
  perk3: string;
  perk1Greed?: string;
  perk2Greed?: string;
  perk3Greed?: string;
  vehiclePerk?: string;
}

export interface GeneratorData {
  randClassName: string;
  streaks: string;
  weapons: { primary: Weapon; secondary: Weapon; melee?: Weapon };
  equipment: {
    tactical?: GeneratorItem;
    lethal?: GeneratorItem;
    fieldUpgrade?: GeneratorItem | null;
    fieldUpgrade2?: GeneratorItem | null;
    vest?: GeneratorItem | null;
    gear?: string;
    equipment?: string;
  };
  wildcard?: { name: string };
  wildcards: string;
  perkObj?: PerkObject;
  perks: string;
  division?: string | null;
  basic?: string | null;
  specialist: Specialist;
  rig?: Specialist;
  combat_rig?: string;
}

export interface ZombiesGeneratorData {
  randClassName: string;
  weapons: {
    primary?: Weapon;
    secondary?: Weapon;
    melee?: Weapon;
    special?: Weapon;
    starting?: Weapon;
  };
  field_upgrade: string;
  zombieMap: ZombiesMap;
  artifact: GeneratorItem | null;
  augments: Augment | null;
  character: string;
  elixers: string;
  equipment: { tactical: Equipment; lethal: Equipment; fieldUpgrade?: Equipment };
  gobblegum: string;
  lethal: string;
  mods: string[];
  special: string;
  story: { key: string; display: string };
  talisman: string;
  zombiePerks: string[];
}

export type GeneratorStatus = 'loading' | 'generating' | 'idle';

export type Weapon = {
  name: string;
  type: string;
  game: string;
  no_attach?: boolean;
  isDlc?: boolean;
  no_attach_info?: boolean; //When we dont have access to the attachments for the weapon
  optic?: string;
  attachments?: string;
  ammoMod?: string;
};

export type Streak = { name: string; type: string; game: string; score: number; isDlc?: boolean };

export type Specialist = {
  name: string;
  equipment?: string;
  weapon?: string;
  payload?: string | string[];
  trait?: string | string[];
  type: string;
  game: string;
};

export type ZombiesMap = {
  name: string;
  type: string;
  game: string;
  mode?: string;
  difficulty?: string;
  story?: string;
  isDlc?: boolean;
};

export type Augment = {
  name: string;
  description: string;
  major: Augments[] | string;
  minor: Augments[] | string;
  type: string;
  game: string;
  isDlc?: boolean;
};

export type Augments = { name: string; description: string };

export type MW3Vest = { name: string; type: string; game: string };

export type Bo6ZombiesSettings = {
  rollMap: boolean;
  rollGobblegum: boolean;
  rollAugments: boolean;
};

export type Bo4ZombiesSettings = { rollMap: boolean; rollElixers: boolean; rollTalisman: boolean };

export type WarzoneDropSpotSettings = { warzoneMap: string };

// --- World War 2 ---
export type WW2Perk = { name: string; type: string; game: string; training_type?: string };
