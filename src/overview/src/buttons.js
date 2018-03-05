import React from 'react'

import Container from './container'
import { Button, Stack } from 'auth0-cosmos'

const Buttons = () => (
  <div>
    <Container title="Buttons">
      <Stack>
        <Button label="An Action">default</Button>
        <Button primary label="Main call to action">
          primary
        </Button>
        <Button transparent label="Secondary action">
          secondary
        </Button>
      </Stack>
      <br />
      <br />
      <Stack>
        <Button destructive label="Destructive action">
          Delete
        </Button>
        <Button link label="Subtle action">
          Clear
        </Button>
        <Button link icon="copy" label="Subtle action">
          Copy
        </Button>
      </Stack>
      <br />
      <br />
      <Stack>
        <Button primary icon="plus">
          Create Client
        </Button>

        <Button transparent icon="play-circle">
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
