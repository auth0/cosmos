import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { metadata as components } from '../metadata.json'
import { spacing, colors } from '../../tokens'
import { Input } from '../../components'

const List = styled.div`
  > a {
    display: block;
    padding: ${spacing.small} ${spacing.small};
    text-decoration: none;
    color: ${colors.grayDark};

    &:hover,
    &.selected {
      background: ${colors.white};
      box-shadow: inset -1px 0px 1px 0px ${colors.grayLightest};
    }
  }
`

export default class extends React.Component {
  constructor() {
    super()
    this.state = { searchQuery: '' }
  }
  render() {
    return (
      <List>
        <Input
          autoFocus
          placeholder="Search for a component"
          onChange={e => this.setState({ searchQuery: e.target.value })}
        />
        {components
          .filter(component => component.displayName.includes(this.state.searchQuery))
          .map(component => (
            <NavLink
              to={`/docs/${component.displayName}`}
              key={component.displayName}
              activeClassName="selected"
            >
              {component.displayName}
            </NavLink>
          ))}
      </List>
    )
  }
}
