import * as React from 'react'
import { Sidebar } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Sidebar id="custom-id">
        <Sidebar.Link
          id="custom-id"
          icon="sso-integrations"
          label="SSO Integrations"
          url="/manage/sso-integrations"
        />
        <Sidebar.LinkGroup id="custom-id" icon="connections" label="Connections">
          <Sidebar.Link label="Database" url="/manage/connections/database" />
          <Sidebar.Link label="Social" url="/manage/connections/social" />
        </Sidebar.LinkGroup>
        <Sidebar.Link icon="users" label="Users" url="/manage/users" />
      </Sidebar>
    )
  }
}

export default Fixture
