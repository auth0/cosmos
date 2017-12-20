import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '../../tokens'
import { StyledLink } from './link'

const Label = styled(StyledLink)`
  a {
    cursor: pointer;
    padding: ${spacing.small} ${spacing.small};
    color: ${props => (props.open ? colors.orange : 'inherit')};
  }
`

class Group extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: props.open }
  }
  toggle() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <div>
        <Label onClick={this.toggle.bind(this)} open={this.state.open}>
          <a>{this.props.label}</a>
        </Label>
        {this.state.open && this.props.children}
      </div>
    )
  }
}

const getGroups = components => {
  const groups = { atoms: [], molecules: [] }

  components.map(component => {
    /* parse filepath to get category (atom, molecules)*/
    const category = component.filepath.split('/')[2]
    groups[category].push(component)
  })

  return groups
}

export default Group
export { getGroups }
