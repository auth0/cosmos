import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonGroup } from '@auth0/cosmos'
import 'jest-styled-components'

describe('ButtonGroup', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<ButtonGroup />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
