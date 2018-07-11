import React from 'react'

import Example from '../components/example'
import { AvatarBlock, Stack } from '@auth0/cosmos'

const AvatarBlocks = () => (
  <Example title="Avatar Blocks">
    <Stack>
      <AvatarBlock
        type="user"
        size="compact"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        type="user"
        size="compact"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock
        size="default"
        type="user"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        size="default"
        type="user"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock
        size="large"
        type="resource"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        size="large"
        type="resource"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
  </Example>
)

export default AvatarBlocks
