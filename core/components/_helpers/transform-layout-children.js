import React from 'react'
import Automation from './automation-attribute'
import { LAYOUT_CHILDREN_CLASS_NAME } from './layout-margin-reset'

const transformChildren = (props, ChildWrapperElement, automationAttributeName) => {
  const transformChild = (child, index) => {
    // if child is undefined or null, do not wrap/render anything
    if (!child) return null

    return (
      <ChildWrapperElement
        className={LAYOUT_CHILDREN_CLASS_NAME}
        key={index}
        {...Automation(automationAttributeName)}
      >
        {child}
      </ChildWrapperElement>
    )
  }

  if (props.children.constructor.name === 'Array') {
    return props.children.map(transformChild)
  }

  return transformChild(props.children)
}

export default transformChildren
