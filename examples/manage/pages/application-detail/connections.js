import React from 'react'
import styled from 'styled-components'

import { Paragraph } from '@auth0/cosmos'

import ConnectionList from '../../components/connection-list'

class Connections extends React.Component {
  render() {
    return (
      <div>
        <Paragraph margin={{ top: 'large' }}>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </Paragraph>
        <ConnectionList />
      </div>
    )
  }
}

export default Connections
