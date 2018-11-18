import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  'none': 0,
  'default': spacing.medium,
  'condensed': spacing.small,
  'spacious': spacing.large
}

const RowLayout = props => (
  <RowLayout.Element gutter={props.gutter} distribution={props.distribution} {...Automation('row-layout')}>
    {props.children.map(child => (
      <RowLayout.Item {...Automation('row-layout.item')}>{child}</RowLayout.Item>
    ))}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  > *:not(:last-child) { 
    /* or only child */
    margin-bottom: ${props => gutterOptions[props.gutter]};
  }
`

RowLayout.Item = styled.div`
  /* if empty remove the margin */
  > * {
    margin: 0 !important
  }
`

RowLayout.propTypes = {
  /* Regulates the size of the gutter */
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
}

RowLayout.defaultProps = {
  gutter: 'default',
}

export default RowLayout
