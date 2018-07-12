import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('long text', () => (
  <div>
    <Example title="Long text">
      <Button size="large">Really really long action is long</Button>
      <br />
      <br />
      <Button>Really really long action is long</Button>
      <br />
      <br />
      <Button size="compressed">Really really long action is long</Button>
      <br />
      <br />
      <Button size="small">Really really long action is long</Button>
    </Example>
    <Example title="Stacked Long text">
      <Stack>
        <Button size="large">Really really long action is overflowing</Button>
        <Button>Really really long action is overflowing</Button>
        <Button size="compressed">Really really long action is overflowing</Button>
        <Button size="small">Really really long action is overflowing</Button>
      </Stack>
    </Example>
  </div>
))
