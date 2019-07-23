import * as React from 'react'

export const valueRenderer = (providedRenderer) => (optionProps) => {
  const { innerProps, innerRef, data } = optionProps

  return (
    <div ref={innerRef} {...innerProps}>
      {providedRenderer(data)}
    </div>
  )
}
