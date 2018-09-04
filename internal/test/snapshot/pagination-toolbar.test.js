import React from 'react'
import renderer from 'react-test-renderer'
import { PaginationToolbar } from '@auth0/cosmos'
import 'jest-styled-components'

describe('PaginationToolbar', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<PaginationToolbar page={3} perPage={10} items={20372} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
