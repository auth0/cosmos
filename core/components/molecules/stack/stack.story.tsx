import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { Stack, Paragraph } from '../../'

const Box = () => (
  <div style={{ height: '50px', width: '50px', background: '#EEE', margin: '5px' }} />
)

storiesOf('Stack', module).add('default', () => (
  <Example title="default">
    <Stack align="left">
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))

storiesOf('Stack', module).add('right', () => (
  <Example title="right">
    <Stack align="right">
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))

storiesOf('Stack', module).add('widths', () => (
  <Example title="widths">
    <Stack widths={[10, 30, 30, 30]}>
      <Box />
      <Box />
      <Box />
      <Box />
    </Stack>
  </Example>
))

storiesOf('Stack', module).add('stressed', () => (
  <Example title="stressed - 56 characters per item">
    <Stack align="left">
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
      <Paragraph style={{ border: '1px solid black' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
    </Stack>
  </Example>
))
