import React from 'react'
import styled from 'styled-components'

import { Paragraph, Switch, List, Stack } from 'auth0-cosmos'

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
          <Stack widths={[41, 41, 18]}>
            <div>Username-Password-Authentication</div>
            <div>Database</div>
            <Stack align="right">
              <Switch accessibleLabels={[]} />
            </Stack>
          </Stack>
        </List>

        <List label="Social">
          <Stack widths={[41, 41, 18]}>
            <div>github</div>
            <div>GitHub</div>
            <Stack align="right">
              <Switch on accessibleLabels={[]} />
            </Stack>
          </Stack>
          <Stack widths={[41, 41, 18]}>
            <div>google-oauth2</div>
            <div>Google</div>
            <Stack align="right">
              <Switch off accessibleLabels={[]} />
            </Stack>
          </Stack>
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
