import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Tooltip, ButtonGroup, Button } from '@auth0/cosmos'

const positions = ['top', 'left', 'right', 'bottom']

storiesOf('Tooltip').add('with button', () =>
  positions.map(position => (
    <Example title={position}>
      <div style={{ marginLeft: position === 'left' ? 120 : 0 }}>
        <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
          <Button>Something</Button>
        </Tooltip>
      </div>
    </Example>
  ))
)

storiesOf('Tooltip').add('with button group', () =>
  positions.map(position => (
    <Example title={position}>
      <ButtonGroup>
        <Button>Something</Button>
        <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
          <Button>Something</Button>
        </Tooltip>
        <Button>Something</Button>
      </ButtonGroup>
    </Example>
  ))
)
storiesOf('Tooltip').add('with compressed button group', () =>
  positions.map(position => (
    <Example title={position}>
      <ButtonGroup compressed>
        <Button>Something</Button>
        <Tooltip position={position} content={`Inner content ${position}`} defaultVisible>
          <Button>Something</Button>
        </Tooltip>
        <Button>Something</Button>
      </ButtonGroup>
    </Example>
  ))
)
