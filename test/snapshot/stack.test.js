import React from 'react'
import renderer from 'react-test-renderer'
import { Stack } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Stack', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Stack>
          <div>element</div>
        </Stack>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
