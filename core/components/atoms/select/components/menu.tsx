import * as React from 'react'
import { components } from 'react-select'
import styled from '../../../styled'
import { spacing } from '../../../tokens'

export const Menu = props => (
  <Menu.Element>
    <components.Menu {...props} />
  </Menu.Element>
)

Menu.Element = styled.div`
  margin-top: ${spacing.xsmall};
`

/**
 * These themes are applied directly to react-select
 */
Menu.theme = provided => ({
  ...provided,
  boxShadow: '0 3px 12px 0 rgba(0, 0, 0, 0.12), 0 3px 8px 0 rgba(0, 0, 0, 0.04)'
})

Menu.portalTheme = provided => ({ ...provided, zIndex: 20 })
