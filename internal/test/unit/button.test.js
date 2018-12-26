import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '@auth0/cosmos'

describe('Button', () => {
  it('calls the onClick handler', () => {
    const handler = jest.fn()
    const button = shallow(<Button onClick={handler}>Something</Button>)

    button.simulate('click')

    expect(handler).toHaveBeenCalled()
  })
})
