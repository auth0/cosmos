import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col, Example, Stack } from '../../_helpers/story-helpers'

import { Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('overview', () => (
  <div>
    <Row>
      <Col>
        <Example title="Default Button" align="center">
          <Button>Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Primary Button" align="center">
          <Button appearance="primary">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Secondary Button" align="center">
          <Button appearance="transparent">Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Link Button" align="center">
          <Button appearance="link">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Disabled Button" align="center">
          <Button disabled>Button</Button>
        </Example>
      </Col>
      <Col>
        <Example title="Destructive Button" align="center">
          <Button appearance="destructive">Button</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button States" align="center">
          <Stack>
            <Button disabled>Button</Button>
            <Button loading>Button</Button>
            <Button success>Button</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button Sizes" align="center">
          <Stack>
            <Button size="large">Large</Button>
            <Button>Default</Button>
            <Button size="compressed">Compressed</Button>
            <Button size="small">Small</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Button with icon" align="center">
          <Stack>
            <Button appearance="primary" icon="plus">
              Create Client
            </Button>
            <Button appearance="transparent" icon="play-circle">
              Tutorial
            </Button>
            <Button appearance="link" icon="copy" />
            <Button icon="copy" label="Copy to Clipboard" />
          </Stack>
        </Example>
      </Col>
    </Row>
  </div>
))
