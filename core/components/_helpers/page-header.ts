/**
 * Returns true or false whether the description
 * is meets an object like:
 *  { text: '...' }
 * @param {object | React.Element} description
 */
export function descriptionIsObject(description) {
  return typeof description === 'object' && description.text
}
