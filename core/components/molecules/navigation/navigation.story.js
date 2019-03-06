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
        <Navigation.Item
          onClick={() => this.select('dashboard')}
          selected={selected === 'dashboard'}
        >
          <Icon name="dashboard" />
          <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
        </Navigation.Item>
        <Navigation.Item onClick={() => this.select('clients')} selected={selected === 'clients'}>
          <Icon name="clients" />
          <Navigation.Item.Text>Applications</Navigation.Item.Text>
        </Navigation.Item>
        <Navigation.Item onClick={() => this.select('apis')} selected={selected === 'apis'}>
          <Icon name="apis" />
          <Navigation.Item.Text>APIs</Navigation.Item.Text>
        </Navigation.Item>
        <Navigation.Item onClick={() => this.select('sso')} selected={selected === 'sso'}>
          <Icon name="sso-integrations" />
          <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
        </Navigation.Item>

        <Navigation.Item>
          <Icon name="connections" />
          <Navigation.Item.Text>Connections</Navigation.Item.Text>

          <Navigation.Subnav>
            <Navigation.Item
              onClick={() => this.select('database')}
              selected={selected === 'database'}
            >
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Database</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item onClick={() => this.select('social')} selected={selected === 'social'}>
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Social</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item
              onClick={() => this.select('enterprise')}
              selected={selected === 'enterprise'}
            >
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item
              onClick={() => this.select('passwordless')}
              selected={selected === 'passwordless'}
            >
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
            </Navigation.Item>
          </Navigation.Subnav>
        </Navigation.Item>

        <Navigation.Item onClick={() => this.select('users')} selected={selected === 'users'}>
          <Icon name="users" />
          <Navigation.Item.Text>Users</Navigation.Item.Text>
        </Navigation.Item>
        <Navigation.Item onClick={() => this.select('rules')} selected={selected === 'rules'}>
          <Icon name="rules" />
          <Navigation.Item.Text>Rules</Navigation.Item.Text>
        </Navigation.Item>
      </Navigation>
    )
  }
}

storiesOf('Navigation', module).add('default', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Item url="http://google.com/">
        <Icon name="dashboard" />
        <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="clients" />
        <Navigation.Item.Text>Applications</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="apis" />
        <Navigation.Item.Text>APIs</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="sso-integrations" />
        <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="connections" />
        <Navigation.Item.Text>Connections</Navigation.Item.Text>

        <Navigation.Subnav>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Database</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Social</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Subnav>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="users" />
        <Navigation.Item.Text>Users</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="rules" />
        <Navigation.Item.Text>Rules</Navigation.Item.Text>
      </Navigation.Item>
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
      <Navigation.Item selected>
        <Icon name="dashboard" />
        <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="clients" />
        <Navigation.Item.Text>Applications</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="apis" />
        <Navigation.Item.Text>APIs</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="sso-integrations" />
        <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="connections" />
        <Navigation.Item.Text>Connections</Navigation.Item.Text>

        <Navigation.Subnav>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Database</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Social</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Subnav>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="users" />
        <Navigation.Item.Text>Users</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="rules" />
        <Navigation.Item.Text>Rules</Navigation.Item.Text>
      </Navigation.Item>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('open group', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Item>
        <Icon name="dashboard" />
        <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="clients" />
        <Navigation.Item.Text>Applications</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="apis" />
        <Navigation.Item.Text>APIs</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="sso-integrations" />
        <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
      </Navigation.Item>

      <Navigation.Item defaultOpen>
        <Icon name="connections" />
        <Navigation.Item.Text>Connections</Navigation.Item.Text>

        <Navigation.Subnav>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Database</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Social</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Subnav>
      </Navigation.Item>

      <Navigation.Item>
        <Icon name="users" />
        <Navigation.Item.Text>Users</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="rules" />
        <Navigation.Item.Text>Rules</Navigation.Item.Text>
      </Navigation.Item>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('selected sub-item', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Item>
        <Icon name="dashboard" />
        <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="clients" />
        <Navigation.Item.Text>Applications</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="apis" />
        <Navigation.Item.Text>APIs</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="sso-integrations" />
        <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
      </Navigation.Item>

      <Navigation.Item defaultOpen>
        <Icon name="connections" />
        <Navigation.Item.Text>Connections</Navigation.Item.Text>

        <Navigation.Subnav>
          <Navigation.Item selected>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Database</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Social</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item>
            <Icon name="arrow-right" />
            <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Subnav>
      </Navigation.Item>

      <Navigation.Item>
        <Icon name="users" />
        <Navigation.Item.Text>Users</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="rules" />
        <Navigation.Item.Text>Rules</Navigation.Item.Text>
      </Navigation.Item>
    </Navigation>
  </StyledExample>
))

storiesOf('Navigation', module).add('groups and postfix', () => (
  <StyledExample>
    <Navigation>
      <Navigation.Group title="Group 1">
        <Navigation.Item>
          <Icon name="dashboard" />
          <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
        </Navigation.Item>

        <Navigation.Item defaultOpen>
          <Icon name="logs" />
          <Navigation.Item.Text>Submenu</Navigation.Item.Text>
          <Navigation.Item.Postfix>
            <Tooltip content="this is a tooltip test">
              <Label>new</Label>
            </Tooltip>
          </Navigation.Item.Postfix>

          <Navigation.Subnav>
            <Navigation.Item selected>
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Item 1</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item>
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Item 2</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item>
              <Icon name="arrow-right" />
              <Navigation.Item.Text>Item 3</Navigation.Item.Text>
            </Navigation.Item>
          </Navigation.Subnav>
        </Navigation.Item>
      </Navigation.Group>
      <Navigation.Group title="Group 2">
        <Navigation.Item icon="sso-integrations" label="SSO Integrations">
          <Icon name="sso-integrations" />
          <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
        </Navigation.Item>
        <Navigation.Item>
          <Icon name="connections" />
          <Navigation.Item.Text>Connections</Navigation.Item.Text>
          <Navigation.Subnav icon="connections" label="Connections">
            <Navigation.Item>
              <Navigation.Item.Text>Database</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Item.Text>Social</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
            </Navigation.Item>
            <Navigation.Item>
              <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
            </Navigation.Item>
          </Navigation.Subnav>
        </Navigation.Item>
        <Navigation.Item icon="users" label="Users" />
        <Navigation.Item icon="rules" label="Rules" />
      </Navigation.Group>
    </Navigation>
  </StyledExample>
))
