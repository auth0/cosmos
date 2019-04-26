import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { Example, Stack, IconStoryBox } from '@auth0/cosmos/_helpers/story-helpers'

import { Icon } from '../../'
import { spacing } from '@auth0/cosmos/tokens'
import iconsRaw from './icons.json'

const icons = iconsRaw.icons

storiesOf('Icon', module).add('default', () => (
  <Example title="Icons">
    <Stack>
      <Icon name="analytics" />
      <Icon name="anomaly-detection" />
      <Icon name="apis" />
      <Icon name="arrow-left" />
      <Icon name="arrow-right" />
      <Icon name="authorization" />
      <Icon name="check" />
    </Stack>
  </Example>
))

storiesOf('Icon', module).add('size', () => (
  <Example title="Size">
    <Stack>
      <Icon name="analytics" size={spacing.xsmall} />
      <Icon name="analytics" size={spacing.small} />
      <Icon name="analytics" size={spacing.medium} />
      <Icon name="analytics" size={spacing.large} />
      <Icon name="analytics" size={spacing.xlarge} />
      <Icon name="analytics" size={spacing.xxlarge} />
    </Stack>
  </Example>
))

storiesOf('Icon', module).add('color', () => (
  <Example title="Size">
    <Stack>
      <Icon name="analytics" color="white" />
      <Icon name="analytics" color="black" />
      <Icon name="analytics" color="gray" />
      <Icon name="analytics" color="blue" />
      <Icon name="analytics" color="orange" />
      <Icon name="analytics" color="green" />
      <Icon name="analytics" color="red" />
    </Stack>
  </Example>
))

storiesOf('Icon', module).add('dark-background', () => (
  <Example title="Dark background" background="dark">
    <Stack>
      <Icon name="analytics" color="white" />
      <Icon name="analytics" color="black" />
      <Icon name="analytics" color="gray" />
      <Icon name="analytics" color="blue" />
      <Icon name="analytics" color="orange" />
      <Icon name="analytics" color="green" />
      <Icon name="analytics" color="red" />
    </Stack>
  </Example>
))

storiesOf('Icon', module).add('named icons', () => (
  <Example>
    <div>
      {Object.keys(icons).map(name => (
        <IconStoryBox key={name}>
          <Icon name={name} size={40} />
          <p>{name}</p>
        </IconStoryBox>
      ))}
    </div>
  </Example>
))
