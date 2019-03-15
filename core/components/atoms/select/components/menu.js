import React from 'react'
import { components } from 'react-select'
import styled from '@auth0/cosmos/styled'
import { spacing } from '@auth0/cosmos-tokens'

export const CosmosMenu = props => (
  <CosmosMenu.Element>
    <components.Menu {...props} />
  </CosmosMenu.Element>
)

CosmosMenu.Element = styled.div`
  margin-top: ${spacing.xsmall};
`

/**
 * These themes are applied directly to react-select
 */
CosmosMenu.theme = provided => ({
  ...provided,
  boxShadow: '0 3px 12px 0 rgba(0, 0, 0, 0.12), 0 3px 8px 0 rgba(0, 0, 0, 0.04)'
})

CosmosMenu.portalTheme = provided => ({ ...provided, zIndex: 20 })
