import React from 'react'

import Link from './link'
import Group, { getGroups } from './group'

const List = props => {
  const groups = getGroups(props.components)
  return (
    <div>
      <Group label="Compound components">
        {groups.molecules.map((component, index) => <Link key={index} component={component} />)}
      </Group>
      <Group label="Building blocks" open>
        {groups.atoms.map((component, index) => <Link key={index} component={component} />)}
      </Group>
    </div>
  )
}

export default List
