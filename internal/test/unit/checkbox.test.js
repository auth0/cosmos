import React from 'react'
import { shallow } from 'enzyme'
import { Checkbox } from '@auth0/cosmos'

describe('Checkbox', () => {
  it('calls the onChange handler', () => {
    const handler = jest.fn()
    const checkbox = shallow(<Checkbox name="something" onChange={handler} />)

    checkbox.simulate('change')
    expect(handler).toHaveBeenCalled()
  })
})
