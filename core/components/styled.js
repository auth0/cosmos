import styled, {
  keyframes,
  css,
  injectGlobal,
  StyledComponent,
  ThemeProvider
} from 'styled-components'

import domElements from 'styled-components/src/utils/domElements'

/* create a thin replacement for styled */
let styledWithHelpers = styledComponent => {
  return styled(styledComponent)
}

/* create functions for all the elements supported in styled */
domElements.forEach(domElement => {
  styledWithHelpers[domElement] = (styles, ...interpolations) => {
    /* this is where we append or prepend custom logic */

    return styled(domElement)(styles, ...interpolations)
  }
})

export default styledWithHelpers
export { keyframes, css, injectGlobal, StyledComponent, ThemeProvider }
