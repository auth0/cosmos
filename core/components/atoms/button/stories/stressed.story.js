import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Button } from '../../../'

storiesOf('Button', module).add('stressed', () => (
  <Example title="stressed - 119 characters">
    <Button>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
      consectetur tellus tristique ut.
    </Button>
    <Button appearance="primary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
      consectetur tellus tristique ut.
    </Button>
    <Button appearance="secondary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
      consectetur tellus tristique ut.
    </Button>
    <Button appearance="link">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
      consectetur tellus tristique ut.
    </Button>
    <Button appearance="destructive">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in
      consectetur tellus tristique ut.
    </Button>
  </Example>
))
