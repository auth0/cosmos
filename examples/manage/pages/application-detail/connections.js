import React from 'react'
import styled from '@auth0/cosmos/styled'

import { Paragraph } from '@auth0/cosmos'

import ConnectionList from '../../components/connection-list'

// TODO: Need to figure out how to make the first Paragraph have no margin top. We could add a prop?
// TODO: Remove and solve this override!
const FirstParagraph = styled(Paragraph)`
  margin-top: 0;
`

class Connections extends React.Component {
  render() {
    return (
      <div>
        <FirstParagraph>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </FirstParagraph>

        <ConnectionList />
      </div>
    )
  }
}

export default Connections
