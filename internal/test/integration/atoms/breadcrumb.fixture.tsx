import * as React from 'react'
import { Breadcrumb } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Breadcrumb id="custom-id">
        <Breadcrumb.Link id="custom-id" href="/home" onClick={mockFn}>
          Home
        </Breadcrumb.Link>
        <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
        <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
      </Breadcrumb>
    )
  }
}

export default Fixture
