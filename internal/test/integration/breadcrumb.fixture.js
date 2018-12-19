import React from 'react'
import { Breadcrumb } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Breadcrumb id="custom-id">
        <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
        <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
      </Breadcrumb>
    )
  }
}

export default Fixture
