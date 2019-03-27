import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Label } from '@auth0/cosmos'

storiesOf('Label', module).add('appearances', () => (
  <Example title="appearances">
    <Stack>
      <Label appearance="default">Default</Label>
      <Label appearance="information">Information</Label>
      <Label appearance="success">Success</Label>
      <Label appearance="warning">Warning</Label>
      <Label appearance="danger">Danger</Label>
    </Stack>
  </Example>
))

storiesOf('Label', module).add('no appearance specified', () => (
  <Example title="no appearance specified">
    <Label>Example</Label>
  </Example>
))

storiesOf('Label', module).add('stressed', () => (
  <Example title="stressed - 119 characters">
    <Stack>
      <Label appearance="default">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Label>
      <Label appearance="information">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Label>
      <Label appearance="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Label>
      <Label appearance="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Label>
      <Label appearance="danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
        consectetur tellus tristique ut.
      </Label>
    </Stack>
  </Example>
))
