import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'
import { Avatar } from '@auth0/cosmos'

const EXAMPLE_IMAGE =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5IZWxwZXJzIC8gQXZhdGFycyAvIFR5cGVzIC8gTW9iaWxlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkhlbHBlcnMtLy1BdmF0YXJzLS8tVHlwZXMtLy1Nb2JpbGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0yIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij48L3JlY3Q+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSJzZXJ2aWNlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDExLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTUzIiBmaWxsPSIjNDRDN0Y0IiBwb2ludHM9IjYuODAzNzg5NTUgMjEuMzk4OTkzIDMuOTk0NjE0NDcgMTkuNzczOTkzIDEyLjczNjA5MjQgNC42MDQxNjY2NyAxNS41NDUyNjc1IDYuMjI5MTY2NjciPjwvcG9seWdvbj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNTQiIGZpbGw9IiNFQzU0MjQiIHBvaW50cz0iMjEuNDc2MTg4NyAyMS4zOTg5OTMgMTIuNzM0NzEwOCA2LjIyOTE2NjY3IDE1LjU0Mzg4NTkgNC42MDQxNjY2NyAyNC4yODUzNjM3IDE5Ljc3Mzk5MyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8cGF0aCBkPSJNMTkuNTUyNTg2Niw1LjQxNjY2NjY3IEMxOS41NTI1ODY2LDguNDA4MjAxNDIgMTcuMTMyMTUwNiwxMC44MzMzMzMzIDE0LjE0NjM0MTUsMTAuODMzMzMzMyBDMTEuMTYwNTYyNCwxMC44MzMzMzMzIDguNzQwMDk2MjksOC40MDgyMDE0MiA4Ljc0MDA5NjI5LDUuNDE2NjY2NjcgQzguNzQwMDk2MjksMi40MjUxMzE5NSAxMS4xNjA1NjI0LDAgMTQuMTQ2MzQxNSwwIEMxNy4xMzIxNTA2LDAgMTkuNTUyNTg2NiwyLjQyNTEzMTk1IDE5LjU1MjU4NjYsNS40MTY2NjY2NyIgaWQ9IkZpbGwtNTUiIGZpbGw9IiMxNjIxNEQiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTEwLjgxMjQ5MDMsMjAuNTgzMzMzMyBDMTAuODEyNDkwMywyMy41NzQ4NjggOC4zOTIwNTQyNCwyNiA1LjQwNjI0NTE1LDI2IEMyLjQyMDQ2NjA1LDI2IDAsMjMuNTc0ODY4IDAsMjAuNTgzMzMzMyBDMCwxNy41OTE3OTg2IDIuNDIwNDY2MDUsMTUuMTY2NjY2NyA1LjQwNjI0NTE1LDE1LjE2NjY2NjcgQzguMzkyMDU0MjQsMTUuMTY2NjY2NyAxMC44MTI0OTAzLDE3LjU5MTc5ODYgMTAuODEyNDkwMywyMC41ODMzMzMzIiBpZD0iRmlsbC01NiIgZmlsbD0iI0VDNTQyNCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjguMjkyNjgyOSwyMC41ODMzMzMzIEMyOC4yOTI2ODI5LDE3LjU5MTc5ODYgMjUuODcyMjE2OCwxNS4xNjY2NjY3IDIyLjg4NjQzNzcsMTUuMTY2NjY2NyBDMTkuOTAwNjU4NywxNS4xNjY2NjY3IDE3LjQ4MDE5MjcsMTcuNTkxNzk4NiAxNy40ODAxOTI3LDIwLjU4MzMzMzMgQzE3LjQ4MDE5MjcsMjMuNTc0ODY4IDE5LjkwMDY1ODcsMjYgMjIuODg2NDM3NywyNiBDMjUuODcyMjE2OCwyNiAyOC4yOTI2ODI5LDIzLjU3NDg2OCAyOC4yOTI2ODI5LDIwLjU4MzMzMzMiIGlkPSJGaWxsLTU3IiBmaWxsPSIjNDRDN0Y0Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='

storiesOf('Avatar', module).add('user type with images', () => (
  <Example title="Images">
    <Stack>
      <Avatar
        type="user"
        size="xsmall"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="small"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="medium"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="large"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="xlarge"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="xxlarge"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
    </Stack>
  </Example>
))

storiesOf('Avatar', module).add('user type with initials', () => (
  <Example title="Initials">
    <Stack>
      <Avatar size="xsmall" email="example@auth0.com" initials="AB" />
      <Avatar size="small" email="example@auth0.com" initials="CD" />
      <Avatar size="medium" email="example@auth0.com" initials="EF" />
      <Avatar size="large" email="example@auth0.com" initials="GH" />
      <Avatar size="xlarge" email="example@auth0.com" initials="IJ" />
      <Avatar size="xxlarge" email="example@auth0.com" initials="FC" />
    </Stack>
  </Example>
))

storiesOf('Avatar', module).add('resource type with images', () => (
  <Example title="Images">
    <Stack>
      <Avatar
        type="resource"
        size="xsmall"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
      <Avatar
        type="resource"
        size="small"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
      <Avatar
        type="resource"
        size="medium"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
      <Avatar
        type="resource"
        size="large"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
      <Avatar
        type="resource"
        size="xlarge"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
      <Avatar
        type="resource"
        size="xxlarge"
        image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      />
    </Stack>
  </Example>
))

storiesOf('Avatar', module).add('resource type with transparent images', () => (
  <Example title="Images">
    <Stack>
      <Avatar type="resource" size="xsmall" image={EXAMPLE_IMAGE} />
      <Avatar type="resource" size="small" image={EXAMPLE_IMAGE} />
      <Avatar type="resource" size="medium" image={EXAMPLE_IMAGE} />
      <Avatar type="resource" size="large" image={EXAMPLE_IMAGE} />
      <Avatar type="resource" size="xlarge" image={EXAMPLE_IMAGE} />
      <Avatar type="resource" size="xxlarge" image={EXAMPLE_IMAGE} />
    </Stack>
  </Example>
))

storiesOf('Avatar', module).add('resource type with icons', () => (
  <Example title="Icons">
    <Stack>
      <Avatar type="resource" size="xsmall" icon="settings" />
      <Avatar type="resource" size="small" icon="settings" />
      <Avatar type="resource" size="medium" icon="settings" />
      <Avatar type="resource" size="large" icon="settings" />
      <Avatar type="resource" size="xlarge" icon="settings" />
      <Avatar type="resource" size="xxlarge" icon="settings" />
    </Stack>
  </Example>
))

storiesOf('Avatar', module).add('fitted images', () => (
  <Example title="Fitted images">
    <Stack>
      <Avatar
        type="user"
        size="xxlarge"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
      />
      <Avatar
        type="user"
        size="xxlarge"
        image="https://images.unsplash.com/photo-1545006398-2cf47cd87b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=915&q=80"
      />
      <Avatar
        type="user"
        size="xxlarge"
        image="https://images.unsplash.com/photo-1542838687-d214d04db0aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      />
      <Avatar
        type="user"
        size="xxlarge"
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAAshJREFUWAntVz1IqlEYfrxqWREh4RI6ZkPkEhjuOrq5ONTg0iYIBkHRVpPiFISUoXsgNLSIOQURUQqGk0FqEQVG/6nQ5X3p+yj9vLfuuUHDeUG/873nvM95fN7nHFBXKpVe8YPj1w/mxtQkQdEOSQWlgqIKiNZLD0oFRRUQrZce/HYFz87O8Pj4qO7TarVQLBZxfHyM5+dnNf+ZQTsW1VSrVezv7+P6+loT4o8tLpfLWFxcZBCqbjQaWF5eRjqdRjabxcLCAm5ubjSB25PtWDS/vb2NaDSKo6MjLC0t4fDwsL0Mho7MW+Lp6Qnr6+sYGBhQl+zt7UGn0zExSq6trWFnZwd+v19dozXQwrq7u8PW1hZisRjMZjOTTCaTmJyc/ADRVcGNjQ14vV4MDQ2pBYVCAXa7XX0fGxtDPp/H+fk5k769veW5eDwO+jFKaGGdnJwwMSJHQVhXV1e4uLhQyvipSXB3dxd9fX1wuVwfFtfrdVitVjVns9m4xSMjI5iYmEAikWA/0UZK7Wex+vv7MTw8DNrjfXQQrNVqyOVymJmZeb+OxwaD4cPBIE9SjsLn8+Hy8hKpVAqzs7Nsha9gEcbLy4uKR+8UHR4k89NGwWCQFzw8PCASibDPLBYL6CQqQWPKUej1ephMJlCbjUYj5/6GValUeB19kXL39/cqnjLRQXB6ehr0UWJ+fh6BQIC9Ry3Y3Nzka6e3txcHBwdwOp28lE4ktdrhcIA8ODc3xzjdsOi6oqAra3x8nK0xOjrKvuSJt68Ogu8n28e0+dTUFEKhECtGwB6PB6enp3ztrKysgIjTlZHJZOB2u9sh1HeyBnVpdXWVsXp6ehAOh9V5ZaD7l7+dzWYTpAAdpP8RdOUMDg5qQn1JQQWBPKb4TMmJPLuRI8yOUyyy0XfUSoKiqkoFpYKiCojWSw9KBUUVEK2XHpQKiiogWv8bXAcodfCm8bYAAAAASUVORK5CYII="
      />
    </Stack>
  </Example>
))
