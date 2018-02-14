import React from 'react'
import styled from 'styled-components'
import { Paragraph, Switch, List, Stack, Icon } from '../components'

// TODO: Remove the nested Stack here with a new Stack alignment or a Table component
const Connection = props => (
  <Stack align="fill">
    <div>{props.type}</div>
    <Connection.Type>
      <Icon size={16} name={props.icon} />
      <span>{props.name}</span>
    </Connection.Type>
    <Stack align="right">
      <Switch accessibleLabels={[]} />
    </Stack>
  </Stack>
)

Connection.Type = styled.div`
  span {
    display: inline-block;
    vertical-align: middle;
  }
`

class Connections extends React.Component {
  render() {
    return (
      <div>
        <Paragraph>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </Paragraph>

        <List label="Database">
          <Connection type="Username-Password-Authentication" icon="help" name="Database" />
        </List>

        <List label="Social">
          <Connection type="github" icon="help" name="GitHub" />
          <Connection type="google-oauth2" icon="help" name="Google" />
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
