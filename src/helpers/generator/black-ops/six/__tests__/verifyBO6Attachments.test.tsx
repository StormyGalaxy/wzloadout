import { verifyBO6Attachments } from '../verifyBO6Attachments';

// Mock the 'isset' function, crucial for controlling its behavior in tests.
// This mock ensures 'isset' returns false for undefined, null, and empty strings.
jest.mock('@/helpers/isset', () => ({
  isset: (value: unknown) => value !== undefined && value !== null && value !== '',
}));

describe('verifyBO6Attachments', () => {
  let mockModifyCount: jest.Mock;
  let baseAttachments: Record<string, string>;
  let baseAttachData: Record<string, string[]>;

  beforeEach(() => {
    mockModifyCount = jest.fn();
    // Reset base attachments for each test to a clean state
    baseAttachments = {
      barrel: '',
      underbarrel: '',
      stock: '',
      laser: '',
      fire_mods: '',
      muzzle: '',
      optic: '',
      magazine: '',
      rear_grip: '',
    };
    baseAttachData = {
      stock: ['Akimbo', 'Normal Stock'],
      underbarrel: ['Foregrip', 'G-Grip', 'Crossbow'],
      laser: ['Tactical Laser', 'Strelok Laser', 'Target Laser', 'Standard Laser'],
      barrel: ['Long Barrel', 'Short Barrel'],
      fire_mods: [
        '3-Round Burst Mod',
        'Stryder .22 3-Round Burst Mod',
        'SVD Full Auto Mod',
        'TR2 CQB Auto Conversion',
        'Swat 5.56 Grau Conversion',
        'Goblin Mk2 7.62 Mini-Rocket Conversion',
      ],
      muzzle: ['Suppressor', 'Muzzle Brake'],
      magazine: ['Extended Mag', 'Fast Mag', 'Drum Mag'],
      optic: ['Red Dot Sight'],
      rear_grip: ['Rubberized Grip'],
    };
  });

  // --- Akimbo Incompatibility Tests ---

  test('should block Akimbo if optic is already selected', () => {
    baseAttachments.optic = 'Red Dot Sight';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Akimbo',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Akimbo if underbarrel is already selected', () => {
    baseAttachments.underbarrel = 'Foregrip';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Akimbo',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Akimbo if an incompatible laser (existing) is already selected', () => {
    baseAttachments.laser = 'Tactical Laser';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Akimbo',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block an optic if Akimbo is already selected', () => {
    baseAttachments.stock = 'Akimbo';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Red Dot Sight',
      'optic',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block adding a stock if Akimbo is already selected (itself)', () => {
    baseAttachments.stock = 'Akimbo';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Heavy Stock',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block an incompatible laser if Akimbo is already selected', () => {
    baseAttachments.stock = 'Akimbo';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Strelok Laser',
      'laser',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should reduce count to 7 if Akimbo is selected and count is > 7, and passes other checks', () => {
    baseAttachments.stock = 'Akimbo';
    baseAttachData.stock = ['Akimbo']; // Simplify to just Akimbo for this specific test case
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Foregrip',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(7);
  });

  test('should not reduce count if Akimbo is selected and count is already 7 or less', () => {
    baseAttachments.stock = 'Akimbo';
    baseAttachData.stock = ['Akimbo']; // Simplify for this test
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Foregrip',
      'underbarrel',
      7,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- 3-Round Burst Mod Incompatibility Tests ---

  test('should block 3-Round Burst if barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      '3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block 3-Round Burst if underbarrel is already selected', () => {
    baseAttachments.underbarrel = 'Bipod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      '3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if 3-Round Burst is already selected', () => {
    baseAttachments.fire_mods = '3-Round Burst Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block an underbarrel if 3-Round Burst is already selected', () => {
    baseAttachments.fire_mods = '3-Round Burst Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Underbarrel Grenade Launcher',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should reduce count to 7 if 3-Round Burst is selected and count is > 7, and passes other checks', () => {
    baseAttachments.fire_mods = '3-Round Burst Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Suppressor',
      'muzzle',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(7);
  });

  // --- G-Grip and Laser Incompatibility Tests ---

  test('should block G-Grip if a laser is already selected', () => {
    baseAttachments.laser = 'Standard Laser';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'G-Grip',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block any laser if G-Grip is already selected', () => {
    baseAttachments.underbarrel = 'G-Grip';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Standard Laser',
      'laser',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow G-Grip if no laser is selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'G-Grip',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a laser if G-Grip is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Standard Laser',
      'laser',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- Stryder .22 3-Round Burst Mod Incompatibility Tests ---

  test('should block Stryder .22 3-Round Burst Mod if a magazine is already selected', () => {
    baseAttachments.magazine = 'Extended Mag';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Stryder .22 3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Stryder .22 3-Round Burst Mod if a barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Stryder .22 3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a magazine if Stryder .22 3-Round Burst Mod is already selected', () => {
    baseAttachments.fire_mods = 'Stryder .22 3-Round Burst Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Fast Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if Stryder .22 3-Round Burst Mod is already selected', () => {
    baseAttachments.fire_mods = 'Stryder .22 3-Round Burst Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow Stryder .22 3-Round Burst Mod if no incompatible attachments are present', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Stryder .22 3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(6);
  });

  test('should allow a magazine if Stryder .22 3-Round Burst Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Extended Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a barrel if Stryder .22 3-Round Burst Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Long Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- SVD Full Auto Mod Incompatibility Tests ---

  test('should block SVD Full Auto Mod if a barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'SVD Full Auto Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block SVD Full Auto Mod if an underbarrel is already selected', () => {
    baseAttachments.underbarrel = 'Foregrip';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'SVD Full Auto Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block SVD Full Auto Mod if a magazine is already selected', () => {
    baseAttachments.magazine = 'Extended Mag';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'SVD Full Auto Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block SVD Full Auto Mod if a stock is already selected', () => {
    baseAttachments.stock = 'Normal Stock';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'SVD Full Auto Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if SVD Full Auto Mod is already selected', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block an underbarrel if SVD Full Auto Mod is already selected', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Bipod',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a magazine if SVD Full Auto Mod is already selected', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Fast Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a stock if SVD Full Auto Mod is already selected', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Heavy Stock',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow SVD Full Auto Mod if no incompatible attachments are present', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'SVD Full Auto Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(5); // Expect 5 as per new rule
  });

  test('should reduce count to 5 if SVD Full Auto Mod is present and count is > 5', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Muzzle Brake',
      'muzzle',
      7,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(5);
  });

  test('should not reduce count if SVD Full Auto Mod is present and count is 5 or less', () => {
    baseAttachments.fire_mods = 'SVD Full Auto Mod';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Muzzle Brake',
      'muzzle',
      5,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a barrel if SVD Full Auto Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Long Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow an underbarrel if SVD Full Auto Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Foregrip',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a magazine if SVD Full Auto Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Extended Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a stock if SVD Full Auto Mod is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Normal Stock',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- TR2 CQB Auto Conversion Incompatibility Tests ---

  test('should block TR2 CQB Auto Conversion if a barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'TR2 CQB Auto Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if TR2 CQB Auto Conversion is already selected', () => {
    baseAttachments.fire_mods = 'TR2 CQB Auto Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow TR2 CQB Auto Conversion if no barrel is selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'TR2 CQB Auto Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled(); // TR2 CQB does not change count
  });

  test('should allow a barrel if TR2 CQB Auto Conversion is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Long Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- Swat 5.56 Grau Conversion Incompatibility Tests (NEW) ---

  test('should block Swat 5.56 Grau Conversion if a barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Swat 5.56 Grau Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if Swat 5.56 Grau Conversion is already selected', () => {
    baseAttachments.fire_mods = 'Swat 5.56 Grau Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow Swat 5.56 Grau Conversion if no barrel is selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Swat 5.56 Grau Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled(); // Swat Grau Conversion does not change count
  });

  test('should allow a barrel if Swat 5.56 Grau Conversion is not selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Long Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- NEW: Goblin Mk2 7.62 Mini-Rocket Conversion Incompatibility Tests ---

  test('should block Goblin Mk2 Conversion if a muzzle is already selected', () => {
    baseAttachments.muzzle = 'Suppressor';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Goblin Mk2 7.62 Mini-Rocket Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Goblin Mk2 Conversion if a barrel is already selected', () => {
    baseAttachments.barrel = 'Long Barrel';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Goblin Mk2 7.62 Mini-Rocket Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Goblin Mk2 Conversion if a magazine is already selected', () => {
    baseAttachments.magazine = 'Extended Mag';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Goblin Mk2 7.62 Mini-Rocket Conversion',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a muzzle if Goblin Mk2 Conversion is already selected', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Muzzle Brake',
      'muzzle',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a barrel if Goblin Mk2 Conversion is already selected', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Short Barrel',
      'barrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block a magazine if Goblin Mk2 Conversion is already selected', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Drum Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow Goblin Mk2 Conversion if no incompatible attachments are present', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Goblin Mk2 7.62 Mini-Rocket Conversion',
      'fire_mods',
      8, // Initial count
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(6); // Should reduce count to 6
  });

  test('should reduce count to 6 if Goblin Mk2 Conversion is present and count is > 6', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Red Dot Sight', // A compatible attachment
      'optic',
      8, // Current count > 6
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(6);
  });

  test('should not reduce count if Goblin Mk2 Conversion is present and count is 6 or less', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Red Dot Sight',
      'optic',
      6, // Current count is 6
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow an optic if Goblin Mk2 Conversion is selected', () => {
    baseAttachments.fire_mods = 'Goblin Mk2 7.62 Mini-Rocket Conversion';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Red Dot Sight',
      'optic',
      6, // Assuming count is already adjusted
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- NEW: Crossbow and Tactical Laser Incompatibility Tests ---

  test('should block Crossbow if Tactical Laser is already selected', () => {
    baseAttachments.laser = 'Tactical Laser';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Crossbow',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should block Tactical Laser if Crossbow is already selected', () => {
    baseAttachments.underbarrel = 'Crossbow';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Tactical Laser',
      'laser',
      8,
      mockModifyCount
    );
    expect(result).toBe(false);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow Crossbow if no Tactical Laser is selected', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Crossbow',
      'underbarrel',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow a non-Tactical Laser if Crossbow is selected', () => {
    baseAttachments.underbarrel = 'Crossbow';
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Standard Laser', // Not Tactical Laser
      'laser',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  // --- Valid Combinations (existing tests, ensuring they still pass) ---

  test('should allow a normal attachment if no incompatibilities exist', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Extended Mag',
      'magazine',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });

  test('should allow Akimbo if no incompatible attachments are present and count check passes', () => {
    baseAttachData.stock = ['Akimbo', 'Normal Stock'];
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Akimbo',
      'stock',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(7);
  });

  test('should allow 3-Round Burst if no incompatible attachments are present', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      '3-Round Burst Mod',
      'fire_mods',
      8,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).toHaveBeenCalledWith(7);
  });

  test('should allow normal attachment when Akimbo and Burst are NOT selected and count is fine', () => {
    const result = verifyBO6Attachments(
      baseAttachData,
      baseAttachments,
      'Heavy Stock',
      'stock',
      7,
      mockModifyCount
    );
    expect(result).toBe(true);
    expect(mockModifyCount).not.toHaveBeenCalled();
  });
});
