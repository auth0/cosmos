import React from 'react'
import { PaginationToolbar } from '@auth0/cosmos'

const mockFn = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <PaginationToolbar id="custom-id" page={1} perPage={10} items={25} onPageChanged={mockFn} />
    )
  }
}

Fixture.onPageChanged = mockFn

export default Fixture
