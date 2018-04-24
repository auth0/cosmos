import React from 'react'

import Example from '../ov-components/example'
import { Icon, Stack } from '@auth0/cosmos'

const Icons = () => (
  <Example title="Icons">
    <Stack>
      <Icon name="analytics" />
      <Icon name="apis" />
      <Icon name="clients" />
      <Icon name="connections" />
      <Icon name="dashboard" />
      <Icon name="delete" />
      <Icon name="users" />
    </Stack>
  </Example>
)

export default Icons
