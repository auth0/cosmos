import React from 'react'
import styled from 'styled-components'
import Automation from './automation-attribute'

const StyledPlaceholder = styled.div`
  border: 2px dashed black;
  padding: 10px;
  height: 100%;
`

export default () => <StyledPlaceholder {...Automation('layout-placeholder-helper')}>Component</StyledPlaceholder>
