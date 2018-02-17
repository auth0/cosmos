import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { Header, Paragraph } from '../../components'

const Colors = () => (
  <Section title="Typography">
    <Example>
      <Header size="1">Heading 1</Header>
    </Example>
    <Example>
      <Header size="2">Heading 2</Header>
    </Example>
    <Example>
      <Header size="3">Heading 3</Header>
    </Example>
    <Example>
      <Header size="4">Subheader</Header>
    </Example>
    <Example>
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
  </Section>
)

export default Colors
