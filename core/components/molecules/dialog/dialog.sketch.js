import React from 'react'
import { storiesOf } from '@storybook/react'

import { Dialog } from '@auth0/cosmos'

/* how do we pass open to the underlying overlay here? */
storiesOf('Dialog', module).add('default', () => (
  <Dialog
    title="Example Dialog"
    onClose={() => {}}
    actions={[new Dialog.Action('OK', () => {}, 'primary'), new Dialog.Action('Cancel', () => {})]}
  >
    Are you sure?
  </Dialog>
))
