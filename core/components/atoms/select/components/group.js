import React from 'react'
import { components } from 'react-select'
import styled from '@auth0/cosmos/styled'

export const Group = props => (
  <Group.Element>
    <components.Group {...props} />
  </Group.Element>
)

Group.Element = styled.div``

Group.theme = provided => ({
  ...provided,
  paddingTop: 0,
  paddingBottom: 0
})
