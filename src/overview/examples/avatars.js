import React from 'react'

import Example from '../ov-components/example'
import { Avatar, Stack } from '@auth0/cosmos'

const AvatarsWithImages = () => (
  <Example title="Avatar (images)">
    <Stack>
      <Avatar size="small" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar
        size="small"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <Avatar
        size="small"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <Avatar size="medium" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar
        size="medium"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <Avatar
        size="medium"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
    <br />
    <Stack>
      <Avatar size="large" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
      />
      <Avatar
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
        title="Title"
        subtitle="Subtitle"
      />
    </Stack>
  </Example>
)

const AvatarsWithIcons = () => (
  <Example title="Avatar (icons)">
    <Stack>
      <Avatar size="small" icon="settings" />
      <Avatar size="small" icon="settings" title="Title" />
      <Avatar size="small" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
    <br />
    <Stack>
      <Avatar size="medium" icon="settings" />
      <Avatar size="medium" icon="settings" title="Title" />
      <Avatar size="medium" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
    <br />
    <Stack>
      <Avatar size="large" icon="settings" />
      <Avatar size="large" icon="settings" title="Title" />
      <Avatar size="large" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
  </Example>
)

export { AvatarsWithImages, AvatarsWithIcons }
