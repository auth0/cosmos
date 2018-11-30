import React from 'react';
import Automation from './automation-attribute'

const transformChildren = (props, ChildWrapperElement, automationAttributeName) => {
  const transformChild = (child, index) =>
    <ChildWrapperElement key={index} {...Automation(automationAttributeName)}>{child}</ChildWrapperElement>

  if (props.children.constructor.name === 'Array') {
    return props.children.map(transformChild)
  }

  return transformChild(props.children)
}

export default transformChildren
