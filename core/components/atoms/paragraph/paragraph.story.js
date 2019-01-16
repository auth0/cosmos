import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Paragraph, Link, Code } from '@auth0/cosmos'

storiesOf('Paragraph', module).add('default', () => (
  <Example title="Paragraph">
    <Paragraph>
      Application metadata are custom string keys and values (max 255 characters each), set on a per
      application basis.
    </Paragraph>

    <Paragraph>
      Using Password or MFA grant types with public clients is not recommended. To use the Client
      Credentials grant you have to set a Token Endpoint Auth Method other than "none". See our
      documentation for more information.
    </Paragraph>
  </Example>
))

storiesOf('Paragraph', module).add('with styles', () => (
  <Example title="Paragraph with styles">
    <Paragraph>
      Now that you have an <Link url="https://auth0.com">account</Link>, we need to know about your
      app(s) that will be using our services. To that end, you must register each application. We
      use the term <strong>application</strong> to refer to an application (like{' '}
      <Link url="https://auth0.com">OAuth 2.0</Link> does).
    </Paragraph>

    <Paragraph>
      When you create an application in the Dashboard, the first piece of information we ask for is
      its type. This can be one of the following. Each application is assigned a{' '}
      <strong>Client ID</strong> upon creation. This is an alphanumeric string and it's the unique
      identifier for your application (such as <Code>q8fij2iug0CmgPLfTfG1tZGdTQyGaTUA</Code>
      ). It cannot be modified and you will be using it in your application's code when you call{' '}
      <Link url="https://auth0.com">Auth0 APIs</Link>.
    </Paragraph>

    <Paragraph>
      Another important piece of information is the <strong>Client</strong> Secret. Think of it as
      your application's password which must be kept confidential at all times. If anyone gains
      access to your <strong>Client Secret</strong> they can{' '}
      <Link url="https://auth0.com">impersonate your application</Link> and access protected
      resources. In our example, <Code>ExampleCo</Code> has two apps: a web app (running on a
      server) and a mobile app. Hence, they would create two applications: one of type{' '}
      <Code>Regular Web Applications</Code>, and one of type <Code>Native</Code>.
    </Paragraph>
  </Example>
))
