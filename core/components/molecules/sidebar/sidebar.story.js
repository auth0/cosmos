import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Sidebar } from '@auth0/cosmos'

const StyledExample = styled(Example)`
  /* Temporal, until we fix sidebar styles */
  height: 500px;
`

storiesOf('Sidebar', module).add('default', () => (
  <StyledExample>
    <Sidebar>
      <Sidebar.Link icon="dashboard" label="Dashboard" />
      <Sidebar.Link icon="clients" label="Applications" />
      <Sidebar.Link icon="apis" label="APIs" />
      <Sidebar.Link icon="sso-integrations" label="SSO Integrations" />
      <Sidebar.LinkGroup icon="connections" label="Connections">
        <Sidebar.Link label="Database" />
        <Sidebar.Link label="Social" />
        <Sidebar.Link label="Enterprise" />
        <Sidebar.Link label="Passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" />
      <Sidebar.Link icon="rules" label="Rules" />
    </Sidebar>
  </StyledExample>
))

storiesOf('Sidebar', module).add('selected item', () => (
  <StyledExample>
    <Sidebar>
      <Sidebar.Link icon="dashboard" label="Dashboard" selected={true} />
      <Sidebar.Link icon="clients" label="Applications" />
      <Sidebar.Link icon="apis" label="APIs" />
      <Sidebar.Link icon="sso-integrations" label="SSO Integrations" />
      <Sidebar.LinkGroup icon="connections" label="Connections">
        <Sidebar.Link label="Database" />
        <Sidebar.Link label="Social" />
        <Sidebar.Link label="Enterprise" />
        <Sidebar.Link label="Passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" />
      <Sidebar.Link icon="rules" label="Rules" />
    </Sidebar>
  </StyledExample>
))

storiesOf('Sidebar', module).add('open group', () => (
  <StyledExample>
    <Sidebar>
      <Sidebar.Link icon="dashboard" label="Dashboard" />
      <Sidebar.Link icon="clients" label="Applications" />
      <Sidebar.Link icon="apis" label="APIs" />
      <Sidebar.Link icon="sso-integrations" label="SSO Integrations" />
      <Sidebar.LinkGroup icon="connections" label="Connections" defaultOpen>
        <Sidebar.Link label="Database" />
        <Sidebar.Link label="Social" />
        <Sidebar.Link label="Enterprise" />
        <Sidebar.Link label="Passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" />
      <Sidebar.Link icon="rules" label="Rules" />
    </Sidebar>
  </StyledExample>
))

storiesOf('Sidebar', module).add('selected sub-item', () => (
  <StyledExample>
    <Sidebar>
      <Sidebar.Link icon="dashboard" label="Dashboard" />
      <Sidebar.Link icon="clients" label="Applications" />
      <Sidebar.Link icon="apis" label="APIs" />
      <Sidebar.Link icon="sso-integrations" label="SSO Integrations" />
      <Sidebar.LinkGroup icon="connections" label="Connections">
        <Sidebar.Link label="Database" />
        <Sidebar.Link label="Social" selected={true} />
        <Sidebar.Link label="Enterprise" />
        <Sidebar.Link label="Passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" />
      <Sidebar.Link icon="rules" label="Rules" />
    </Sidebar>
  </StyledExample>
))
