import React from 'react'
import { storiesOf } from '@storybook/react'

import { Paragraph } from '@auth0/cosmos'

storiesOf('Paragraph', module).add('default', () => (
  <Paragraph>
    Application metadata are custom string keys and values (max 255 characters each), set on a per
    application basis.
  </Paragraph>
))
