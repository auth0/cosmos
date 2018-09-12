import { css } from 'styled-components'

export default truncate => {
  if (truncate) {
    return css`
      max-width: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
    `
  }

  return ''
}
