import React from 'react'

import Example from '../ov-components/example'
import { AvatarBlock, Stack } from '@auth0/cosmos'

const AvatarBlocks = () => (
  <Example title="Avatar Blocks">
    <Stack>
      <AvatarBlock
        size="compact"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
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
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        size="default"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <AvatarBlock
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
  </Example>
)

export default AvatarBlocks
