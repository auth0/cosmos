import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  'spacious': spacing.large
}

const ColumnLayout = props => (
  <ColumnLayout.Element gutter={props.gutter} distribution={props.distribution} {...Automation('column-layout')}>
    {props.children.map(child => (
      <ColumnLayout.Item {...Automation('column-layout.item')}>{child}</ColumnLayout.Item>
    ))}
  </ColumnLayout.Element>
)

ColumnLayout.Element = styled.div`
  display: grid;
  grid-gap: ${props => gutterOptions[props.gutter]};
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: ${props => gridTemplateColumns[props.distribution]}
  }
`

ColumnLayout.Item = styled.div``

ColumnLayout.propTypes = {
  /* Regulates the size of the gutter */
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  distribution: PropTypes.oneOf(['1/2', '1/3', '2/3 1/3', '1/3 2/3', '1/4', '2/4 1/4 1/4', '1/4 2/4 1/4', '1/4 1/4 2/4', '3/4 1/4', '1/4 3/4'])
}

ColumnLayout.defaultProps = {
  gutter: 'default',
  distribution: '1/2'
}

export default ColumnLayout
