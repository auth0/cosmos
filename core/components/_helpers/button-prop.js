import React from 'react'
import Button from '../atoms/button'
export default (prop, overrides = {}) => {
  if (!prop) return null
  if (prop.type === Button) return React.cloneElement(prop, overrides)

  if (typeof prop === 'object') {
    return (
      <Button icon={prop.icon} onClick={prop.handler} {...overrides}>
        {prop.label}
      </Button>
    )
  }

  throw new Error('button prop must be object or type Button')
}
