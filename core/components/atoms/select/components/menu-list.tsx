import * as React from 'react'
import { components } from 'react-select'
import styled from '../../../styled'
import { spacing, misc } from '../../../tokens'

export const MenuList = props => (
  <MenuList.Element>
    <components.MenuList {...props} className="cosmos-menu-list" />
  </MenuList.Element>
)

MenuList.Element = styled.div`
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

MenuList.theme = provided => ({
  ...provided,
  paddingTop: 0,
  paddingBottom: 0
})
