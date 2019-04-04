import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'
import applyMarginReset, { applyLayoutChildClass } from '../../_helpers/layout-margin-reset'
import { spacing } from '../../tokens'

export interface IPageLayoutProps {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset?: boolean
  children?: React.ReactNode
}

const PageLayout = props => (
  <PageLayout.Element {...props} {...Automation('page-layout')}>
    {applyLayoutChildClass(props.children)}
  </PageLayout.Element>
)

PageLayout.Element = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.xlarge};

  & > *:empty {
    display: none;
  }

  ${applyMarginReset()};
`

PageLayout.Header = styled.div``

PageLayout.Content = styled.div``


export default PageLayout
