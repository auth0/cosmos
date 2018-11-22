import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'


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
    margin: 0 !important;
  }
`

PageLayout.Header = styled.div`
`

PageLayout.Content = styled.div`
`

export default PageLayout