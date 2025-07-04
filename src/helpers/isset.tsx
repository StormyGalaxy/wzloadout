/**
 * Checks if a given value is "set" (i.e., not undefined, null, or an empty string).
 * This type guard function refines the type of `value` within conditional blocks
 * where it returns true.
 *
 * @template T The type of the value being checked.
 * @param {T | undefined | null | ''} value The value to check.
 * @returns {value is T} True if the value is not undefined, null, or an empty string; otherwise, false.
 */
export function isset<T>(value: T | undefined | null | ''): value is T {
  // Checks for undefined, null, and empty string
  return value !== undefined && value !== null && value !== '';
}
