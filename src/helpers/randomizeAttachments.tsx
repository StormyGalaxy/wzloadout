// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Helpers ---
import { verifyBO6Attachments } from '@/helpers/generator/black-ops/six/verifyBO6Attachments';

/**
 * Randomly selects attachments from a pool of data.
 *
 * @param {Record<string, string>} attachArr - The object to store the selected attachments.
 * @param {Record<string, string[]>} data - The pool of attachments to choose from, where keys are attachment slots and values are arrays of attachment options.
 * @param {number} count - The number of attachments to select.
 *
 * @returns {void}
 */
export function randomizeAttachments(
  attachArr: Record<string, string>,
  data: Record<string, string[]>,
  count: number
): void {
  let attachCount = 0;
  const keys = Object.keys(data);

  // Reset count if asking for more attachments than the weapon has
  count = Math.min(count, keys.length);

  // Safeguard against potential infinite loops if attachment conditions are not met.
  const maxAttempts = keys.length * 10;
  let attempts = 0;

  while (attachCount < count && attempts < maxAttempts) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const attachmentOptions = data[randomKey];

    if (
      !attachArr.hasOwnProperty(randomKey) &&
      Array.isArray(attachmentOptions) &&
      attachmentOptions.length > 0
    ) {
      const attachment = randomListItem(attachmentOptions);
      //TODO: Make this only run on black ops 6 guns
      const addAttachment = verifyBO6Attachments(
        data,
        attachArr,
        attachment,
        randomKey,
        count,
        (newCount) => {
          count = newCount;
        }
      );
      if (addAttachment) {
        attachArr[randomKey] = attachment;
        attachCount++;
      }
    }
    attempts++;
  }
}
