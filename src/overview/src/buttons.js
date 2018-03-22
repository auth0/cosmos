import React from 'react'

import Container from './container'
import { Button, Stack } from 'auth0-cosmos'

const Buttons = () => (
  <div>
    <Container title="Buttons">
      <Stack>
        <Button label="An Action">default</Button>
        <Button appearance="primary" label="Main call to action">
          primary
        </Button>
        <Button appearance="secondary" label="Secondary action">
          secondary
        </Button>
      </Stack>
      <br />
      <br />
      <Stack>
        <Button appearance="destructive" label="Destructive action">
          Delete
        </Button>
        <Button appearance="link" label="Subtle action">
          Clear
        </Button>
        <Button appearance="link" icon="copy" label="Subtle action">
          Copy
        </Button>
      </Stack>
      <br />
      <br />
      <Stack>
        <Button appearance="primary" icon="plus">
          Create Client
        </Button>

        <Button appearance="secondary" icon="play-circle">
          Tutorial
        </Button>

        <Button icon="copy" label="Subtle action" />
      </Stack>
    </Container>
    <Container title="Button states">
      <Stack>
        <Button disabled label="Action not allowed">
          Disabled
        </Button>
        <Button loading label="Loading state">
          Button
        </Button>
        <Button success label="Success!">
          Button
        </Button>
      </Stack>
    </Container>
  </div>
)

export default Buttons
