import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '../../tokens'
import { StyledLink } from './link'

const Label = styled(StyledLink)`
  a {
    padding: ${spacing.small} ${spacing.small};
    &:hover {
      background: initial;
    }
  }
`

const Group = props => (
  <div>
    <Label>
      <a>{props.label}</a>
    </Label>
    {props.children}
  </div>
)

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
