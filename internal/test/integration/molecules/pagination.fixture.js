import React from 'react'
import { Pagination } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return <Pagination id="custom-id" page={1} perPage={10} items={25} />
  }
}

export default Fixture
