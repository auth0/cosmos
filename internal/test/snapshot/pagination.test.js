import React from 'react'
import renderer from 'react-test-renderer'
import { Pagination } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Pagination', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Pagination page={3} perPage={10} items={20372} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
