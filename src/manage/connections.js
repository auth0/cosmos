import React from 'react'
import { Text, Switch, Stack } from '../components'

class Connections extends React.Component {
  render() {
    return (
      <div>
        <Text>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </Text>
        <div>
          <Stack>
            <div>github</div> <div>GitHub</div> <Switch on />
          </Stack>
          <Stack>
            <div>google-oauth2</div> <div>Google</div> <Switch off />
          </Stack>
        </div>
      </div>
    )
  }
}

export default Connections
