import React from 'react'
import styled from 'styled-components'

import Link from './link'
import Group, { getGroups } from './group'

const List = props => {
  const groups = getGroups(props.components)
  return (
    <div>
      <Group label="Atoms" open>
        {groups.atoms.map((component, index) => <Link key={index} component={component} />)}
      </Group>
      <Group label="Molecules">
        {groups.molecules.map((component, index) => <Link key={index} component={component} />)}
      </Group>
    </div>
  )
}

export default List
