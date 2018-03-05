import React from 'react'

import { Sidebar } from 'auth0-cosmos'

export default () => (
  <div
    style={{
      top: '110px',
      width: '160px',
      position: 'fixed'
    }}
  >
    <Sidebar>
      <Sidebar.Link icon="dashboard" label="Dashboard" url="/dashboard" />
      <Sidebar.Link icon="clients" label="Clients" url="/clients" selected />
      <Sidebar.Link icon="apis" label="APIs" url="/apis" />
      <Sidebar.Link icon="sso-integrations" label="SSO Integrations" url="/externalapps" />
      <Sidebar.LinkGroup icon="connections" label="Connections">
        <Sidebar.Link label="Database" url="/connections/database" />
        <Sidebar.Link label="Social" url="/connections/social" />
        <Sidebar.Link label="Enterprise" url="/connections/enterprise" />
        <Sidebar.Link label="Passwordless" url="/connections/passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" url="/users" />
      <Sidebar.Link icon="rules" label="Rules" url="/rules" />
      <Sidebar.Link icon="hooks" label="Hooks" url="/hooks" />
      <Sidebar.Link icon="multifactor" label="Multifactor Auth" url="/guardian" />
      <Sidebar.Link icon="hosted-pages" label="Hosted Pages" url="/login_page" />
      <Sidebar.LinkGroup icon="emails" label="Emails">
        <Sidebar.Link label="Templates" url="/emails" />
        <Sidebar.Link label="Provider" url="/emails/provider" />
      </Sidebar.LinkGroup>

      <Sidebar.Link icon="logs" label="Logs" url="/logs" />
      <Sidebar.Link icon="anomaly-detection" label="Anomaly Detection" url="/anomaly" />
      <Sidebar.Link icon="extensions" label="Extensions" url="/extensions" />
    </Sidebar>
  </div>
)
