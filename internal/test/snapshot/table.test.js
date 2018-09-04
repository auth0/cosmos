import React from 'react'
import renderer from 'react-test-renderer'
import { Table } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Table', () => {
  it('renders with automation attribute', () => {
    const tree = renderer
      .create(
        <Table
          items={[
            {
              name: 'john'
            }
          ]}
        >
          <Table.Column field="name" title="Name" width="30%" />
        </Table>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
