import React from 'react'
import { components } from 'react-select'
import styled from '@auth0/cosmos/styled'
import { spacing, misc } from '@auth0/cosmos-tokens'

export const CosmosMenuList = props => (
  <CosmosMenuList.Element>
    <components.MenuList {...props} className="cosmos-menu-list" />
  </CosmosMenuList.Element>
)

CosmosMenuList.Element = styled.div`
  border-radius: ${misc.radius};
  overflow: hidden;

  > .cosmos-menu-list {
    padding-top: ${spacing.xsmall};
    padding-bottom: ${spacing.xsmall};

    & > *:nth-last-child() {
      margin-bottom: ${spacing.xsmall};
    }
  }
`

CosmosMenuList.theme = provided => ({
  ...provided,
  paddingTop: 0,
  paddingBottom: 0
})

export const CosmosGroup = props => (
  <CosmosGroup.Element>
    <components.Group {...props} />
  </CosmosGroup.Element>
)

CosmosGroup.Element = styled.div``

CosmosGroup.theme = provided => ({
  ...provided,
  paddingTop: 0,
  paddingBottom: 0
})
