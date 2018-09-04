import React from 'react'
import renderer from 'react-test-renderer'
import { Tabs } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Tabs', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Tabs onSelect={() => {}} selected={1}>
          <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        </Tabs>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
