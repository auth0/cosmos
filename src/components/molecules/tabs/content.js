import React from 'react'
import styled from 'styled-components'
import { spacing } from 'auth0-cosmos-tokens'

const StyledTabContent = styled.div`
  padding-top: ${spacing.large};
`
const TabContent = props => <StyledTabContent>{props.children}</StyledTabContent>

export default TabContent
