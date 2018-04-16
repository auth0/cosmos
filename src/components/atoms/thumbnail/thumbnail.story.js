import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Thumbnail, Icon, Image } from '@auth0/cosmos'

storiesOf('Thumbnail').add('with icon', () => (
  <Example title="Thumbnail">
    <Stack>
      <Thumbnail source={<Icon name="settings" />} size="small" />
      <Thumbnail source={<Icon name="settings" />} size="medium" />
      <Thumbnail source={<Icon name="settings" />} size="large" />
    </Stack>
  </Example>
))

storiesOf('Thumbnail').add('with image', () => {
  const image =
    'https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-glyph-109d4c73c4.svg'

  return (
    <Example title="Thumbnail">
      <Stack>
        <Thumbnail source={<Image source={image} />} size="small" />
        <Thumbnail source={<Image source={image} />} size="medium" />
        <Thumbnail source={<Image source={image} />} size="large" />
      </Stack>
    </Example>
  )
})
