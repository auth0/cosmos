/**
  This is a demo component to show how to write a good component.
  We will create a square box component here.

  There are 5 steps to do this
*/

/**
  Step 1: Import all the dependencies
  - import React and styled-components, thes are the bread and butter
  - import prop type for documentation and validation
  - import tokens instead of hard coding values
*/

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, fonts, misc } from '../../tokens/'
import Icon, { StyledIcon } from '../atoms/icon'

/**
  Step 2: Create a styled element with css
  You can get the html element from styled.element like styled.a
*/

const StyledSidebar = styled.div`
  /* all your css goes here */
  float: left;
  /**
   * try to remove this float from here
   */
  width: 160px;

  ${StyledIcon} {
    margin-right: ${spacing.xsmall};
    vertical-align: middle;
  }
`

/**
 * Step 3: Create a React component that returns the styled element,
 * Add description above the component, this will be shown in the docs
 */

/**
 * Think of the box
 */

const Sidebar = props => {
  /* you can pass on all the props to the component like this */
  return <StyledSidebar {...props} />
}


/**
  Step 4: We need to add prop information for our component
  - Add propTypes to make for documentation and validation
  - Add defaultProps for documentation
*/
Sidebar.propTypes = {
  /** This comment will be picked up by the docs */
  big: PropTypes.bool
}

Sidebar.defaultProps = {
  big: false
}


Sidebar.Link = props => {
  /* you can pass on all the props to the component like this */
  return <Link href={props.url}>
    <Icon type={props.icon ? 'clients' : 'arrow-right'} size={16} />
    {props.label}
  </Link>
}


const Link = styled.a`
  display: block;
  color: ${colors.base};
  text-decoration: none;
  font-size: 13px;
  padding: calc(${spacing.xsmall} / 2) 0;
  &:hover {
    color: ${colors.orange};
  }
`

Sidebar.LinkGroup = props => {
  /* you can pass on all the props to the component like this */
  return <div>
    <Sidebar.Link icon="emails" label="Emails" />
    <LinkGroupChildren>
    {props.children}
    </LinkGroupChildren>
  </div>
}


const LinkGroupChildren =styled.div`
  padding-left: 1.75em;
  display: none;
`

/* Finally, export the component */
export default Sidebar

/*
  We are not done yet, there is one more step to make our component usable
  Document the examples in _box.md
*/

/*
  Bonus step: Add your component to component/index.js
  so that it can be imported from accross the system

  import {Box} from 'src/components'

  This is a step only for convenience while developing the system,
  it will be replaced with a more explicit syntax

  import Box from 'cosmos/box'
*/
