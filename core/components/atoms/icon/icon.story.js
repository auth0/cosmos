import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Icon } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos/tokens'

storiesOf('Icon').add('default', () => (
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

storiesOf('Icon').add('size', () => (
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

storiesOf('Icon').add('color', () => (
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

storiesOf('Icon').add('dark-background', () => (
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
