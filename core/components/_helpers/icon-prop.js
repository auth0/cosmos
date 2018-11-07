import React from 'react'
import Icon from '../atoms/icon'

const applyAdditionalProps = (element, props) => {
  const propsArePresent = props && Object.keys(props).length > 0

  return propsArePresent ? React.cloneElement(element, props) : element
}

export default (prop, additionalProps = {}) => {
  if (typeof prop === 'string') {
    console.warn('Passing icons as string has been deprecated and will be removed in Cosmos 1.0.')
    console.log(`Please replace 'icon="${prop}"' with 'icon={<Icon name="${prop}"/>}'`)

    return <Icon name={prop} {...additionalProps} />
  }

  return applyAdditionalProps(prop, additionalProps)
}
