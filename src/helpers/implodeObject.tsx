/**
 * Takes an object and returns a comma-separated string of its values.
 * If a value is an array, its elements are flattened into the string.
 * @param {Record<PropertyKey, any>} obj The object to implode.
 * @returns {string} A string representation of the object's values.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function implodeObject(obj: Record<PropertyKey, any>): string {
  // Use .flat() to handle cases where attachments are arrays within the object
  return Object.values(obj).flat().join(', ');
}
