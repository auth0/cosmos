import React from 'react'

import Example from '../ov-components/example'
import { Badge, Stack } from '@auth0/cosmos'

const Badges = () => (
  <Example title="Badges">
    <Stack>
      <Badge appearance="default">123</Badge>
      <Badge appearance="information">99</Badge>
      <Badge appearance="success">345</Badge>
      <Badge appearance="warning">6</Badge>
      <Badge appearance="danger">55</Badge>
    </Stack>
  </Example>
)

export default Badges
