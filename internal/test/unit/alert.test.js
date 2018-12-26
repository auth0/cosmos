import React from 'react'
import { shallow } from 'enzyme'
import { Alert } from '@auth0/cosmos'

describe('Alert', () => {
  it('calls onDismiss handler ', () => {
    const handler = jest.fn()
    const alert = shallow(
      <Alert title="Test" onDismiss={handler}>
        This is a test
      </Alert>
    )

    alert.childAt(1).simulate('click')

    expect(handler).toHaveBeenCalled()
  })

  it('calls onDismiss handler automatically using dismissAfterSeconds', () => {
    const handler = jest.fn()

    shallow(
      <Alert title="Test" dismissAfterSeconds={0.5} onDismiss={handler}>
        This is a test
      </Alert>
    )

    return new Promise(resolve => {
      setTimeout(() => {
        expect(handler).toHaveBeenCalled()
        resolve()
      }, 750)
    })
  })
})
