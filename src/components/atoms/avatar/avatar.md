```meta
  category: Actions
  description: Displays an image (and optionally text) for a user or resource
  unstable: true
```

`import { Avatar } from '@auth0/cosmos'`

```jsx
<Avatar
  image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
  title="Auth0 Management API"
  subtitle="System API"
/>
```

`Avatar` supports several different layouts. In its most basic display, it shows an image or icon
representing a user or a resource. It also accepts optional `title` and `subtitle` props which
will add text to the right of the image.

```js
<Stack>
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" title="Title" />
  <Avatar
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
    subtitle="Subtitle"
  />
</Stack>
```

You can use the `size` prop to render `Avatars` of various sizes.

```js
<Stack>
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="xsmall" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="small" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="medium" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="large" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="xlarge" />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="xxlarge" />
</Stack>
```

The image or icon can also be rendered either in a circle or a square. By default, specifying an `image`
prop will cause the `Avatar` to display a circular image, and specifying an `icon` will cause it
to display a square image with a gray background. If necessary, you can override this default by
specifying a value for the `shape` prop.

```js
<Stack>
  <Avatar shape="square" icon="settings" size="xsmall" />
  <Avatar shape="square" icon="settings" size="small" />
  <Avatar shape="square" icon="settings" size="medium" />
  <Avatar shape="square" icon="settings" size="large" />
  <Avatar shape="square" icon="settings" size="xlarge" />
  <Avatar shape="square" icon="settings" size="xxlarge" />
</Stack>
```

You can also use data URIs as the value for `image`:

```js
<Stack>
  <Avatar
    shape="square"
    image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aAogICAgICBkPSJNMjcuMzY4IDQ1SDIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDAgNDIuMzY4VjE3LjYzMkEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAxNWgyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgMzAgMTcuNjMydjI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSAyNy4zNjggNDUiCiAgICAgIGZpbGw9IiMxNjIxNEQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTM0Ljg2OCAzNy41SDEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSA3LjUgMzQuODY4VjEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSAxMC4xMzIgNy41aDI0LjczNmEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAyLjYzMnYyNC43MzZhMi42MzIgMi42MzIgMCAwIDEtMi42MzIgMi42MzIiCiAgICAgIGZpbGw9IiNFQzU0MjQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTQyLjM2OCAzMEgxNy42MzJBMi42MzIgMi42MzIgMCAwIDEgMTUgMjcuMzY4VjIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDE3LjYzMiAwaDI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSA0NSAyLjYzMnYyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgNDIuMzY4IDMwIgogICAgICBmaWxsPSIjNDRDN0Y0IgogICAgLz4KICA8L2c+Cjwvc3ZnPg=="
  />
  <Avatar
    shape="square"
    image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzYgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDx0aXRsZT5Hcm91cCAyPC90aXRsZT4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggZmlsbD0iIzQ0QzdGNCIgZD0iTTguNDQ2IDI2LjMzN2wtMy40ODctMkwxNS44MSA1LjY2N2wzLjQ4OCAyeiIgLz4gICAgPHBhdGggZmlsbD0iI0VDNTQyNCIgZD0iTTI2LjY2IDI2LjMzN0wxNS44MSA3LjY2N2wzLjQ4Ny0yIDEwLjg1MSAxOC42N3oiIC8+ICAgIDxwYXRoICAgICAgZD0iTTI0LjI3MiA2LjY2N2MwIDMuNjgyLTMuMDA1IDYuNjY2LTYuNzExIDYuNjY2LTMuNzA3IDAtNi43MTEtMi45ODQtNi43MTEtNi42NjZDMTAuODUgMi45ODUgMTMuODU0IDAgMTcuNTYgMGMzLjcwNiAwIDYuNzExIDIuOTg1IDYuNzExIDYuNjY3IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTEzLjQyMiAyNS4zMzNjMCAzLjY4Mi0zLjAwNCA2LjY2Ny02LjcxIDYuNjY3QzMuMDA0IDMyIDAgMjkuMDE1IDAgMjUuMzMzczMuMDA1LTYuNjY2IDYuNzExLTYuNjY2YzMuNzA3IDAgNi43MTEgMi45ODQgNi43MTEgNi42NjYiICAgICAgZmlsbD0iI0VDNTQyNCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMzUuMTIyIDI1LjMzM2MwLTMuNjgyLTMuMDA1LTYuNjY2LTYuNzExLTYuNjY2LTMuNzA3IDAtNi43MTEgMi45ODQtNi43MTEgNi42NjYgMCAzLjY4MiAzLjAwNCA2LjY2NyA2LjcxIDYuNjY3IDMuNzA3IDAgNi43MTItMi45ODUgNi43MTItNi42NjciICAgICAgZmlsbD0iIzQ0QzdGNCIgICAgLz4gIDwvZz48L3N2Zz4="
  />
  <Avatar
    shape="square"
    image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4gIDxnIGZpbGw9Im5vbmUiIGZpbGxSdWxlPSJldmVub2RkIj4gICAgPHBhdGggICAgICBkPSJNMzMuNDk4IDMuMDRBMjMuMTQ5IDIzLjE0OSAwIDAgMCAyMiAwdjE1LjExMmE3LjcxNiA3LjcxNiAwIDAgMSAzLjgzMyAxLjAxM2MzLjY2NiAyLjA4NiA0LjkyMiA2LjcwNyAyLjgwNSAxMC4zMkw0MS45MTUgMzRjNi4zNS0xMC44NCAyLjU4Mi0yNC43MDEtOC40MTctMzAuOTYiICAgICAgZmlsbD0iIzE2MjE0RCIgICAgLz4gICAgPHBhdGggICAgICBkPSJNMjIuNSAwQzEwLjA3NCAwIDAgMTAuMTQ4IDAgMjIuNjY2YzAgNC4xMjkgMS4wOTYgOCAzLjAxMSAxMS4zMzRsMTIuOTkzLTcuNTU2QTcuNTYzIDcuNTYzIDAgMCAxIDE1IDIyLjY2NmMwLTQuMTczIDMuMzU4LTcuNTU2IDcuNS03LjU1NiA0LjE0MiAwIDcuNS0zLjM4MiA3LjUtNy41NTVDMzAgMy4zODMgMjYuNjQyIDAgMjIuNSAwIiAgICAgIGZpbGw9IiNFQzU0MjQiICAgIC8+ICAgIDxwYXRoICAgICAgZD0iTTI5LjAwMSAyNS44MzRhNy41NTIgNy41NTIgMCAwIDEtMi43NDcgMi44MDVjLTMuNTkgMi4xMTctOC4xNzkuODYtMTAuMjUtMi44MDUtMi4wNzMtMy42NjYtNi42NjItNC45MjItMTAuMjUtMi44MDYtMy41OSAyLjExNy00LjgyIDYuODA1LTIuNzQ3IDEwLjQ3IDYuMjE2IDEwLjk5OSAxOS45ODMgMTQuNzY3IDMwLjc1IDguNDE3QTIyLjY1NSAyMi42NTUgMCAwIDAgNDIgMzMuNWwtMTIuOTk5LTcuNjY2eiIgICAgICBmaWxsPSIjNDRDN0Y0IiAgICAvPiAgICA8cGF0aCAgICAgIGQ9Ik0zMS43NSAzNS45OTRhNy40OTkgNy40OTkgMCAxIDEgNy41LTEyLjk4OCA3LjQ5OSA3LjQ5OSAwIDAgMS03LjUgMTIuOTg4IiAgICAgIGZpbGw9IiMxNjIxNEQiICAgIC8+ICA8L2c+PC9zdmc+"
  />
</Stack>
```

Here are a few more examples of `Avatars`:

```js
<Stack>
  <div>
    <Avatar
      size="small"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      title="Auth0 Management API"
    />
    <br />
    <Avatar
      size="medium"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      title="Auth0 Management API"
      subtitle="System API"
    />
    <br />
    <Avatar
      size="large"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
      title="Auth0 Management API"
      subtitle="System API"
    />
  </div>
  <div>
    <Avatar size="small" shape="square" icon="settings" title="Auth0 Management API" />
    <br />
    <Avatar
      size="medium"
      shape="square"
      icon="settings"
      title="Auth0 Management API"
      subtitle="System API"
    />
    <br />
    <Avatar
      size="large"
      shape="square"
      icon="settings"
      title="Auth0 Management API"
      subtitle="System API"
    />
  </div>
</Stack>
```
