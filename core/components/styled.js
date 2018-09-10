import styled, {
  keyframes,
  css,
  injectGlobal,
  StyledComponent,
  ThemeProvider
} from 'styled-components'

import domElements from 'styled-components/src/utils/domElements'

/* Always add cs class to component */
const BaseComponent = styled.div.attrs({ className: 'cs' })``

/* modify styled so that it always uses BaseComponent under the hood */
let modified = styled
domElements.forEach(domElement => {
  modified[domElement] = BaseComponent.withComponent(domElement).extend
})

export default modified
export { keyframes, css, injectGlobal, StyledComponent, ThemeProvider }
