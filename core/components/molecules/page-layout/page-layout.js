import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'

const marginReset = {
  'none': "auto",
  'reset': "0 !important"
}

const PageLayout = props => (
  <PageLayout.Element {...Automation('page-layout')}>
    {props.children}
  </PageLayout.Element>
)

PageLayout.Element = styled.div`
  --PageLayout--GridGap: ${spacing.xxlarge};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--PageLayout--GridGap);

  /* 
  Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
  This is a fix that will last until we remove margins from components.
  */
  > * > * {
    margin: ${props => marginReset[props.marginReset]};
  }
`

PageLayout.Header = styled.div`
`

PageLayout.Content = styled.div`
`


PageLayout.propTypes = {
  /* This prop resets the margins of the component inside layouts togenerate consistent spaces. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

PageLayout.defaultProps = {
  marginReset: 'reset'
}

export default PageLayout