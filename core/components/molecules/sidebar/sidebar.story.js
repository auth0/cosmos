import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Sidebar, Icon } from '@auth0/cosmos'
import Label from '../../atoms/label'
import { Tooltip } from '../../components'

const StyledExample = styled(Example)`
  /* Temporal, until we fix sidebar styles */
  height: 500px;
`

class InteractiveExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selected: 'dashboard' }
    this.select = this.select.bind(this)
  }

  select(selected) {
    this.setState({ selected })
  }

  render() {
    const { selected } = this.state
    return (
      <Sidebar>
        <Sidebar.Link onClick={() => this.select('dashboard')} selected={selected === 'dashboard'}>
          <Icon name="dashboard" />
          <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link onClick={() => this.select('clients')} selected={selected === 'clients'}>
          <Icon name="clients" />
          <Sidebar.Link.Text>Applications</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link onClick={() => this.select('apis')} selected={selected === 'apis'}>
          <Icon name="apis" />
          <Sidebar.Link.Text>APIs</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link onClick={() => this.select('sso')} selected={selected === 'sso'}>
          <Icon name="sso-integrations" />
          <Sidebar.Link.Text>SSO Integrations</Sidebar.Link.Text>
        </Sidebar.Link>

        <Sidebar.Link>
          <Icon name="connections" />
          <Sidebar.Link.Text>Connectionns</Sidebar.Link.Text>

          <Sidebar.LinkGroup>
            <Sidebar.Link
              onClick={() => this.select('database')}
              selected={selected === 'database'}
            >
              <Sidebar.Link.Text>Database</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link onClick={() => this.select('social')} selected={selected === 'social'}>
              <Sidebar.Link.Text>Social</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link
              onClick={() => this.select('enterprise')}
              selected={selected === 'enterprise'}
            >
              <Sidebar.Link.Text>Enterprise</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link
              onClick={() => this.select('passwordless')}
              selected={selected === 'passwordless'}
            >
              <Sidebar.Link.Text>Passwordless</Sidebar.Link.Text>
            </Sidebar.Link>
          </Sidebar.LinkGroup>
        </Sidebar.Link>

        <Sidebar.Link onClick={() => this.select('users')} selected={selected === 'users'}>
          <Icon name="users" />
          <Sidebar.Link.Text>Users</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link onClick={() => this.select('rules')} selected={selected === 'rules'}>
          <Icon name="rules" />
          <Sidebar.Link.Text>Rules</Sidebar.Link.Text>
        </Sidebar.Link>
      </Sidebar>
    )
  }
}

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

storiesOf('Sidebar', module).add('interactive example', () => (
  <StyledExample>
    <InteractiveExample />
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

storiesOf('Sidebar', module).add('interactive example', () => (
  <StyledExample>
    <InteractiveExample />
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

storiesOf('Sidebar', module).add('api nueva con todo', () => (
  <StyledExample>
    <Sidebar>
      <Sidebar.Group title="grupo 1">
        <Sidebar.Link>
          <Icon name="dashboard" />
          <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
        </Sidebar.Link>

        <Sidebar.Link defaultOpen>
          <Icon name="arrow-right" />
          <Sidebar.Link.Text>Submenu</Sidebar.Link.Text>
          <Sidebar.Link.Postfix>
            <Tooltip content="this is a tooltip test">
              <Label>new</Label>
            </Tooltip>
          </Sidebar.Link.Postfix>

          <Sidebar.LinkGroup>
            <Sidebar.Link selected>
              <Icon name="dashboard" />
              <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link>
              <Icon name="dashboard" />
              <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link>
              <Icon name="dashboard" />
              <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
            </Sidebar.Link>
          </Sidebar.LinkGroup>
        </Sidebar.Link>
      </Sidebar.Group>
      <Sidebar.Group title="grupo 2">
        <Sidebar.Link icon="sso-integrations" label="SSO Integrations">
          <Icon name="sso-integrations" />
          <Sidebar.Link.Text>SSO Integrations</Sidebar.Link.Text>
        </Sidebar.Link>
        <Sidebar.Link>
          <Icon name="connections" />
          <Sidebar.Link.Text>Connections</Sidebar.Link.Text>
          <Sidebar.LinkGroup icon="connections" label="Connections">
            <Sidebar.Link>
              <Sidebar.Link.Text>Database</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link>
              <Sidebar.Link.Text>Social</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link>
              <Sidebar.Link.Text>Enterprise</Sidebar.Link.Text>
            </Sidebar.Link>
            <Sidebar.Link>
              <Sidebar.Link.Text>Passwordless</Sidebar.Link.Text>
            </Sidebar.Link>
          </Sidebar.LinkGroup>
        </Sidebar.Link>
        <Sidebar.Link icon="users" label="Users" />
        <Sidebar.Link icon="rules" label="Rules" />
      </Sidebar.Group>
    </Sidebar>
  </StyledExample>
))
