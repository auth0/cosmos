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

const appearances = ['default', 'information', 'success', 'warning', 'danger']

storiesOf('Alert', module).add('default', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} key={appearance}>
        This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with string text', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} key={appearance} text="This is the alert content" />
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" key={appearance}>
        <span>
          This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
        </span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title and children', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" key={appearance}>
        <span>This is the alert content</span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with title and link', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" link="/test" key={appearance}>
        This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with icon', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" link="/test" icon="hourglass" key={appearance}>
        This is the <Text type="strong">alert</Text>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('stressed content', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" link="/test" key={appearance}>
        This is the alert content. This is the alert content. This is the alert content. This is the
        alert content. This is the alert content. This is the alert content. This is the alert
        content. This is the alert content. This is the alert content.
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert', module).add('with no children/text', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert appearance={appearance} title="A title" link="/test" key={appearance} />
    ))}
  </Example>
))

storiesOf('Alert', module).add('old API', () => (
  <Example>
    {appearances.map(appearance => (
      <Alert key={appearance} type={appearance} title="Warning!" text="This is the old API" />
    ))}
  </Example>
))
