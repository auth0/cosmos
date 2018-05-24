```meta
  category: Actions
  description: Displays an image (and optionally text) for a user or resource
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
