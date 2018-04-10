import React from 'react'
import styled from 'styled-components'

import { Paragraph, List } from '@auth0/cosmos'

import ConnectionListRow from '../../components/connection-list-row'

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

        <List label="Database">
          <ConnectionListRow name="Username-Password-Authentication" connection="Database" />
        </List>

        <List label="Social">
          <ConnectionListRow name="github" connection="GitHub" switchOn />
          <ConnectionListRow name="google-oauth2" connection="Google" />
        </List>

        <List label="Enterprise">
          <div>There are no connections</div>
        </List>

        <List label="Passwordless">
          <div>There are no connections</div>
        </List>
      </div>
    )
  }
}

export default Connections
