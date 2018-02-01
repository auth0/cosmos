import React from 'react'

import Link from './link'
import Group, { getGroups } from './group'
import attachChildren from './children'

const List = props => {
  /* Filter out internal components */
  let components = props.components.filter(c => !c.internal)
  components = attachChildren(components)
  const groups = getGroups(components)
  return (
    <div>
      <Group label="Compound components">
        {groups.molecules.map((component, index) => {
          let children = <Link key={index} component={component} />

          if (component.children) {
            children = (
              <div key={index}>
                <Link key={index} component={component} />
                {component.children.map((child, index) => {
                  return <Link child key={index} component={child} />
                })}
              </div>
            )
          }

          return children
        })}
      </Group>
      <Group label="Building blocks" open>
        {groups.atoms.map((component, index) => <Link key={index} component={component} />)}
      </Group>
    </div>
  )
}

export default List
