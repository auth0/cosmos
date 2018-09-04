import React from 'react'
import renderer from 'react-test-renderer'
import { Pager } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Pager', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Pager page={3} perPage={10} items={20372} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
