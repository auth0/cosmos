import React from 'react'
import renderer from 'react-test-renderer'
import { List } from '@auth0/cosmos'
import 'jest-styled-components'

describe('List', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <List>
          <div>element</div>
        </List>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
