import React from 'react'
import { storiesOf } from '@storybook/react'
import { Row, Col, Example, Stack } from '../../_helpers/story-helpers'

import { Button, ButtonGroup } from 'auth0-cosmos'

storiesOf('Button').add('overview', () => (
  <div>
    <Row>
      <Col>
        <Example title="Appearances">
          <Stack>
            <Button>Button</Button>
            <Button appearance="primary">Primary</Button>
            <Button appearance="transparent">Transparent</Button>
            <Button appearance="link">Link</Button>
            <Button appearance="destructive">Destructive</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Disabled state" align="center">
          <Stack>
            <Button disabled>Default</Button>
            <Button disabled appearance="primary">
              Primary
            </Button>
            <Button disabled appearance="transparent">
              Transparent
            </Button>
            <Button disabled appearance="link">
              Link
            </Button>
            <Button disabled appearance="destructive">
              Destructive
            </Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Loading state" align="center">
          <Stack>
            <Button loading>Default</Button>
            <Button loading appearance="primary">
              Primary
            </Button>
            <Button loading appearance="transparent">
              Transparent
            </Button>
            <Button loading appearance="link">
              Link
            </Button>
            <Button loading appearance="destructive">
              Destructive
            </Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Success state" align="center">
          <Stack>
            <Button success>Default</Button>
            <Button success appearance="primary">
              Primary
            </Button>
            <Button success appearance="transparent">
              Transparent
            </Button>
            <Button success appearance="link">
              Link
            </Button>
            <Button success appearance="destructive">
              Destructive
            </Button>
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
        <Example title="Button Sizes + loading" align="center">
          <Stack>
            <Button loading size="large">
              Large
            </Button>
            <Button loading>Default</Button>
            <Button loading size="compressed">
              Compressed
            </Button>
            <Button loading size="small">
              Small
            </Button>
          </Stack>
        </Example>
        <Example title="Button Sizes + success" align="center">
          <Stack>
            <Button success size="large">
              Large
            </Button>
            <Button success>Default</Button>
            <Button success size="compressed">
              Compressed
            </Button>
            <Button success size="small">
              Small
            </Button>
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
    <Row>
      <Col>
        <Example title="Long text">
          <Button size="large">Really really long action is long</Button>
          <br />
          <br />
          <Button>Really really long action is long</Button>
          <br />
          <br />
          <Button size="compressed">Really really long action is long</Button>
          <br />
          <br />
          <Button size="small">Really really long action is long</Button>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Stacked Long text">
          <Stack>
            <Button size="large">Really really long action is overflowing</Button>
            <Button>Really really long action is overflowing</Button>
            <Button size="compressed">Really really long action is overflowing</Button>
            <Button size="small">Really really long action is overflowing</Button>
          </Stack>
        </Example>
      </Col>
    </Row>
    <Row>
      <Col>
        <Example title="Dark background" background="dark">
          <div>
            <Stack>
              <Button>Button</Button>
              <Button appearance="primary">Primary</Button>
              <Button appearance="transparent">Transparent</Button>
              <Button appearance="link">Link</Button>
              <Button appearance="destructive">Destructive</Button>
            </Stack>
          </div>
          <br />
          <div>
            <Stack>
              <Button disabled>Button</Button>
              <Button disabled appearance="primary">
                Primary
              </Button>
              <Button disabled appearance="transparent">
                Transparent
              </Button>
              <Button disabled appearance="link">
                Link
              </Button>
              <Button disabled appearance="destructive">
                Destructive
              </Button>
            </Stack>
          </div>
          <br />
          <div>
            <Stack>
              <Button loading>Button</Button>
              <Button loading appearance="primary">
                Primary
              </Button>
              <Button loading appearance="transparent">
                Transparent
              </Button>
              <Button loading appearance="link">
                Link
              </Button>
              <Button loading appearance="destructive">
                Destructive
              </Button>
            </Stack>
          </div>
          <br />
          <div>
            <Stack>
              <Button icon="delete" />
              <Button appearance="primary" icon="delete" />
              <Button appearance="link" icon="delete" />
              <Button appearance="transparent" icon="delete" />
              <Button appearance="destructive" icon="delete" />
            </Stack>
          </div>
        </Example>
      </Col>
    </Row>
  </div>
))
