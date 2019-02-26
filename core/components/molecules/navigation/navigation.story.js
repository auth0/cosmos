import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Navigation, Icon } from '@auth0/cosmos'
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
      <Navigation>
        <Navigation.Link
          onClick={() => this.select('dashboard')}
          selected={selected === 'dashboard'}
        >
          <Icon name="dashboard" />
          <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
        </Navigation.Link>
        <Navigation.Link onClick={() => this.select('clients')} selected={selected === 'clients'}>
          <Icon name="clients" />
          <Navigation.Link.Text>Applications</Navigation.Link.Text>
        </Navigation.Link>
        <Navigation.Link onClick={() => this.select('apis')} selected={selected === 'apis'}>
          <Icon name="apis" />
          <Navigation.Link.Text>APIs</Navigation.Link.Text>
        </Navigation.Link>
        <Navigation.Link onClick={() => this.select('sso')} selected={selected === 'sso'}>
          <Icon name="sso-integrations" />
          <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
        </Navigation.Link>

        <Navigation.Link>
          <Icon name="connections" />
          <Navigation.Link.Text>Connections</Navigation.Link.Text>

          <Navigation.LinkGroup>
            <Navigation.Link
              onClick={() => this.select('database')}
              selected={selected === 'database'}
            >
              <Icon name="arrow-right" />
              <Navigation.Link.Text>Database</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link onClick={() => this.select('social')} selected={selected === 'social'}>
              <Icon name="arrow-right" />
              <Navigation.Link.Text>Social</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link
              onClick={() => this.select('enterprise')}
              selected={selected === 'enterprise'}
            >
              <Icon name="arrow-right" />
              <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link
              onClick={() => this.select('passwordless')}
              selected={selected === 'passwordless'}
            >
              <Icon name="arrow-right" />
              <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
            </Navigation.Link>
          </Navigation.LinkGroup>
        </Navigation.Link>

        <Navigation.Link onClick={() => this.select('users')} selected={selected === 'users'}>
          <Icon name="users" />
          <Navigation.Link.Text>Users</Navigation.Link.Text>
        </Navigation.Link>
        <Navigation.Link onClick={() => this.select('rules')} selected={selected === 'rules'}>
          <Icon name="rules" />
          <Navigation.Link.Text>Rules</Navigation.Link.Text>
        </Navigation.Link>
      </Navigation>
    )
  }
}

storiesOf('Navigation', module).add('default', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Link>
        <Icon name="dashboard" />
        <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="clients" />
        <Navigation.Link.Text>Applications</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="apis" />
        <Navigation.Link.Text>APIs</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="sso-integrations" />
        <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="connections" />
        <Navigation.Link.Text>Connections</Navigation.Link.Text>

        <Navigation.LinkGroup>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Database</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Social</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
          </Navigation.Link>
        </Navigation.LinkGroup>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="users" />
        <Navigation.Link.Text>Users</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="rules" />
        <Navigation.Link.Text>Rules</Navigation.Link.Text>
      </Navigation.Link>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('interactive example', () => (
  <StyledExample>
    <InteractiveExample />
  </StyledExample>
))

storiesOf('Navigation', module).add('selected item', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Link selected>
        <Icon name="dashboard" />
        <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="clients" />
        <Navigation.Link.Text>Applications</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="apis" />
        <Navigation.Link.Text>APIs</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="sso-integrations" />
        <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="connections" />
        <Navigation.Link.Text>Connections</Navigation.Link.Text>
        <Navigation.LinkGroup>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Database</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Social</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
          </Navigation.Link>
        </Navigation.LinkGroup>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="users" />
        <Navigation.Link.Text>Users</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="rules" />
        <Navigation.Link.Text>Rules</Navigation.Link.Text>
      </Navigation.Link>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('open group', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Link>
        <Icon name="dashboard" />
        <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="clients" />
        <Navigation.Link.Text>Applications</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="apis" />
        <Navigation.Link.Text>APIs</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="sso-integrations" />
        <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
      </Navigation.Link>

      <Navigation.Link defaultOpen>
        <Icon name="connections" />
        <Navigation.Link.Text>Connections</Navigation.Link.Text>

        <Navigation.LinkGroup>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Database</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Social</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
          </Navigation.Link>
        </Navigation.LinkGroup>
      </Navigation.Link>

      <Navigation.Link>
        <Icon name="users" />
        <Navigation.Link.Text>Users</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="rules" />
        <Navigation.Link.Text>Rules</Navigation.Link.Text>
      </Navigation.Link>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('selected sub-item', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Link>
        <Icon name="dashboard" />
        <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="clients" />
        <Navigation.Link.Text>Applications</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="apis" />
        <Navigation.Link.Text>APIs</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="sso-integrations" />
        <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
      </Navigation.Link>

      <Navigation.Link defaultOpen>
        <Icon name="connections" />
        <Navigation.Link.Text>Connections</Navigation.Link.Text>

        <Navigation.LinkGroup>
          <Navigation.Link selected>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Database</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Social</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
          </Navigation.Link>
          <Navigation.Link>
            <Icon name="arrow-right" />
            <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
          </Navigation.Link>
        </Navigation.LinkGroup>
      </Navigation.Link>

      <Navigation.Link>
        <Icon name="users" />
        <Navigation.Link.Text>Users</Navigation.Link.Text>
      </Navigation.Link>
      <Navigation.Link>
        <Icon name="rules" />
        <Navigation.Link.Text>Rules</Navigation.Link.Text>
      </Navigation.Link>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('groups and postfix', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Group title="grupo 1">
        <Navigation.Link>
          <Icon name="dashboard" />
          <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
        </Navigation.Link>

        <Navigation.Link defaultOpen>
          <Icon name="arrow-right" />
          <Navigation.Link.Text>Submenu</Navigation.Link.Text>
          <Navigation.Link.Postfix>
            <Tooltip content="this is a tooltip test">
              <Label>new</Label>
            </Tooltip>
          </Navigation.Link.Postfix>

          <Navigation.LinkGroup>
            <Navigation.Link selected>
              <Icon name="dashboard" />
              <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link>
              <Icon name="dashboard" />
              <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link>
              <Icon name="dashboard" />
              <Navigation.Link.Text>Dashboard</Navigation.Link.Text>
            </Navigation.Link>
          </Navigation.LinkGroup>
        </Navigation.Link>
      </Navigation.Group>
      <Navigation.Group title="grupo 2">
        <Navigation.Link icon="sso-integrations" label="SSO Integrations">
          <Icon name="sso-integrations" />
          <Navigation.Link.Text>SSO Integrations</Navigation.Link.Text>
        </Navigation.Link>
        <Navigation.Link>
          <Icon name="connections" />
          <Navigation.Link.Text>Connections</Navigation.Link.Text>
          <Navigation.LinkGroup icon="connections" label="Connections">
            <Navigation.Link>
              <Navigation.Link.Text>Database</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link>
              <Navigation.Link.Text>Social</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link>
              <Navigation.Link.Text>Enterprise</Navigation.Link.Text>
            </Navigation.Link>
            <Navigation.Link>
              <Navigation.Link.Text>Passwordless</Navigation.Link.Text>
            </Navigation.Link>
          </Navigation.LinkGroup>
        </Navigation.Link>
        <Navigation.Link icon="users" label="Users" />
        <Navigation.Link icon="rules" label="Rules" />
      </Navigation.Group>
    </Navigation>
  </StyledExample>
))
