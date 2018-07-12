import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tooltip, Icon } from '@auth0/cosmos'

storiesOf('Tooltip', module).add('top', () => (
  <Tooltip position="top" content="Tooltip" defaultVisible>
    <div />
  </Tooltip>
))

storiesOf('Tooltip', module).add('bottom', () => (
  <Tooltip position="bottom" content="Tooltip" defaultVisible>
    <div />
  </Tooltip>
))
