// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Helpers ---
import { verifyBO6Attachments } from '@/helpers/generator/black-ops/six/verifyBO6Attachments';

/**
 * Randomly selects attachments from a pool of data, supporting both simple arrays and keyed objects.
 *
 * @param {string[] | Record<string, string>} attachArr - The array or object to store the selected attachments. **This will be cleared and repopulated.**
 * @param {string[] | Record<string, string[]>} data - The pool of attachments. Can be a simple array of names or an object with attachment slots as keys.
 * @param {number} count - The number of attachments to select.
 * @param {string} [game] - Optional game identifier to trigger specific logic (e.g., 'black-ops-six').
 *
 * @returns {void}
 */
export function randomizeAttachments(
  attachArr: string[] | Record<string, string>,
  data: string[] | Record<string, string[]>,
  count: number,
  game?: string
): void {
  // Use type guards for better type narrowing
  if (Array.isArray(data) && Array.isArray(attachArr)) {
    handleArrayData(attachArr, data, count);
  } else if (
    typeof data === 'object' &&
    data !== null && // Ensure data is not null
    !Array.isArray(data) &&
    typeof attachArr === 'object' &&
    attachArr !== null && // Ensure attachArr is not null
    !Array.isArray(attachArr)
  ) {
    handleObjectData(
      attachArr as Record<string, string>,
      data as Record<string, string[]>,
      count,
      game
    );
  }
}

/**
 * Handles the randomization when data and attachArr are arrays.
 */
function handleArrayData(attachArr: string[], data: string[], count: number): void {
  // 1. Ensure the output array is empty before we start.
  attachArr.length = 0;

  // 2. Create a shuffled copy of the data array to pick from.
  const shuffled = [...data].sort(() => 0.5 - Math.random());

  // 3. Determine the number of attachments to select, capped by availability.
  const numToSelect = Math.min(count, shuffled.length);

  // 4. Get the selected attachments and push them into the output array.
  attachArr.push(...shuffled.slice(0, numToSelect));
}

/**
 * Handles the randomization when data and attachArr are objects.
 */
function handleObjectData(
  attachArr: Record<string, string>,
  data: Record<string, string[]>,
  count: number,
  game?: string
): void {
  // 1. Ensure the output object is empty before we start.
  for (const key in attachArr) {
    if (Object.prototype.hasOwnProperty.call(attachArr, key)) {
      delete attachArr[key];
    }
  }

  const keys = Object.keys(data);
  let attachCount = 0;
  let currentCount = count; // Use a mutable variable for count within this scope

  // 2. Reset currentCount if asking for more attachments than the weapon has slots.
  currentCount = Math.min(currentCount, keys.length);

  // 3. Safeguard against potential infinite loops.
  const maxAttempts = keys.length * 10;
  let attempts = 0;

  while (attachCount < currentCount && attempts < maxAttempts) {
    const randomKey = randomListItem(keys);
    const attachmentOptions = data[randomKey];

    // Check if the slot isn't already taken and has valid options.
    if (
      !attachArr.hasOwnProperty(randomKey) &&
      Array.isArray(attachmentOptions) &&
      attachmentOptions.length > 0
    ) {
      const attachment = randomListItem(attachmentOptions);
      let addAttachment = true;

      // Only run verification for the specific game.
      if (game === 'black-ops-six') {
        // Pass a mutable reference to currentCount and update it in place if needed
        const tempCount = currentCount;
        addAttachment = verifyBO6Attachments(
          data, // attachData
          attachArr,
          attachment,
          randomKey,
          tempCount,
          (newCount) => {
            currentCount = newCount; // Update currentCount in the outer scope
          }
        );
      }

      if (addAttachment) {
        attachArr[randomKey] = attachment;
        attachCount++;
      }
    }
    attempts++;
  }
}
