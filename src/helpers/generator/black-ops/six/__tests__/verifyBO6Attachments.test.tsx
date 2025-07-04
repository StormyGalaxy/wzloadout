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
    // Updated baseAttachData to include 'Stryder .22 3-Round Burst Mod'
    baseAttachData = {
      stock: ['Akimbo', 'Normal Stock'],
      underbarrel: ['Foregrip', 'G-Grip'],
      laser: ['Tactical Laser', 'Strelok Laser', 'Target Laser', 'Standard Laser'],
      barrel: ['Long Barrel', 'Short Barrel'],
      fire_mods: ['3-Round Burst Mod', 'Stryder .22 3-Round Burst Mod'], // Added new mod here
      muzzle: ['Suppressor'],
      magazine: ['Extended Mag', 'Fast Mag'], // Added another magazine for completeness
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
    // Updated expectation to 6 as per the new rule
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

  // --- Valid Combinations ---

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
