import React from 'react'

import Example from '../components/example'
import Section from '../components/section'
import { Stack, TextInput, Button } from '@auth0/cosmos'

const ButtonInputs = () => (
  <Section>
    <Example title="Inputs + Buttons">
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="large" defaultValue="Size large" />
        <Button size="large" appearance="primary">
          Button
        </Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput label="This field has text" defaultValue="Size normal" />
        <Button appearance="primary">Button</Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="compressed" defaultValue="Size compressed" />
        <Button size="compressed" appearance="primary">
          Button
        </Button>
      </Stack>
      <Stack style={{ marginBottom: '1em' }}>
        <TextInput size="small" defaultValue="Size small" />
        <Button size="small" appearance="primary">
          Button
        </Button>
      </Stack>
    </Example>
  </Section>
)

export default ButtonInputs
