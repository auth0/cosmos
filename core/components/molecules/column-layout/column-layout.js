import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import { spacing } from '@auth0/cosmos-tokens'

const gridTemplateColumns = {
  '1/2 1/2': 'repeat(2, 1fr)',
  '1/3 1/3 1/3': 'repeat(3, 1fr)',
  '2/3 1/3': '2fr 1fr',
  '1/3 2/3': '1fr 2fr',
  '1/4 1/4 1/4 1/4': `repeat(4, 1fr)`,
  '2/4 1/4 1/4': '2fr 1fr 1fr',
  '1/4 2/4 1/4': '1fr 2fr 1fr',
  '1/4 1/4 2/4': '1fr 1fr 2fr',
  '3/4 1/4': '3fr 1fr',
  '1/4 3/4': '1fr 3fr'
}

const gutterOptions = {
  'none': "var(--ColumnLayout--None--GridGap)",
  'condensed': "var(--ColumnLayout--Condensed--GridGap)",
  'default': "var(--ColumnLayout--Default--GridGap)",
  'spacious': "var(--ColumnLayout--Spacious--GridGap)"
}

const marginReset = {
  'none': "auto",
  'reset': "0 !important"
}


const ColumnLayout = props => (
  <ColumnLayout.Element gutter={props.gutter} distribution={props.distribution} {...Automation('column-layout')}>
    {transformChildren(props, ColumnLayout.Item, 'column-layout.item')}
  </ColumnLayout.Element>
)

ColumnLayout.Element = styled.div`
  --ColumnLayout--None--GridGap: 0;
  --ColumnLayout--Condensed--GridGap: ${spacing.small};
  --ColumnLayout--Default--GridGap: ${spacing.medium};
  --ColumnLayout--Spacious--GridGap: ${spacing.large};
  --ColumnLayout--Header--Color: ${spacing.large};

  display: grid;
  grid-gap: ${props => gutterOptions[props.gutter]};
  grid-template-columns: 1fr;
  
  /* Placeholder width media feature until we have global variables for breakpoints */
  @media (min-width: 768px) {
    grid-template-columns: ${props => gridTemplateColumns[props.distribution]}
  }

  /* 
  Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
  This is a fix that will last until we remove margins from components.
  */
  > * > * {
    margin: ${props => marginReset[props.marginReset]};
  }
`

ColumnLayout.Item = styled.div``

ColumnLayout.propTypes = {
  /** Regulates the size of the gutter betwen each column */
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Defines the distribution and amount of columns */
  distribution: PropTypes.oneOf(['1/2 1/2', '1/3 1/3 1/3', '2/3 1/3', '1/3 2/3', '1/4 1/4 1/4 1/4', '2/4 1/4 1/4', '1/4 2/4 1/4', '1/4 1/4 2/4', '3/4 1/4', '1/4 3/4']),
  /** Resets the margins of the component within the layout to generate consistent spaces. In doubt just leave it as `rest`. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

ColumnLayout.defaultProps = {
  gutter: 'default',
  distribution: '1/2 1/2',
  marginReset: 'reset'
}

export default ColumnLayout
