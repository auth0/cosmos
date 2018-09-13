import { css } from 'styled-components'

export default (truncate, maxWidth = 0) => {
  if (truncate) {
    return css`
      max-width: ${maxWidth};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
    `
  }

  return ''
}
