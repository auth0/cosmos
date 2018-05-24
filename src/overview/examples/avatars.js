import React from 'react'

import Example from '../ov-components/example'
import { Avatar, Stack } from '@auth0/cosmos'

const Avatars = () => (
  <Example title="Avatar" align="center">
    <Stack>
      <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" title="Title" />
      <Avatar
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <Stack>
      <Avatar icon="settings" />
      <Avatar icon="settings" title="Title" />
      <Avatar icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
  </Example>
)

export default Avatars
