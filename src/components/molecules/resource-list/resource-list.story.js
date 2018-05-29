import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Avatar, Code, Icon, Image, ResourceList } from '@auth0/cosmos'

const IMAGE_URLS = [
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aAogICAgICBkPSJNMjcuMzY4IDQ1SDIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDAgNDIuMzY4VjE3LjYzMkEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAxNWgyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgMzAgMTcuNjMydjI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSAyNy4zNjggNDUiCiAgICAgIGZpbGw9IiMxNjIxNEQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTM0Ljg2OCAzNy41SDEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSA3LjUgMzQuODY4VjEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSAxMC4xMzIgNy41aDI0LjczNmEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAyLjYzMnYyNC43MzZhMi42MzIgMi42MzIgMCAwIDEtMi42MzIgMi42MzIiCiAgICAgIGZpbGw9IiNFQzU0MjQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTQyLjM2OCAzMEgxNy42MzJBMi42MzIgMi42MzIgMCAwIDEgMTUgMjcuMzY4VjIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDE3LjYzMiAwaDI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSA0NSAyLjYzMnYyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgNDIuMzY4IDMwIgogICAgICBmaWxsPSIjNDRDN0Y0IgogICAgLz4KICA8L2c+Cjwvc3ZnPg==',
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggZmlsbD0iIzQ0QzdGNCIgZD0iTTguNDQ2IDI2LjMzN2wtMy40ODctMkwxNS44MSA1LjY2N2wzLjQ4OCAyeiIgLz4gICAgPHBhdGggZmlsbD0iI0VDNTQyNCIgZD0iTTI2LjY2IDI2LjMzN0wxNS44MSA3LjY2N2wzLjQ4Ny0yIDEwLjg1MSAxOC42N3oiIC8+ICAgIDxwYXRoICAgICAgZD0iTTI0LjI3MiA2LjY2N2MwIDMuNjgyLTMuMDA1IDYuNjY2LTYuNzExIDYuNjY2LTMuNzA3IDAtNi43MTEtMi45ODQtNi43MTEtNi42NjZDMTAuODUgMi45ODUgMTMuODU0IDAgMTcuNTYgMGMzLjcwNiAwIDYuNzExIDIuOTg1IDYuNzExIDYuNjY3IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTEzLjQyMiAyNS4zMzNjMCAzLjY4Mi0zLjAwNCA2LjY2Ny02LjcxIDYuNjY3QzMuMDA0IDMyIDAgMjkuMDE1IDAgMjUuMzMzczMuMDA1LTYuNjY2IDYuNzExLTYuNjY2YzMuNzA3IDAgNi43MTEgMi45ODQgNi43MTEgNi42NjYiICAgICAgZmlsbD0iI0VDNTQyNCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMzUuMTIyIDI1LjMzM2MwLTMuNjgyLTMuMDA1LTYuNjY2LTYuNzExLTYuNjY2LTMuNzA3IDAtNi43MTEgMi45ODQtNi43MTEgNi42NjYgMCAzLjY4MiAzLjAwNCA2LjY2NyA2LjcxIDYuNjY3IDMuNzA3IDAgNi43MTItMi45ODUgNi43MTItNi42NjciICAgICAgZmlsbD0iIzQ0QzdGNCIgICAgLz4gIDwvZz48L3N2Zz4=',
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggICAgICBkPSJNMzMuNDk4IDMuMDRBMjMuMTQ5IDIzLjE0OSAwIDAgMCAyMiAwdjE1LjExMmE3LjcxNiA3LjcxNiAwIDAgMSAzLjgzMyAxLjAxM2MzLjY2NiAyLjA4NiA0LjkyMiA2LjcwNyAyLjgwNSAxMC4zMkw0MS45MTUgMzRjNi4zNS0xMC44NCAyLjU4Mi0yNC43MDEtOC40MTctMzAuOTYiICAgICAgZmlsbD0iIzE2MjE0RCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMjIuNSAwQzEwLjA3NCAwIDAgMTAuMTQ4IDAgMjIuNjY2YzAgNC4xMjkgMS4wOTYgOCAzLjAxMSAxMS4zMzRsMTIuOTkzLTcuNTU2QTcuNTYzIDcuNTYzIDAgMCAxIDE1IDIyLjY2NmMwLTQuMTczIDMuMzU4LTcuNTU2IDcuNS03LjU1NiA0LjE0MiAwIDcuNS0zLjM4MiA3LjUtNy41NTVDMzAgMy4zODMgMjYuNjQyIDAgMjIuNSAwIiAgICAgIGZpbGw9IiNFQzU0MjQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTI5LjAwMSAyNS44MzRhNy41NTIgNy41NTIgMCAwIDEtMi43NDcgMi44MDVjLTMuNTkgMi4xMTctOC4xNzkuODYtMTAuMjUtMi44MDUtMi4wNzMtMy42NjYtNi42NjItNC45MjItMTAuMjUtMi44MDYtMy41OSAyLjExNy00LjgyIDYuODA1LTIuNzQ3IDEwLjQ3IDYuMjE2IDEwLjk5OSAxOS45ODMgMTQuNzY3IDMwLjc1IDguNDE3QTIyLjY1NSAyMi42NTUgMCAwIDAgNDIgMzMuNWwtMTIuOTk5LTcuNjY2eiIgICAgICBmaWxsPSIjNDRDN0Y0IiAgICAvPiAgICA8cGF0aCAgICAgIGQ9Ik0zMS43NSAzNS45OTRhNy40OTkgNy40OTkgMCAxIDEgNy41LTEyLjk4OCA3LjQ5OSA3LjQ5OSAwIDAgMS03LjUgMTIuOTg4IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICA8L2c+PC9zdmc+'
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

storiesOf('Resource List').add('image urls', () => (
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

storiesOf('Resource List').add('image components', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: <Image source={IMAGE_URLS[0]} /> },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: <Image source={IMAGE_URLS[1]} /> },
        {
          title: 'Title Three',
          subtitle: 'Subtitle Three',
          image: <Image source={IMAGE_URLS[2]} />
        }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('icon components', () => (
  <Example title="default">
    <ResourceList
      items={[
        { title: 'Title One', subtitle: 'Subtitle One', image: <Icon name="clients" /> },
        { title: 'Title Two', subtitle: 'Subtitle Two', image: <Icon name="help" /> },
        { title: 'Title Three', subtitle: 'Subtitle Three', image: <Icon name="code" /> }
      ]}
    />
  </Example>
))

storiesOf('Resource List').add('avatar components', () => (
  <Example title="default">
    <ResourceList
      items={[
        {
          title: 'Title One',
          subtitle: 'Subtitle One',
          image: <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
        },
        {
          title: 'Title Two',
          subtitle: 'Subtitle Two',
          image: <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
        },
        {
          title: 'Title Three',
          subtitle: 'Subtitle Three',
          image: <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
        }
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
