import React from 'react'

import Section from '../ov-components/section'
import Example from '../ov-components/example'
import { Heading1, Heading2, Heading3, Subheader, Text } from '../../components'

const Colors = () => (
  <Section title="Typography">
    <Example>
      <Heading1>H1 Heading</Heading1>
    </Example>
    <Example>
      <Heading2>H2 Heading</Heading2>
    </Example>
    <Example>
      <Heading3>H3 Heading</Heading3>
    </Example>
    <Example>
      <Subheader>Subheader</Subheader>
    </Example>
    <Example>
      <Text>
        Auth0 provides authentication and authorization as a service. We are here to give developers
        and companies the building blocks they need in order to secure their applications, without
        having to become security experts. You can connect any application (written in any language
        or on any stack) to Auth0 and define the identity providers you want to use (how you want
        your users to log in). Based on your app's technology, choose one of our SDKs (or call our
        API) and hook it up to your app. Now each time a user tries to authenticate, Auth0 will
        verify their identity and send the required information back to your app.
      </Text>
    </Example>
  </Section>
)

export default Colors
