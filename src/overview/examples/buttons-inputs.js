import React from 'react'

import Example from '../ov-components/example'
import Section from '../ov-components/section'
import { Stack, TextInput, Button } from '@auth0/cosmos'

const ButtonInputs = () => (
  <Section>
    <Example title="Inputs + Buttons">
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="large" defaultValue="Size large (not implemented)" />
        <Button size="large" appearance="primary">
          Button
        </Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput label="This field has text" defaultValue="Size normal" />
        <Button appearance="primary">Button</Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="compressed" defaultValue="Size compressed (not implemented)" />
        <Button size="compressed" appearance="primary">
          Button
        </Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="small" defaultValue="Size small (not implemented)" />
        <Button size="small" appearance="primary">
          Button
        </Button>
      </Stack>
    </Example>
  </Section>
)

export default ButtonInputs
