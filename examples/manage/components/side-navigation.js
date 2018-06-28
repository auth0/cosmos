import React from 'react'
import { withRouter } from 'react-router-dom'
import { Sidebar } from '@auth0/cosmos'

class SideNavigation extends React.Component {
  isSelected = url => this.props.location.pathname === url
  render() {
    return (
      <div
        style={{
          top: '110px',
          width: '160px',
          position: 'fixed'
        }}
      >
        <Sidebar>
          <Sidebar.Link
            icon="arrow-right"
            label="Getting started"
            url="#/welcome"
            selected={this.isSelected('/welcome')}
          />
          <Sidebar.Link
            icon="dashboard"
            label="Dashboard"
            url="#/"
            selected={this.isSelected('/')}
          />
          <Sidebar.Link
            icon="clients"
            label="Clients"
            url="#/clients"
            selected={this.isSelected('/clients')}
          />
          <Sidebar.Link icon="apis" label="APIs" url="#/apis" selected={this.isSelected('/apis')} />
          <Sidebar.Link
            icon="sso-integrations"
            label="SSO Integrations"
            url="#/sso-integration"
            selected={this.isSelected('/sso-integration')}
          />
          <Sidebar.LinkGroup icon="connections" label="Connections">
            <Sidebar.Link
              label="Database"
              url="#/connections/database"
              selected={this.isSelected('/connections/database')}
            />
            <Sidebar.Link
              label="Social"
              url="#/connections/social"
              selected={this.isSelected('/connections/social')}
            />
            <Sidebar.Link
              label="Enterprise"
              url="#/connections/enterprise"
              selected={this.isSelected('/connections/enterprise')}
            />
            <Sidebar.Link
              label="Passwordless"
              url="#/connections/passwordless"
              selected={this.isSelected('/connections/passwordless')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link
            icon="users"
            label="Users"
            url="#/users"
            selected={this.isSelected('/users')}
          />
          <Sidebar.Link
            icon="rules"
            label="Rules"
            url="#/rules"
            selected={this.isSelected('/rules')}
          />
          <Sidebar.Link
            icon="hooks"
            label="Hooks"
            url="#/hooks"
            selected={this.isSelected('/hooks')}
          />
          <Sidebar.Link
            icon="multifactor"
            label="Multifactor Auth"
            url="#/guardian"
            selected={this.isSelected('/guardian')}
          />
          <Sidebar.Link
            icon="hosted-pages"
            label="Hosted Pages"
            url="#/login_page"
            selected={this.isSelected('/login_page')}
          />
          <Sidebar.LinkGroup icon="emails" label="Emails">
            <Sidebar.Link label="Templates" url="#/emails" selected={this.isSelected('/emails')} />
            <Sidebar.Link
              label="Provider"
              url="#/emails/provider"
              selected={this.isSelected('/emails/provider')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link icon="logs" label="Logs" url="#/logs" selected={this.isSelected('/logs')} />
          <Sidebar.Link
            icon="anomaly-detection"
            label="Anomaly Detection"
            url="#/anomaly"
            selected={this.isSelected('/anomaly')}
          />
          <Sidebar.Link
            icon="extensions"
            label="Extensions"
            url="#/extensions"
            selected={this.isSelected('/extensions')}
          />
        </Sidebar>
      </div>
    )
  }
}

export default withRouter(SideNavigation)
