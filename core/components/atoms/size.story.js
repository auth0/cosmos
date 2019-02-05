import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import {
  Well,
  Avatar,
  Button,
  Heading,
  Icon,
  Logo,
  Spinner,
  TextInput,
  GalleryLayout,
  AvatarBlock
} from '@auth0/cosmos'

const componentConfig = [
  {
    name: 'Avatar',
    sizes: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'],
    fixture: size => (
      <span>
        <Avatar size={size} />
        {size}
      </span>
    )
  },
  {
    name: 'Button',
    sizes: ['small', 'compressed', 'default', 'large'],
    fixture: size => <Button size={size}>Clicky {size}</Button>
  },
  {
    name: 'Heading',
    sizes: [4, 3, 2, 1],
    fixture: size => <Heading size={size}>Hello {size}</Heading>
  },
  {
    name: 'Icon',
    sizes: [5, 20, 50],
    fixture: size => (
      <span>
        <Icon name="delete" size={size} />
        {size}
      </span>
    )
  },
  {
    name: 'Logo',
    sizes: ['tiny', 'small', 'default'],
    fixture: size => (
      <span>
        <Logo size={size} />
        {size}
      </span>
    )
  },
  {
    name: 'Spinner',
    sizes: ['small', 'medium', 'large'],
    fixture: size => (
      <span>
        <Spinner size={size} />
        {size}
      </span>
    )
  },
  {
    name: 'TextInput',
    sizes: ['small', 'compressed', 'default', 'large'],
    fixture: size => <TextInput size={size} defaultValue={size} />
  },
  {
    name: 'GalleryLayout',
    sizes: ['small', 'medium', 'large'],
    fixture: size => (
      <GalleryLayout size={size}>
        <Well>{size}</Well>
        <Well>{size}</Well>
      </GalleryLayout>
    )
  },
  {
    name: 'AvatarBlock',
    sizes: ['compact', 'default', 'large'],
    fixture: size => <AvatarBlock title={size} size={size} />
  }
]

storiesOf('Size', module).add('sizes', () => (
  <Example>
    {componentConfig.map(function(config) {
      return (
        <Stack style={{ marginBottom: 50 }}>
          {config.sizes.map(function(size) {
            if (config.fixture) return config.fixture(size)
          })}
        </Stack>
      )
    })}
  </Example>
))
