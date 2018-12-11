import styled, {
  keyframes,
  css,
  injectGlobal,
  StyledComponent,
  ThemeProvider
} from 'styled-components'

import domElements from './dom-elements'

/* import cosmos specific helpers */
import margin from './styled-margin'

/* create a thin replacement for styled */
let styledWithHelpers = styledComponent => {
  return styled(styledComponent)
}

/* create functions for all the elements supported in styled */
domElements.forEach(domElement => {
  styledWithHelpers[domElement] = (styles, ...interpolations) => {
    /*
      this is where we can add custom interpolation logic:

      defaults should be added to the start of the list
      overrides should be added to the end of the list

      you can add a function that looks like this:
      const margin: function = (props: object) => css: string
    */
    interpolations.push(margin)

    return styled(domElement)(styles, ...interpolations)
  }
})

export default styledWithHelpers
export { keyframes, css, injectGlobal, StyledComponent, ThemeProvider }
