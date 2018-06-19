import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Dialog } from '@auth0/cosmos'

const StyledExample = styled(Example)`
  min-height: 800px;
`

storiesOf('Dialog').add('default', () => (
  <StyledExample title="default" style={{ backgroundcolor: 'red' }}>
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
  </StyledExample>
))
