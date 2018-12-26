import React from 'react'
import { shallow } from 'enzyme'
import { Switch } from '@auth0/cosmos'

describe('Switch', () => {
  it('calls onToggle handler', () => {
    const handler = jest.fn()
    const switchWrapper = shallow(<Switch onToggle={handler} />)

    switchWrapper
      .simulate('click', { preventDefault: jest.fn(), stopPropagation: jest.fn() })
      .debug()

    expect(handler).toHaveBeenCalled()
  })
})
