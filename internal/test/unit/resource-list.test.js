import React from 'react'
import { Button } from '@auth0/cosmos'
import { actionToButtonProps } from '@auth0/cosmos/molecules/resource-list/action-builder'

describe('ResourceList Action Builder', () => {
  it('builds actions', () => {
    const buttonPropTypes = Object.keys(Button.propTypes)
    const generatedProps = Object.keys(actionToButtonProps({}))
    const expectIfNotKey = (propName, expectation) => propName !== 'key' && expectation()

    // Ignore key since it is a React-internal prop
    generatedProps.forEach(prop =>
      expectIfNotKey(prop, () => expect(buttonPropTypes).toContain(prop))
    )
  })
})
