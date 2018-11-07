import React from 'react'
import Icon from '../atoms/icon'
export default prop => {
  if (typeof prop === 'string') {
    console.warn('Passing icons as string has been deprecated and will be removed in Cosmos 1.0.')
    console.log(`Please replace 'icon="${prop}"' with 'icon={<Icon name="${prop}"/>}'`)
    return <Icon name={prop} />
  }
  return prop
}
