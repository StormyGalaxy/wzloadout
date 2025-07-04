import { renderHook } from '@testing-library/react';
import { act } from 'react';

import { useBlackOpsSixGenerator } from '../useBlackOpsSixGenerator';

// --- Mock all external dependencies (simple initial mocks) ---
// These are intentionally basic here, and will be re-configured in beforeEach
jest.mock('@/helpers/implodeObject', () => ({
  implodeObject: jest.fn((obj) => JSON.stringify(obj)),
}));
jest.mock('@/helpers/scrollToTop', () => ({ scrollToTop: jest.fn() }));
jest.mock('@/helpers/fetch/fetchWeapon', () => ({
  fetchWeapon: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchAttachments', () => ({
  fetchAttachments: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchEquipment', () => ({
  fetchEquipment: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchClassName', () => ({
  fetchClassName: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchPerks', () => ({
  fetchPerks: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchStreaks', () => ({
  fetchStreaks: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@/helpers/fetch/fetchWildcard', () => ({
  fetchWildcard: jest.fn(), // Will be mocked in beforeEach
}));
jest.mock('@silocitypages/utils', () => ({ sendEvent: jest.fn() }));
// Mock default data directly as it's a JSON import
jest.mock('@/data/cod/default-generator-info.json', () => ({
  randClassName: 'DefaultClass',
  weapons: {
    primary: { name: '', type: '', game: '', attachments: '' },
    secondary: { name: '', type: '', game: '', attachments: '' },
    melee: { name: '', type: '', game: '' },
  },
  equipment: {
    tactical: { name: '', type: '', game: '' },
    lethal: { name: '', type: '', game: '' },
    fieldUpgrade: { name: '', type: '', game: '' },
    fieldUpgrade2: { name: '', type: '', game: '' },
  },
  wildcard: { name: '', description: '' },
  perks: [],
  streaks: [],
}));

// Import the mocked functions for assertion
import { implodeObject } from '../../../../helpers/implodeObject';
import { scrollToTop } from '../../../../helpers/scrollToTop';
import { fetchWeapon } from '../../../../helpers/fetch/fetchWeapon';
import { fetchAttachments } from '../../../../helpers/fetch/fetchAttachments';
import { fetchEquipment } from '../../../../helpers/fetch/fetchEquipment';
import { fetchClassName } from '../../../../helpers/fetch/fetchClassName';
import { fetchPerks } from '../../../../helpers/fetch/fetchPerks';
import { fetchStreaks } from '../../../../helpers/fetch/fetchStreaks';
import { fetchWildcard } from '../../../../helpers/fetch/fetchWildcard';
import { sendEvent } from '@silocitypages/utils';
import defaultData from '../../../../data/cod/default-generator-info.json';

describe('useBlackOpsSixGenerator', () => {
  // Use Jest's fake timers to control setTimeout
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks(); // Clears call counts and mock return values set by mockReturnValueOnce

    // --- Reset and Re-configure Mocks for each test ---
    (implodeObject as jest.Mock).mockImplementation((obj) => JSON.stringify(obj));
    (scrollToTop as jest.Mock).mockClear(); // Just clear calls

    // Default mock for fetchWeapon - covers most cases
    (fetchWeapon as jest.Mock).mockImplementation((type, game, excludeName) => {
      if (game === 'black-ops-six-launchers') {
        // Added this condition
        return { name: 'RPG-7', type: 'Launcher', game: 'black-ops-six', no_attach: true };
      }
      if (type === 'primary') {
        if (!excludeName)
          return { name: 'PrimaryWeapon', type: 'Assault Rifle', game, no_attach: false };
        return { name: 'AnotherPrimary', type: 'SMG', game, no_attach: false }; // For secondary when Overkill
      }
      if (type === 'secondary')
        return { name: 'SecondaryWeapon', type: 'Pistol', game, no_attach: false };
      if (type === 'melee') return { name: 'Knife', type: 'Melee', game, no_attach: true };
      return { name: 'DefaultWeapon', type: 'Unknown', game, no_attach: false };
    });

    // Default mock for fetchAttachments
    (fetchAttachments as jest.Mock).mockImplementation((weapon, count) => {
      const attachments: Record<string, string> = {};
      for (let i = 0; i < count; i++) {
        attachments[`attachment${i + 1}`] = `Attachment${i + 1}`;
      }
      return attachments;
    });

    // *** CRITICAL: Default mock for fetchEquipment that allows Prepper to terminate ***
    // This provides a set of distinct field upgrades that will be returned sequentially
    const defaultFieldUpgradeOptions = [
      { name: 'FieldMic', type: 'Field Upgrade', game: 'black-ops-six' },
      { name: 'TrophySystem', type: 'Field Upgrade', game: 'black-ops-six' },
      { name: 'ProximityMine', type: 'Field Upgrade', game: 'black-ops-six' },
      { name: 'SamTurret', type: 'Field Upgrade', game: 'black-ops-six' },
    ];
    let fieldUpgradeCounter = 0; // Internal counter for cycling through field upgrades

    (fetchEquipment as jest.Mock).mockImplementation((type) => {
      if (type === 'tactical')
        return { name: 'Smoke Grenade', type: 'Tactical', game: 'black-ops-six' };
      if (type === 'lethal') return { name: 'Frag Grenade', type: 'Lethal', game: 'black-ops-six' };
      if (type === 'field_upgrade') {
        // Cycle through the predefined list of field upgrades
        const chosenUpgrade =
          defaultFieldUpgradeOptions[fieldUpgradeCounter % defaultFieldUpgradeOptions.length];
        fieldUpgradeCounter++; // Increment for the next call
        return chosenUpgrade;
      }
      return { name: 'DefaultEquip', type: 'Unknown', game: 'black-ops-six' };
    });

    // Default mock for fetchClassName
    (fetchClassName as jest.Mock).mockReturnValue('AwesomeClass');

    // Default mock for fetchPerks
    (fetchPerks as jest.Mock).mockImplementation((game, isPerkGreed) => {
      if (isPerkGreed) return ['Perk1', 'Perk2', 'Perk3', 'BonusPerk1', 'BonusPerk2'];
      return ['Perk1', 'Per2', 'Per3'];
    });

    // Default mock for fetchStreaks
    (fetchStreaks as jest.Mock).mockImplementation((game, isHighRoller) => {
      if (isHighRoller) return ['HighStreak1', 'HighStreak2', 'HighStreak3'];
      return ['Streak1', 'Streak2', 'Streak3'];
    });

    // Default mock for fetchWildcard
    (fetchWildcard as jest.Mock).mockReturnValue({
      name: 'DefaultWildcard',
      description: 'Default desc',
    });

    (sendEvent as jest.Mock).mockClear(); // sendEvent calls are just tracked
  });

  afterEach(() => {
    jest.runAllTimers(); // Ensure all timers are cleared
    jest.useRealTimers(); // Restore real timers
  });

  // Helper to render the hook and get its result, advancing timers as needed
  const renderHookAndAdvance = () => {
    // Correct destructuring: 'result' is directly available here
    const { result } = renderHook(() => useBlackOpsSixGenerator());

    act(() => {
      jest.advanceTimersByTime(1000); // Advance for the initial load effect
    });

    return result; // Return the 'result' object directly
  };

  // Test Case 1: Initial Load State
  test('should initially be in loading state and then transition to idle after generation', () => {
    const { result } = renderHook(() => useBlackOpsSixGenerator());

    // Initially loading
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.data).toEqual(defaultData); // Should have default data initially

    // Advance timers by 1 second (the setTimeout duration)
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // After generation, the state should be updated
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.data).not.toEqual(defaultData); // Should have new data
    expect(sendEvent).toHaveBeenCalledWith('button_click', {
      button_id: 'bo6_fetchLoadoutData',
      label: 'BlackOpsSix',
      category: 'COD_Loadouts',
    });
    expect(scrollToTop).not.toHaveBeenCalled(); // Should not scroll on initial load
  });

  // Test Case 2: Generating a new loadout
  test('should transition to generating state and then to idle when generating a new loadout', () => {
    const result = renderHookAndAdvance(); // Helper now returns the 'result' directly

    // Trigger new loadout generation
    act(() => {
      result.current.generateLoadout();
    });

    // During generation (after triggering, before advancing timers for the new generation)
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isGenerating).toBe(true);
    expect(sendEvent).toHaveBeenCalledTimes(2); // Initial load + new generation
    expect(sendEvent).toHaveBeenCalledWith('button_click', {
      button_id: 'bo6_fetchLoadoutData',
      label: 'BlackOpsSix',
      category: 'COD_Loadouts',
    });

    // Advance timers for new generation
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // After new generation
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isGenerating).toBe(false);
    expect(scrollToTop).toHaveBeenCalledTimes(1); // Should scroll on subsequent generation
  });

  // Test Case 3: Wildcard - Gunfighter
  test('should set primary weapon attachment count to 8 if Gunfighter wildcard is selected', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'Gunfighter',
      description: 'Gunfighter desc',
    });

    const result = renderHookAndAdvance();

    expect(fetchAttachments).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'PrimaryWeapon' }),
      8 // Expect 8 attachments for primary weapon
    );
    expect(result.current.data.wildcard.name).toBe('Gunfighter');
  });

  // Test Case 4: Wildcard - Overkill
  test('should set secondary weapon to a primary weapon if Overkill wildcard is selected', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'Overkill',
      description: 'Overkill desc',
    });
    // The default fetchWeapon mock already handles this scenario due to `excludeName` logic.

    const result = renderHookAndAdvance();

    expect(result.current.data.wildcard.name).toBe('Overkill');
    expect(result.current.data.weapons.secondary.name).toBe('AnotherPrimary');
    expect(result.current.data.weapons.secondary.type).toBe('SMG');
    expect(fetchWeapon).toHaveBeenCalledWith('primary', 'black-ops-six', 'PrimaryWeapon');
  });

  // Test Case 5: Wildcard - Perk Greed
  test('should fetch perks with isPerkGreed true if Perk Greed wildcard is selected', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'Perk Greed',
      description: 'Perk Greed desc',
    });

    const result = renderHookAndAdvance();

    expect(fetchPerks).toHaveBeenCalledWith('black-ops-six', true);
    expect(result.current.data.wildcard.name).toBe('Perk Greed');
    expect(result.current.data.perks.length).toBeGreaterThan(3); // Assuming Perk Greed adds more perks
  });

  // Test Case 6: Wildcard - High Roller
  test('should fetch streaks with isHighRoller true if High Roller wildcard is selected', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'High Roller',
      description: 'High Roller desc',
    });

    const result = renderHookAndAdvance();

    expect(fetchStreaks).toHaveBeenCalledWith('black-ops-six', true);
    expect(result.current.data.wildcard.name).toBe('High Roller'); // FIX: Expect 'HighStreak1' because isHighRoller is true
    expect(result.current.data.streaks[0]).toBe('HighStreak1');
  });

  // Test Case 7: Wildcard - Prepper
  test('should fetch a second field upgrade if Prepper wildcard is selected and it is different', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'Prepper',
      description: 'Prepper desc',
    });
    // For this specific test, we need to ensure the mocked fetchEquipment returns
    // sufficiently distinct values to allow the do...while loop to terminate
    // and to verify the specific outcome.
    // The beforeEach mock already provides a cycling mechanism which is usually enough,
    // but we can be explicit here if needed for more complex scenarios.
    // For simplicity, we rely on the cycling default mock now.

    const result = renderHookAndAdvance();

    expect(result.current.data.wildcard.name).toBe('Prepper');
    // Expect the first field upgrade to be 'FieldMic' from our default cycling mock
    expect(result.current.data.equipment.fieldUpgrade.name).toBe('FieldMic');
    // Expect the second field upgrade to be 'TrophySystem' from our default cycling mock
    expect(result.current.data.equipment.fieldUpgrade2.name).toBe('TrophySystem');
    expect(result.current.data.equipment.fieldUpgrade.name).not.toBe(
      result.current.data.equipment.fieldUpgrade2.name
    );
    // The total calls to fetchEquipment would be:
    // 1 (tactical) + 1 (lethal) + 1 (fieldUpgrade1) + 1 (fieldUpgrade2 - from loop, and loop terminates on first difference)
    expect(fetchEquipment).toHaveBeenCalledTimes(4);
  });

  // Test Case 8: Wildcard - Flyswatter
  test('should set melee weapon to a launcher if Flyswatter wildcard is selected', () => {
    (fetchWildcard as jest.Mock).mockReturnValueOnce({
      name: 'Flyswatter',
      description: 'Flyswatter desc',
    });

    const result = renderHookAndAdvance();

    expect(result.current.data.wildcard.name).toBe('Flyswatter');
    expect(result.current.data.weapons.melee.name).toBe('RPG-7');
    expect(result.current.data.weapons.melee.type).toBe('Launcher');
    expect(fetchWeapon).toHaveBeenCalledWith(
      'secondary',
      'black-ops-six-launchers',
      'SecondaryWeapon'
    );
  });

  test('should handle no_attach property on weapons', () => {
    (fetchWeapon as jest.Mock)
      .mockReturnValueOnce({
        name: 'PrimaryNoAttach',
        type: 'Launcher',
        game: 'black-ops-six',
        no_attach: true,
      })
      .mockReturnValueOnce({
        name: 'SecondaryNoAttach',
        type: 'Melee',
        game: 'black-ops-six',
        no_attach: true,
      });

    const result = renderHookAndAdvance();

    expect(result.current.data.weapons.primary.attachments).toBe('');
    expect(result.current.data.weapons.secondary.attachments).toBe('');
    // ImplodeObject should not have been called for these weapons
    expect(implodeObject).not.toHaveBeenCalledWith(
      expect.objectContaining({ name: 'PrimaryNoAttach' })
    );
    expect(implodeObject).not.toHaveBeenCalledWith(
      expect.objectContaining({ name: 'SecondaryNoAttach' })
    );
  });

  // Test Case 9: Error Handling
  test('should log an error and set status to idle if fetchNewBo6Loadout throws an error', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // Mock console.error
    (fetchClassName as jest.Mock).mockImplementationOnce(() => {
      throw new Error('Failed to fetch class name');
    });

    const { result } = renderHook(() => useBlackOpsSixGenerator());

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to fetch class name');
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isGenerating).toBe(false);
    expect(result.current.data).toEqual(defaultData); // Data should remain default on error

    consoleErrorSpy.mockRestore(); // Restore original console.error
  });
});
