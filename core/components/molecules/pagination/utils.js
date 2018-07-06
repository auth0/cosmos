/**
 * Calculates the page input width based on the characters
 * it contains.
 * @param {number} page
 */
export function pageInputWidth(page) {
  const charWidth = 8
  const baseWidth = 50

  const pageAsString = page.toString()
  const pageCharLength = pageAsString.length

  return pageCharLength * charWidth + baseWidth
}

/**
 * Calculates the number of pages required given
 * the total number of items and the desired items
 * per page.
 * @param {number} items
 * @param {number} perPage
 */
export function pagesFromItems(items, perPage) {
  return Math.ceil(items / perPage)
}

/**
 * Determines if the page should change based on the
 * expected next page and the number of pages.
 * @param {number | string} rawNextPage
 * @param {number} total
 * @param {number} perPage
 * @param {function} handlerFn
 */
export function changePageIfAppropiate(rawNextPage, total, perPage, handlerFn) {
  const nextPage = parseInt(rawNextPage)
  const pageCount = pagesFromItems(total, perPage)
  const nextPageExists = nextPage > 0 && nextPage <= pageCount

  if (nextPageExists) handlerFn(nextPage)
}

/**
 * Calculates the totals for the current page
 * @param {number} page
 * @param {number} perPage
 * @param {number} items
 */
export function totals(page, perPage, items) {
  const toRecord = page * perPage
  const fromRecord = toRecord - perPage + 1

  return `Showing ${fromRecord} - ${toRecord} of ${items}`
}
