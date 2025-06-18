/**
 * Takes an object and returns a comma-separated string of its values.
 * @param {Record<PropertyKey, T>} obj The object to implode.
 * @returns {string} A string representation of the object's values.
 */
export function implodeObject<T>(obj: Record<PropertyKey, T>): string {
  return Object.values(obj).join(', ');
}
