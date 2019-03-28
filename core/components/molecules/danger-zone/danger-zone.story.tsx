import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { DangerZone } from '@auth0/cosmos'

storiesOf('DangerZone', module).add('single', () => (
  <Example title="1 element">
    <DangerZone
      items={[
        {
          title: 'Delete this application',
          description: 'All your projects using this application will stop working.',
          action: {
            label: 'Delete Application',
            onClick: () => { }
          }
        }
      ]}
    />
  </Example>
))

storiesOf('DangerZone', module).add('multiple', () => (
  <Example title="2 elements">
    <DangerZone
      items={[
        {
          title: 'Delete this application',
          description: 'All your projects using this application will stop working.',
          action: {
            label: 'Delete application',
            onClick: () => { }
          }
        },
        {
          title: 'Rotate secret',
          description:
            'All authorized applications will need to be updated with the new client secret.',
          action: {
            label: 'Rotate',
            onClick: () => { }
          }
        }
      ]}
    />
  </Example>
))

storiesOf('DangerZone', module).add('required', () => (
  <Example title="Required props">
    <DangerZone
      items={[
        {
          title: 'Delete this client',
          action: {
            label: 'Delete',
            onClick: () => { }
          }
        }
      ]}
    />
  </Example>
))

storiesOf('DangerZone', module).add('stress', () => (
  <Example title="Stress testing">
    <DangerZone
      items={[
        {
          title: 'Delete this application',
          description:
            'All your projects using this application will stop. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          action: {
            label: 'Delete application',
            onClick: () => { }
          }
        },
        {
          title: 'Destroy this application',
          description: 'All your projects using this application will stop.',
          action: {
            label: 'Delete button has a very long text',
            onClick: () => { }
          }
        },
        {
          title: 'Is this a competition?',
          description:
            'All your projects using this application will stop. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          action: {
            label: 'Delete button has a very long text',
            onClick: () => { }
          }
        }
      ]}
    />
  </Example>
))
