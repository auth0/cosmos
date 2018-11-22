import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Code, ResourceList, Button } from '@auth0/cosmos'

const IMAGE_URLS = [
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=',
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4=',
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
]

storiesOf('Resource List').add('titles', () => (
  <Example title="default">
    <ResourceList
      items={[{ title: 'Title One' }, { title: 'Title Two' }, { title: 'Title Three' }]}
    />
  </Example>
))

storiesOf('Resource List').add('titles and subtitles', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One' },
        { title: 'Title Two', subtitle: 'Subtitle Two' },
        { title: 'Title Three', subtitle: 'Subtitle Three' }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('titles with links', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', href: 'https://auth0.com/' },
        { title: 'Title Two', subtitle: 'Subtitle Two', href: 'https://auth0.com/' },
        { title: 'Title Three', subtitle: 'Subtitle Three', href: 'https://auth0.com/' }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('with images', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0] },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1] },
        { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2] }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('with icons', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', icon: 'clients' },
        { title: 'Title Two', subtitle: 'Subtitle Two', icon: 'help' },
        { title: 'Title Three', subtitle: 'Subtitle Three', icon: 'code' }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('custom renderer', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' },
        { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }
      ]}
      renderItem={item => (
        <ResourceList.Item {...item}>
          ID: <Code>{item.id}</Code>
        </ResourceList.Item>
      )}
    />
  </Example>
))

storiesOf('Resource List').add('actions', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' },
        { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }
      ]}
      renderItem={item => (
        <ResourceList.Item {...item}>
          ID: <Code>{item.id}</Code>
        </ResourceList.Item>
      )}
      actions={[
        { label: 'Delete', icon: 'delete', handler: function() {} },
        { label: 'Settings', icon: 'settings', handler: function() {} }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('actions as buttons', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' },
        { title: 'Title Three', subtitle: 'Subtitle Three', image: IMAGE_URLS[2], id: 'ghi789' }
      ]}
      renderItem={item => (
        <ResourceList.Item {...item}>
          ID: <Code>{item.id}</Code>
        </ResourceList.Item>
      )}
      actions={[
        <Button icon="settings" onClick={() => {}} label="Settings" />,
        <Button icon="delete" onClick={() => {}} label="Delete" />
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('action overrides', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: IMAGE_URLS[0], id: 'abc123' },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: IMAGE_URLS[1], id: 'def456' },
        {
          title: 'Title Three',
          subtitle: 'Subtitle Three',
          image: IMAGE_URLS[2],
          id: 'ghi789',
          actions: [{ label: 'Settings', icon: 'settings', handler: function() {} }]
        }
      ]}
      renderItem={item => (
        <ResourceList.Item {...item}>
          ID: <Code>{item.id}</Code>
        </ResourceList.Item>
      )}
      actions={[
        { label: 'Delete', icon: 'delete', handler: function() {} },
        { label: 'Settings', icon: 'settings', handler: function() {} }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('stressed', () => (
  <Example title="stressed - title and subtitle with 119 characters + 7 actions">
    <ResourceList
      items={[
        {
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          actions: [
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} }
          ]
        },
        {
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          actions: [
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} }
          ]
        },
        {
          title:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut.',
          actions: [
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} },
            { label: 'Settings', icon: 'settings', handler: function() {} }
          ]
        }
      ]}
    />
  </Example>
))
