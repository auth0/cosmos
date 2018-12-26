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
})
