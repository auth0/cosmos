import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Avatar } from '@auth0/cosmos'

storiesOf('Avatar').add('with images', () => (
  <Example title="Images">
    <Stack>
      <Avatar size="xsmall" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar size="small" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar size="medium" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar size="large" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar size="xlarge" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
      <Avatar size="xxlarge" image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
    </Stack>
  </Example>
))

storiesOf('Avatar').add('with icons', () => (
  <Example title="Icons">
    <Stack>
      <Avatar size="xsmall" icon="settings" />
      <Avatar size="small" icon="settings" />
      <Avatar size="medium" icon="settings" />
      <Avatar size="large" icon="settings" />
      <Avatar size="xlarge" icon="settings" />
      <Avatar size="xxlarge" icon="settings" />
    </Stack>
  </Example>
))
