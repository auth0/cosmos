import React from 'react'

import Example from '../ov-components/example'
import { Label, Stack } from '@auth0/cosmos'

const Labels = () => (
  <Example title="Labels">
    <Stack>
      <Label appearance="default">Default</Label>
      <Label appearance="information">Information</Label>
      <Label appearance="success">Success</Label>
      <Label appearance="warning">Warning</Label>
      <Label appearance="danger">Danger</Label>
    </Stack>
  </Example>
)

export default Labels
