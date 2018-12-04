import styled from 'styled-components'
import domElements from 'styled-components/src/utils/domElements'

/* create replacement for styled */
let component = {}

/* this is the function called when you call component.div */
const createStyledFunction = (element, css) => {
  return styled[element]`
    ${css};
  `
}

/* create functions for all the elements supported in styled */
domElements.forEach(domElement => {
  component[domElement] = css => {
    return createStyledFunction(domElement, css)
  }
})

export default component
