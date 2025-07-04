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
  // --- Handle Array Data (e.g., ['Attach1', 'Attach2', ...]) ---
  if (Array.isArray(data) && Array.isArray(attachArr)) {
    // 1. Ensure the output array is empty before we start.
    attachArr.length = 0;

    // 2. Create a shuffled copy of the data array to pick from.
    const shuffled = [...data].sort(() => 0.5 - Math.random());

    // 3. Determine the number of attachments to select, capped by availability.
    const numToSelect = Math.min(count, shuffled.length);

    // 4. Get the selected attachments.
    const selected = shuffled.slice(0, numToSelect);

    // 5. Push the selected attachments into the output array.
    selected.forEach((item) => attachArr.push(item));
    return; // Done with the array case.
  }

  // --- Handle Object Data (e.g., { Muzzle: [...], Barrel: [...] }) ---
  if (
    typeof data === 'object' &&
    !Array.isArray(data) &&
    typeof attachArr === 'object' &&
    !Array.isArray(attachArr)
  ) {
    // 1. Ensure the output object is empty before we start.
    Object.keys(attachArr).forEach((key) => delete attachArr[key]);

    const keys = Object.keys(data);
    let attachCount = 0;

    // 2. Reset count if asking for more attachments than the weapon has slots.
    count = Math.min(count, keys.length);

    // 3. Safeguard against potential infinite loops.
    const maxAttempts = keys.length * 10;
    let attempts = 0;

    while (attachCount < count && attempts < maxAttempts) {
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

        //Only run verification for the specific game.
        if (game === 'black-ops-six') {
          addAttachment = verifyBO6Attachments(
            data,
            attachArr,
            attachment,
            randomKey,
            count,
            (newCount) => {
              count = newCount;
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
}
