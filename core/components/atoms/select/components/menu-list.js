import React from 'react'
import { components } from 'react-select'
import styled from '@auth0/cosmos/styled'

export const CosmosMenuList = props => (
  <CosmosMenuList.Element>
    <components.MenuList {...props} />
  </CosmosMenuList.Element>
)

CosmosMenuList.Element = styled.div``
