import React from 'react'
import renderer from 'react-test-renderer'
import { Select } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Select', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Select options={[{ text: 'One', value: 1 }]} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
