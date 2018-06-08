import React from 'react'
import { storiesOf } from '@storybook/react'

import { Overlay } from '@auth0/cosmos'

storiesOf('Overlay', module).add('open', () => (
  <Overlay open onClose={() => {}}>
    Hello from Cosmos!
  </Overlay>
))
