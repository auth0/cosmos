import React from "react";

import { storiesOf } from "@storybook/react";

import { EmptyState } from "../../";
import { Example, Stack } from "../../_helpers/story-helpers";
import Badge from "../../atoms/badge";

storiesOf('EmptyState', module).add('default', () => (
  <Example title="default">
    <EmptyState
      title="Clients"
      text="Add some clients to get started"
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        label: 'Create Client',
        handler: () => {}
      }}
    />
  </Example>
))

storiesOf('EmptyState', module).add('without action', () => (
  <Example title="without action">
    <EmptyState
      icon="folder-cancel"
      title="Files"
      link={{ href: 'https://auth0.com', target: '_blank' }}
    >
      We couldn't find files that match your search.
    </EmptyState>
  </Example>
))

storiesOf('EmptyState', module).add('with beta tag', () => (
  <EmptyState
    title={
      <>
        Hooks <Badge appearance="information">BETA</Badge>
      </>
    }
    icon="hooks"
    link={{ href: 'https://auth0.com', target: '_blank' }}
  >
    Hooks allow you to customize the behavior of Auth0 with Node.js code that is executed in
    selected extension points.
  </EmptyState>
))

storiesOf('EmptyState', module).add('stressed', () => (
  <Example title="stressed - 119 characters in title and text">
    <EmptyState
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut."
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut."
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        label: 'Create Client',
        handler: () => {}
      }}
    />
  </Example>
))
