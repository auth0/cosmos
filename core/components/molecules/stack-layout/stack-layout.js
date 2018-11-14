import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'

const StackLayout = props => (
  <StackLayout.Element {...Automation('stack-layout')}>
    {props.children.map(child => (
      <StackLayout.Item {...Automation('stack-layout.item')}>{child}</StackLayout.Item>
    ))}
  </StackLayout.Element>
)

StackLayout.Element = styled.div`
  background: red;
  width: 100px;
  height: 100px;
`

StackLayout.Item = styled.div``

export default StackLayout
