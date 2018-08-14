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
  let toRecord = page * perPage
  const fromRecord = toRecord - perPage + 1

  if (toRecord > items) toRecord = items

  return `Showing ${fromRecord} - ${toRecord} of ${items}`
}

/**
 * Calculates the pagintion slice range for a given page.
 *
 * Example:
 *  Given the page 77 with a pages-per-slice value of 10,
 *  we would obtain the following range:
 *
 *    70, 71, 72, [[73]], 74, 75, 76, 77, 78, 79
 *
 *  with the format:
 *    { label: number | string, selected: boolean }.
 *
 * @param {number} page
 * @param {number} items
 * @param {number} itemsPerPage
 * @param {number} pagesPerSlice
 */
export function getPaginationSlice(page, items, itemsPerPage, pagesPerSlice = 5) {
  const actualPage = page - 1
  const minPage = actualPage - (actualPage % pagesPerSlice)
  const maxPage = pagesFromItems(items, itemsPerPage)

  const range = [...Array(pagesPerSlice).keys()]
    .map(i => {
      const pageNumber = i + minPage + 1 // Avoid starting at 0
      const selected = page === pageNumber
      return { label: pageNumber, selected }
    })
    .filter(i => i.label <= maxPage)

  return range
}
