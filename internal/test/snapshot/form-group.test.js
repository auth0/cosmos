import React from 'react'
import renderer from 'react-test-renderer'
import { FormGroup } from '@auth0/cosmos'
import 'jest-styled-components'

describe('FormGroup', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<FormGroup />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
