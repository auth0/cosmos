/*
  This is a demo component to show how to write a good component.
  We will create a square box component here.

  There are 5 steps to do this
*/

/*
  Step 1: Import all the dependencies
  - import React and styled-components, thes are the bread and butter
  - import prop type for documentation and validation
  - import tokens instead of hard coding values
*/

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc } from '@auth0/cosmos-tokens'

/*
  Step 2: Create a styled element with css
  You can get the html element from styled.element like styled.a
*/

const StyledBox = styled.div`
  /* all your css goes here */

  /* you can use variables here like tokens */
  background: ${colors.base.grayLightest};
  border: 1px solid ${colors.base.grayDark};
  border-radius: ${misc.radius};

  /* you can use props here to customize the element */
  width: ${props => (props.big ? '100px' : '50px')};
  height: ${props => (props.big ? '100px' : '50px')};

  /* this is how you add pseudo states */
  &:hover {
    background: ${colors.base.grayLight};
  }
`

/*
 * Step 3: Create a React component that returns the styled element,
 * Add description above the component, this will be shown in the docs
 */

const Box = props => {
  /* you can pass on all the props to the component like this */
  return <StyledBox {...props} />
}

/*
  Step 4: We need to add prop information for our component
  - Add propTypes to make for documentation and validation
  - Add defaultProps for documentation
*/
Box.propTypes = {
  /** This comment will be picked up by the docs */
  big: PropTypes.bool
}

Box.defaultProps = {
  big: false
}

/* Finally, export the component */
export default Box

/*
  We are not done yet, there is one more step to make our component usable
  Document the examples in _box.md
*/

/*
  Bonus step: Add your component to component/index.js
  so that it can be imported from accross the system

  import { Box } from 'src/components'

  This is a step only for convenience while developing the system,
  it will be replaced with a more explicit syntax

  import { Box } from 'auth0-cosmos'
*/
