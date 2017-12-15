import React from 'react'

import {
  Dummy as TopNav,
  Dummy as Dropdown,
  Dummy as TenantCard,
  Dummy as UserCard
} from './dummy-components'

const openSalesModal = () => {}
const switchTenant = () => {}

const links = [
  { label: 'Help & Support', url: 'https://support.auth0.com', target: 'blank' },
  {
    label: 'Documentation',
    url: 'https://auth0.com/docs',
    target: 'blank',
    children: [
      {
        label: 'Authentication API',
        url: 'https://auth0.com/docs/api/authentication',
        target: 'blank'
      },
      {
        label: 'Management API',
        url: 'https://auth0.com/docs/api/management/v2',
        target: 'blank'
      }
    ]
  },
  {
    label: 'Talk to Sales',
    onClick: openSalesModal
  }
]

const DropdownComponent = () => (
  <Dropdown>
    <Dropdown.Link name="Switch tenant" icon="switch" onClick={switchTenant} isDisabled="true" />
    <Dropdown.Link name="Settings" icon="settings" url="" />
    <TenantCard name="siddharthkp" region="US" subscription="Free" />
    <Dropdown.Link name="Settings" icon="settings" url="" />
    <Dropdown.Devider />
    <UserCard
      name="Siddharth Kshetrapal"
      avatar_url="https://avatars0.githubusercontent.com/u/1863771?v=4"
    />
    <Dropdown.Link
      name="Subscription overview"
      icon="subscriptions"
      url="https://support.auth0.com/tenants"
    />
    <Dropdown.Devider />
    <Dropdown.Link name="Logout" icon="logout" url="/logout" />
  </Dropdown>
)

export default () => <TopNav links={links} DropdownComponent={DropdownComponent} />
