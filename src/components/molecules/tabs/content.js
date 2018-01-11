import React from 'react'
import styled from 'styled-components'
import { spacing } from '../../../tokens'

const StyledTabContent = styled.div`
  padding-top: ${spacing.medium};
`
const TabContent = props => <StyledTabContent>{props.children}</StyledTabContent>

export default TabContent
