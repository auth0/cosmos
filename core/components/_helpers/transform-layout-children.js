import React from 'react'
import Automation from './automation-attribute'
import { LAYOUT_CHILDREN_CLASS_NAME } from './layout-margin-reset'

const transformChildren = (props, ChildWrapperElement, automationAttributeName) => {
  const transformChild = (child, index) => (
    <ChildWrapperElement
      className={LAYOUT_CHILDREN_CLASS_NAME}
      key={index}
      {...Automation(automationAttributeName)}
    >
      {child}
    </ChildWrapperElement>
  )

  if (props.children.constructor.name === 'Array') {
    return props.children.map(transformChild)
  }

  return transformChild(props.children)
}

export default transformChildren
