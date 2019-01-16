import React from 'react'
import styled from '@auth0/cosmos/styled'
import { storiesOf } from '@storybook/react'
import { Example as ExampleHelper } from '@auth0/cosmos/_helpers/story-helpers'
import { Alert, Link, Text } from '@auth0/cosmos'

const Example = styled(ExampleHelper)`
  ${Alert.Element} {
    margin-bottom: 22px;
  }
`

const types = ['default', 'information', 'success', 'warning', 'danger']

storiesOf('Alert', module).add('default', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} key={type}>
        This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with string text', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} key={type} text="This is the alert content" />
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" key={type}>
        <span>
          This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
        </span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title and children', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" key={type}>
        <span>This is the alert content</span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title and link', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" link="/test" key={type}>
        This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with icon', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" link="/test" icon="hourglass" key={type}>
        This is the <Text type="strong">alert</Text>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('stressed content', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" link="/test" key={type}>
        This is the alert content. This is the alert content. This is the alert content. This is the
        alert content. This is the alert content. This is the alert content. This is the alert
        content. This is the alert content. This is the alert content.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with no children/text', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" link="/test" key={type} />
    ))}
  </Example>
))
