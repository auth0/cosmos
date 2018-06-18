import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Dialog } from '@auth0/cosmos'

storiesOf('Dialog').add('default', () => (
  <Example title="default">
    <Dialog
      open
      title="Example Dialog"
      onClose={() => {}}
      actions={[
        new Dialog.Action('OK', () => {}, 'primary'),
        new Dialog.Action('Cancel', () => {})
      ]}
    >
      Are you sure?
    </Dialog>
  </Example>
))
