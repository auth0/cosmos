
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col, Example, Stack } from '../../_helpers/story-helpers'

import { Button, ButtonGroup } from '@auth0/cosmos'

storiesOf('Button').add('min', () => (
  <div>
    <Row>
      <Col>
        <Example title="Appearances">
          <Stack>
            <Button>Button</Button>
            <Button appearance="primary">Primary</Button>
            <Button appearance="secondary">Secondary</Button>
            <Button appearance="link">Link</Button>
            <Button appearance="destructive">Destructive</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
  </div>
))
