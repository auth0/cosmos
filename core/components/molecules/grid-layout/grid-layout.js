import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'

const gridTemplateColumns = {
  '1/2': 'repeat(2, 1fr)',
  '1/3': 'repeat(3, 1fr)',
  '2/3 1/3': '2fr 1fr',
  '1/3 2/3': '1fr 2fr',
  '1/4': `repeat(4, 1fr)`,
  '2/4 1/4 1/4': '2fr 1fr 1fr',
  '1/4 2/4 1/4': '1fr 2fr 1fr',
  '1/4 1/4 2/4': '1fr 1fr 2fr',
  '3/4 1/4': '3fr 1fr',
  '1/4 3/4': '1fr 3fr'
}

const gutterOptions = {
  'none': 0,
  'default': spacing.medium,
  'condensed': spacing.small,
  'spacious': spacing.large,
}

const GridLayout = props => (
  <GridLayout.Element gutter={props.gutter} distribution={props.distribution} {...Automation('grid-layout')}>
    {props.children.map(child => (
      <GridLayout.Item {...Automation('grid-layout.item')}>{child}</GridLayout.Item>
    ))}
  </GridLayout.Element>
)

GridLayout.Element = styled.div`
  display: grid;
  grid-gap: ${props => gutterOptions[props.gutter]};
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: ${props => gridTemplateColumns[props.distribution]}
  }
`

GridLayout.Item = styled.div``

// GridLayout.propTypes = {
//   /* Regulates the size of the gutter */
//   gutter: PropTypes.oneOf(['default', 'condensed', 'spacious'])
// }

// GridLayout.defaultProps = {
//   gutter: 'default',
// }

export default GridLayout
