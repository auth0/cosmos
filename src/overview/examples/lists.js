import React from 'react'
import styled from 'styled-components'

import Section from '../ov-components/section'
import Example from '../ov-components/example'


import { List, Stack, Switch, Icon } from '@auth0/cosmos'

import ClientList from '../../manage/components/client-list'

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
        <ConnectionListRow name="github" connection="GitHub" switchOn />
        <ConnectionListRow name="google-oauth2" connection="Google" />
      </List>
    </Example>

    <Example title="List of Clients">
      <ClientList />
    </Example>
  </Section>
)

export default ListsExample
