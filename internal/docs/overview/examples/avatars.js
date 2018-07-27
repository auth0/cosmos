import React from 'react'

import Example from '../components/example'
import { Avatar, Stack } from '@auth0/cosmos'

const Avatars = () => (
  <Example title="Avatars">
    <Stack>
      <Avatar
        type="user"
        size="xsmall"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
      <Avatar
        type="user"
        size="small"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
      <Avatar
        type="user"
        size="medium"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
      <Avatar
        type="user"
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
      <Avatar
        type="user"
        size="xlarge"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
      <Avatar
        type="user"
        size="xxlarge"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      />
    </Stack>
    <br />
    <Stack>
      <Avatar type="resource" size="xsmall" icon="settings" />
      <Avatar type="resource" size="small" icon="settings" />
      <Avatar type="resource" size="medium" icon="settings" />
      <Avatar type="resource" size="large" icon="settings" />
      <Avatar type="resource" size="xlarge" icon="settings" />
      <Avatar type="resource" size="xxlarge" icon="settings" />
    </Stack>
  </Example>
)

export default Avatars
