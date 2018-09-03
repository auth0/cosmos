import React from 'react'
import renderer from 'react-test-renderer'
import { ResourceList } from '@auth0/cosmos'
import 'jest-styled-components'

describe('ResourceList', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <ResourceList
          items={[
            {
              title: 'Item 1',
              subtitle: 'Native'
            }
          ]}
          actions={[]}
          onItemClick={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
