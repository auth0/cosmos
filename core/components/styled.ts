import styled, {
  css,
  injectGlobal,
  keyframes,
  StyledComponentClass,
  ThemeProvider
} from 'styled-components'
import domElements from './_helpers/dom-elements'
/* import cosmos specific helpers */
import margin from './_helpers/styled-margin'

/*
  create a thin replacement for styled
  styledWithHelpers(c) = styled(c)
*/

const styledWithHelpers: any = (styledComponent) => styled(styledComponent)

/* create functions for all the elements supported in styled */
domElements.forEach((domElement) => {
  styledWithHelpers[domElement] = (styles, ...interpolations) => {
    /*
      this is where we can add custom interpolation logic:

      defaults should be added to the start of the list
      overrides should be added to the end of the list

      you can add a function that looks like this:
      const margin: function = (props: object) => css: string
    */
    interpolations.push(margin)

    return styled[domElement](styles, ...interpolations)
  }

  /* attach inbuilt styled-components helpers back */
  styledWithHelpers[domElement].withConfig = styled[domElement].withConfig
  styledWithHelpers[domElement].attrs = styled[domElement].attrs
})

export default styledWithHelpers
export { keyframes, css, injectGlobal, StyledComponentClass, ThemeProvider }
