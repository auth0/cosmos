import React from 'react'
import renderer from 'react-test-renderer'
import { TextArea } from '@auth0/cosmos'
import 'jest-styled-components'

describe('TextArea', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<TextArea />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
