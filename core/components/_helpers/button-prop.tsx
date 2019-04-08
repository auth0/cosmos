import * as React from 'react'
import Button from '../atoms/button'

export default function buttonProp(action, overrides = {}) {
  if (!action) return null
  if (action.type === Button) return React.cloneElement(action, overrides)

  if (typeof action === 'object') {
    return (
      <Button icon={action.icon} onClick={action.handler} {...overrides}>
        {action.label}
      </Button>
    )
  }

  throw new Error('button prop must be object or type Button')
}
