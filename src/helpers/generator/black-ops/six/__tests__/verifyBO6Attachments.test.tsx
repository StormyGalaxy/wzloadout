import { verifyBO6Attachments } from '../verifyBO6Attachments';

// Mock the 'isset' function, crucial for controlling its behavior in tests.
// This mock ensures 'isset' returns false for undefined, null, and empty strings.
jest.mock('@/helpers/isset', () => ({
  isset: (value: unknown) => value !== undefined && value !== null && value !== '',
}));

// Define a more specific type for attachData to avoid 'any' warning
type AttachmentPool = Record<string, Record<string, string[]>>;

describe('verifyBO6Attachments', () => {
  let mockModifyCount: jest.Mock;
  let baseAttachments: Record<string, string>;
  let baseAttachData: AttachmentPool; // Use the more specific type here

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
    // Simplified attachData, assuming it just needs 'stock', 'underbarrel', and 'laser'
    // properties for the specific compatibility checks.
    baseAttachData = {
      stock: { Akimbo: ['description'], 'Normal Stock': ['description'] },
      underbarrel: { Foregrip: ['desc'], 'G-Grip': ['desc'] },
      laser: {
        'Tactical Laser': ['desc'],
        'Strelok Laser': ['desc'],
        'Target Laser': ['desc'],
        'Standard Laser': ['desc'],
      },
      // Add other potential attachment categories if needed for more comprehensive attachData
      // For example, if 'barrel' or 'fire_mods' also have descriptions in attachData:
      barrel: { 'Long Barrel': ['desc'], 'Short Barrel': ['desc'] },
      fire_mods: { '3-Round Burst Mod': ['desc'] },
      muzzle: { Suppressor: ['desc'] },
      magazine: { 'Extended Mag': ['desc'] },
      optic: { 'Red Dot Sight': ['desc'] },
      rear_grip: { 'Rubberized Grip': ['desc'] },
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
    // The test's baseAttachData.stock now has 'Akimbo' and 'Normal Stock',
    // so Object.keys(attachData.stock).length will be 2, not 1.
    // This means the inner `if (Object.keys(attachData.stock || {}).length === 1 && count > 7)`
    // will NOT trigger the early modifyCount(7) and return false.
    // The general count reduction at the end of the function should still apply if result is true.
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
    // This test case's `baseAttachData.stock` has multiple options,
    // so the internal `Object.keys(attachData.stock || {}).length === 1` check is false.
    // The general `modifyCount(7)` at the end of the function should still apply.
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
