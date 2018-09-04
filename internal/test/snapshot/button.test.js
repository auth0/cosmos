import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Button', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Button />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
