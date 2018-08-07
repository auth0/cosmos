import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Badge } from '@auth0/cosmos'

storiesOf('Badge').add('appearances', () => (
  <Example title="appearances">
    <Stack>
      <Badge appearance="default">123</Badge>
      <Badge appearance="information">99</Badge>
      <Badge appearance="success">345</Badge>
      <Badge appearance="warning">6</Badge>
      <Badge appearance="danger">55</Badge>
    </Stack>
  </Example>
))

storiesOf('Badge').add('no appearance specified', () => (
  <Example title="no appearance specified">
    <Badge>99</Badge>
  </Example>
))

storiesOf('Badge').add('stressed', () => (
  <Example title="stressed - 119 characters">
    <Stack>
      <Badge appearance="default">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.</Badge>
      <Badge appearance="information">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.</Badge>
      <Badge appearance="success">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.</Badge>
      <Badge appearance="warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.</Badge>
      <Badge appearance="danger">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.</Badge>
    </Stack>
  </Example>
))
