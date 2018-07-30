import React from 'react'
import { storiesOf } from '@storybook/react'

import { Dialog, Button } from '@auth0/cosmos'

/* how do we pass open to the underlying overlay here? */
storiesOf('Dialog', module).add('default', () => (
  <Dialog title="Example Dialog" onClose={() => {}}>
    <Dialog.Body>Are you sure?</Dialog.Body>
    <Dialog.Footer>
      <Button appearance="primary">OK</Button>
      <Button appearance="secondary">Cancel</Button>
    </Dialog.Footer>
  </Dialog>
))
