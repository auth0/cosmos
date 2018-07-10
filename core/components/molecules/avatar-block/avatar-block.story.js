import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { AvatarBlock } from '@auth0/cosmos'

storiesOf('AvatarBlock').add('with images', () => (
  <Example title="Images">
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
))

storiesOf('AvatarBlock').add('with icons', () => (
  <Example title="Icons">
    <Stack>
      <AvatarBlock size="compact" icon="settings" title="Title" />
      <AvatarBlock size="compact" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock size="default" icon="settings" title="Title" />
      <AvatarBlock size="default" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
    <br />
    <Stack>
      <AvatarBlock size="large" icon="settings" title="Title" />
      <AvatarBlock size="large" icon="settings" title="Title" subtitle="Subtitle" />
    </Stack>
  </Example>
))
