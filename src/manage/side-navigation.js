import React from 'react'

import { Dummy as Sidebar } from './dummy-components'

const items = [
  { icon: 'dashboard', label: 'dashboard', url: '/dashboard' },
  { icon: 'clients', label: 'Clients', url: '/clients' },
  { icon: 'api', label: 'APIs', url: '/apis' },
  { icon: 'sso', label: 'SSO Integrations', url: '/externalapps' },
  {
    icon: 'connections',
    label: 'Connections',
    children: [
      { label: 'Database', url: '/connections/database' },
      { label: 'Social', url: '/connections/social' },
      { label: 'Enterprise', url: '/connections/enterprise' },
      { label: 'Passwordless', url: '/connections/passwordless' }
    ]
  },
  { icon: 'users', label: 'Users', url: '/users' },
  { icon: 'rules', label: 'Rules', url: '/rules' },
  { icon: 'hooks', label: 'Hooks', url: '/hooks' },
  { icon: 'scheduled', label: 'Scheduled jobs', url: '/Scheduled jobs' },
  { icon: 'multifactor', label: 'Multifactor Auth', url: '/guardian' },
  { icon: 'pages', label: 'Hosted Pages', url: '/login_page' },
  {
    icon: 'emails',
    label: 'Emails',
    children: [
      { label: 'Templates', url: '/emails' },
      { label: 'Provider', url: '/emails/provider' }
    ]
  },
  { icon: 'logs', label: 'Logs', url: '/logs' },
  { icon: 'anomaly', label: 'Anomaly Detection', url: '/anomaly' },
  { icon: 'extensions', label: 'Extensions', url: '/extensions' },
  { icon: 'support', label: 'Get Support', url: 'https://support.auth0.com', target: 'blank' }
]

export default () => <Sidebar items={items} />
