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
            icon="dashboard"
            label="Dashboard"
            url="/manage"
            selected={this.isSelected('/manage')}
          />
          <Sidebar.Link
            icon="clients"
            label="Clients"
            url="/manage/clients"
            selected={this.isSelected('/manage/clients')}
          />
          <Sidebar.Link
            icon="apis"
            label="APIs"
            url="/manage/apis"
            selected={this.isSelected('/manage/apis')}
          />
          <Sidebar.Link
            icon="sso-integrations"
            label="SSO Integrations"
            url="/manage/sso-integration"
            selected={this.isSelected('/manage/sso-integration')}
          />
          <Sidebar.LinkGroup icon="connections" label="Connections">
            <Sidebar.Link
              label="Database"
              url="/manage/connections/database"
              selected={this.isSelected('/manage/connections/database')}
            />
            <Sidebar.Link
              label="Social"
              url="/manage/connections/social"
              selected={this.isSelected('/manage/connections/social')}
            />
            <Sidebar.Link
              label="Enterprise"
              url="/manage/connections/enterprise"
              selected={this.isSelected('/manage/connections/enterprise')}
            />
            <Sidebar.Link
              label="Passwordless"
              url="/manage/connections/passwordless"
              selected={this.isSelected('/manage/connections/passwordless')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link
            icon="users"
            label="Users"
            url="/manage/users"
            selected={this.isSelected('/manage/users')}
          />
          <Sidebar.Link
            icon="rules"
            label="Rules"
            url="/manage/rules"
            selected={this.isSelected('/manage/rules')}
          />
          <Sidebar.Link
            icon="hooks"
            label="Hooks"
            url="/manage/hooks"
            selected={this.isSelected('/manage/hooks')}
          />
          <Sidebar.Link
            icon="multifactor"
            label="Multifactor Auth"
            url="/manage/guardian"
            selected={this.isSelected('/manage/guardian')}
          />
          <Sidebar.Link
            icon="hosted-pages"
            label="Hosted Pages"
            url="/manage/login_page"
            selected={this.isSelected('/manage/login_page')}
          />
          <Sidebar.LinkGroup icon="emails" label="Emails">
            <Sidebar.Link
              label="Templates"
              url="/manage/emails"
              selected={this.isSelected('/manage/emails')}
            />
            <Sidebar.Link
              label="Provider"
              url="/manage/emails/provider"
              selected={this.isSelected('/manage/emails/provider')}
            />
          </Sidebar.LinkGroup>
          <Sidebar.Link
            icon="logs"
            label="Logs"
            url="/manage/logs"
            selected={this.isSelected('/manage/logs')}
          />
          <Sidebar.Link
            icon="anomaly-detection"
            label="Anomaly Detection"
            url="/manage/anomaly"
            selected={this.isSelected('/manage/anomaly')}
          />
          <Sidebar.Link
            icon="extensions"
            label="Extensions"
            url="/manage/extensions"
            selected={this.isSelected('/manage/extensions')}
          />
        </Sidebar>
      </div>
    )
  }
}

export default withRouter(SideNavigation)
