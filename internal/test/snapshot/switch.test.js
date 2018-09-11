import React from 'react'
import renderer from 'react-test-renderer'
import { Switch } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Switch', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Switch />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
