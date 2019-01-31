/**
 * Excludes an item from an object.
 * @param {string} key
 * @param {object} obj
 */
export const exclude = (key, obj) => {
  const { [key]: deletedKey, ...otherKeys } = obj
  return otherKeys
}
