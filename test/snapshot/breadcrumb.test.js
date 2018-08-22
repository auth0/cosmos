import React from 'react'
import renderer from 'react-test-renderer'
import { Breadcrumb } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Breadcrumb', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Breadcrumb>
          <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        </Breadcrumb>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
