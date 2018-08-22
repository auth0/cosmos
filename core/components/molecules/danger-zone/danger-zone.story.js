import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { DangerZone } from '@auth0/cosmos'

storiesOf('DangerZone').add('default', () => (
  <Example title="2 elements">
    <DangerZone
      items={[
        {
          title: "Delete this client",
          description: "All your apps using this client will stop working.",
          action: {
            label: "Delete",
            onClick: () => { }
          }
        },
        {
          title: "Rotate secret",
          description:
            "All authorized apps will need to be updated with the new client secret.",
          action: {
            label: "Rotate",
            onClick: () => { }
          }
        }
      ]}
    />
  </Example>
))
