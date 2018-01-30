import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '../../../tokens'
import { sumOfElements, numberOfValues } from '../../_helpers/custom-validations'

const StyledStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: bottom;
  justify-content: ${props => (props.compressed ? 'start' : 'space-between')};
  > * {
    flex: ${props => (props.compressed ? 'none' : 1)};
    align-self: center;
    margin-right: ${props => (props.compressed ? 0 : spacing.xsmall)};
  }
  > *:last-child {
    margin-right: 0;
  }
`

const StackedItem = styled.div`
  flex-basis: ${props => props.width}%;
`

/*
  wrap children in col
  flex-basis makes flex redundant, have one
  accept widths on parent = Stack
*/

const Stack = props => {
  let children
  if (props.compressed) children = props.children
  else {
    children = React.Children.map(props.children, (child, index) => {
      let width = 0
      if (props.widths) width = `${props.widths[index]}` || 0

      return <StackedItem width={width}>{child}</StackedItem>
    })
  }

  return <StyledStack {...props}>{children}</StyledStack>
}

Stack.propTypes = {
  /** Use compressed for stacking elements without margin between them */
  compressed: PropTypes.bool,
  /** Element widths in % */
  widths: PropTypes.arrayOf(PropTypes.number),

  /* internal props only used for validation */
  /* sum of width values should be 100% */
  _sum: props => sumOfElements(props.widths, 100),
  /* the number of widths should match number of children */
  _numberOfValues: props => numberOfValues(props.widths, React.Children.count(props.children))
}

Stack.defaultProps = {
  compressed: false
}

export default Stack
