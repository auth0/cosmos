import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Paragraph } from '@auth0/cosmos'

storiesOf('Paragraph').add('default', () => (
  <Example title="Paragraph">
    <Paragraph>
      Application metadata are custom string keys and values (max 255 characters each), set on a per
      application basis.
    </Paragraph>

    <Paragraph>
      Using Password or MFA grant types with public clients is not recommended. To use the Client
      Credentials grant you have to set a Token Endpoint Auth Method other than "none". See our
      documentation for more information.
    </Paragraph>
  </Example>
))
