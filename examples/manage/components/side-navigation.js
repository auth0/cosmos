import React from 'react'

import { Sidebar } from '@auth0/cosmos'

class SideNavigation extends React.Component {
  isSelected = url => false
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
            icon="dashboard"
            label="Dashboard"
            url="#/"
            selected={this.isSelected('/manage')}
          />
          <Sidebar.Link
            icon="clients"
            label="Clients"
            url="#/clients"
            selected={this.isSelected('/manage/clients')}
          />
          <Sidebar.Link
            icon="apis"
            label="APIs"
            url="#/apis"
            selected={this.isSelected('/manage/apis')}
          />
          <Sidebar.Link
            icon="sso-integrations"
            label="SSO Integrations"
            url="#/sso-integration"
            selected={this.isSelected('/manage/sso-integration')}
          />
          <Sidebar.LinkGroup icon="connections" label="Connections">
            <Sidebar.Link
              label="Database"
              url="#/connections/database"
              selected={this.isSelected('/manage/connections/database')}
            />
            <Sidebar.Link
              label="Social"
              url="#/connections/social"
              selected={this.isSelected('/manage/connections/social')}
            />
            <Sidebar.Link
              label="Enterprise"
              url="#/connections/enterprise"
              selected={this.isSelected('/manage/connections/enterprise')}
            />
            <Sidebar.Link
              label="Passwordless"
              url="#/connections/passwordless"
              selected={this.isSelected('/manage/connections/passwordless')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link
            icon="users"
            label="Users"
            url="#/users"
            selected={this.isSelected('/manage/users')}
          />
          <Sidebar.Link
            icon="rules"
            label="Rules"
            url="#/rules"
            selected={this.isSelected('/manage/rules')}
          />
          <Sidebar.Link
            icon="hooks"
            label="Hooks"
            url="#/hooks"
            selected={this.isSelected('/manage/hooks')}
          />
          <Sidebar.Link
            icon="multifactor"
            label="Multifactor Auth"
            url="#/guardian"
            selected={this.isSelected('/manage/guardian')}
          />
          <Sidebar.Link
            icon="hosted-pages"
            label="Hosted Pages"
            url="#/login_page"
            selected={this.isSelected('/manage/login_page')}
          />
          <Sidebar.LinkGroup icon="emails" label="Emails">
            <Sidebar.Link
              label="Templates"
              url="#/emails"
              selected={this.isSelected('/manage/emails')}
            />
            <Sidebar.Link
              label="Provider"
              url="#/emails/provider"
              selected={this.isSelected('/manage/emails/provider')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link
            icon="logs"
            label="Logs"
            url="#/logs"
            selected={this.isSelected('/manage/logs')}
          />
          <Sidebar.Link
            icon="anomaly-detection"
            label="Anomaly Detection"
            url="#/anomaly"
            selected={this.isSelected('/manage/anomaly')}
          />
          <Sidebar.Link
            icon="extensions"
            label="Extensions"
            url="#/extensions"
            selected={this.isSelected('/manage/extensions')}
          />
        </Sidebar>
      </div>
    )
  }
}

export default SideNavigation
