import React from 'react'
import renderer from 'react-test-renderer'
import { PageHeader } from '@auth0/cosmos'
import 'jest-styled-components'

describe('PageHeader', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<PageHeader description="description" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
