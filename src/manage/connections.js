import React from 'react'
import { Text, Switch, List, Stack } from '../components'

class Connections extends React.Component {
  render() {
    return (
      <div>
        <Text>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </Text>
        <List label="Social">
          <Stack>
            <div>github</div> <div>GitHub</div> <Switch on />
          </Stack>
          <Stack>
            <div>google-oauth2</div> <div>Google</div> <Switch off />
          </Stack>
        </List>
      </div>
    )
  }
}

export default Connections
