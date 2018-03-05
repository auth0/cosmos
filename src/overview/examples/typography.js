import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { Heading, Paragraph, Code, Link } from 'auth0-cosmos'

const Colors = () => (
  <Section title="Typography">
    <Example title="Heading">
      <Heading size={1}>Good design is good business</Heading>
      <Heading size={2}>Good design is good business</Heading>
      <Heading size={3}>Good design is good business</Heading>
      <Heading size={4}>Good design is good business</Heading>
    </Example>

    <Example title="Paragraph">
      <Paragraph>
        Auth0 provides authentication and authorization as a service. We are here to give developers
        and companies the building blocks they need in order to secure their applications, without
        having to become security experts. You can connect any application (written in any language
        or on any stack) to Auth0 and define the identity providers you want to use (how you want
        your users to log in). Based on your app's technology, choose one of our SDKs (or call our
        API) and hook it up to your app. Now each time a user tries to authenticate, Auth0 will
        verify their identity and send the required information back to your app.
      </Paragraph>
    </Example>

    <Example title="Link">
      <Paragraph>
        Auth0 provides authentication and authorization as a service.{' '}
        <Link href="/docs">Read more in the docs</Link>.
      </Paragraph>
    </Example>

    <Example title="Code">
      <Paragraph>
        Auth0 provides authentication and <Code>authorization</Code> as a service.
      </Paragraph>
    </Example>
  </Section>
)

export default Colors
