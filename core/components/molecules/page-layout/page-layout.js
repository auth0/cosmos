import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'


const PageLayout = props => (
  <PageLayout.Element {...Automation('page-layout')}>
    <PageLayout.Header {...Automation('page-header')}>Header</PageLayout.Header>
    <PageLayout.Content {...Automation('page-content')}>Content</PageLayout.Content>
  </PageLayout.Element>
)

PageLayout.Element = styled.div`
`

PageLayout.Header = styled.div`
margin-bottom: ${spacing.xxlarge};
`
PageLayout.Content = styled.div`
`

export default PageLayout