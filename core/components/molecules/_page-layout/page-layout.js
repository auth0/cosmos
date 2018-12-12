import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import applyMarginReset, { applyLayoutChildClass } from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const PageLayout = props => (
  <PageLayout.Element {...props} {...Automation('page-layout')}>
    {applyLayoutChildClass(props.children)}
  </PageLayout.Element>
)

PageLayout.Element = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.xlarge};

  ${applyMarginReset()};
`

PageLayout.Header = styled.div``

PageLayout.Content = styled.div``

PageLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. In doubt just leave it as `rest`. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

PageLayout.defaultProps = {
  marginReset: 'reset'
}

export default PageLayout
