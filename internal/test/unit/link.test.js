import React from 'react'
import { shallow } from 'enzyme'
import { Link } from '@auth0/cosmos'

describe('Link', () => {
  it('calls the onClick handler', () => {
    const handler = jest.fn()
    const link = shallow(<Link onClick={handler}>Something</Link>)

    link.simulate('click')

    expect(handler).toHaveBeenCalled()
  })
})
