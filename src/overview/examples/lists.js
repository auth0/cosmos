import React from 'react'
import styled from 'styled-components'

import Section from '../ov-components/section'
import Example from '../ov-components/example'

/* TODO: Extract ConnectionsList as a local component in manage/components */

import { List, Stack, Switch, Icon } from 'auth0-cosmos'

import ClientListRow from '../../manage/components/client-list-row'
import { clients } from '../../manage/pages/clients/clients.json'

// TODO: Remove the ConnectionType component and maybe do a flag component
const ConnectionType = styled.div`
  span {
    display: inline-block;
    vertical-align: middle;
  }
`

const ListsExample = () => (
  <Section>
    <Example title="List of Connections">
      <List label="Social">
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>github</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>GitHub</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
        <Stack align="fill" widths={[60, 40, 20]}>
          <div>google-oauth2</div>
          <ConnectionType>
            <Icon size={16} name="" />
            <span>Google</span>
          </ConnectionType>
          <Stack align="right">
            <Switch accessibleLabels={[]} />
          </Stack>
        </Stack>
      </List>
    </Example>

    <Example title="List of Clients">
      <List>
        {clients.map(client => (
          <ClientListRow
            id={client.id}
            name={client.name}
            type={client.type}
            image={client.image}
          />
        ))}
      </List>
    </Example>
  </Section>
)

export default ListsExample
