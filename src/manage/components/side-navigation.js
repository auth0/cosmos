import React from 'react'

import { Sidebar } from '@auth0/cosmos'

const SideNavigation = () => (
  <div
    style={{
      top: '110px',
      width: '160px',
      position: 'fixed'
    }}
  >
    <Sidebar>
      <Sidebar.Link icon="arrow-right" label="Getting started" url="/manage/welcome" />
      <Sidebar.Link icon="dashboard" label="Dashboard" url="/manage" />
      <Sidebar.Link icon="clients" label="Clients" url="/manage/clients" />
      <Sidebar.Link icon="apis" label="APIs" url="/manage/apis" />
      <Sidebar.Link
        icon="sso-integrations"
        label="SSO Integrations"
        url="/manage/sso-integrations"
      />
      <Sidebar.LinkGroup icon="connections" label="Connections">
        <Sidebar.Link label="Database" url="/manage/connections/database" />
        <Sidebar.Link label="Social" url="/manage/connections/social" />
        <Sidebar.Link label="Enterprise" url="/manage/connections/enterprise" />
        <Sidebar.Link label="Passwordless" url="/manage/connections/passwordless" />
      </Sidebar.LinkGroup>
      <Sidebar.Link icon="users" label="Users" url="/manage/users" />
      <Sidebar.Link icon="rules" label="Rules" url="/manage/rules" />
      <Sidebar.Link icon="hooks" label="Hooks" url="/manage/hooks" />
      <Sidebar.Link icon="multifactor" label="Multifactor Auth" url="/manage/guardian" />
      <Sidebar.Link icon="hosted-pages" label="Hosted Pages" url="/manage/login_page" />
      <Sidebar.LinkGroup icon="emails" label="Emails">
        <Sidebar.Link label="Templates" url="/manage/emails" />
        <Sidebar.Link label="Provider" url="/manage/emails/provider" />
      </Sidebar.LinkGroup>

      <Sidebar.Link icon="logs" label="Logs" url="/manage/logs" />
      <Sidebar.Link icon="anomaly-detection" label="Anomaly Detection" url="/manage/anomaly" />
      <Sidebar.Link icon="extensions" label="Extensions" url="/manage/extensions" />
    </Sidebar>
  </div>
)

export default SideNavigation
