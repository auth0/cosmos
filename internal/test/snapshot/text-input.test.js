import React from 'react'
import renderer from 'react-test-renderer'
import { TextInput } from '@auth0/cosmos'
import 'jest-styled-components'

describe('TextInput', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<TextInput />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
