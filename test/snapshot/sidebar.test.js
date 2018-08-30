import React from 'react'
import renderer from 'react-test-renderer'
import { Sidebar } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Sidebar', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Sidebar>
          <Sidebar.Link icon="clients" label="Clients" onClick={() => {}} />
        </Sidebar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
