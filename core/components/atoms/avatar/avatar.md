```meta
  category: Actions
  description: Displays an image representing a user or resource
  unstable: true
```

`import { Avatar } from '@auth0/cosmos'`

```jsx
<Avatar
  type="user"
  image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
  {props}
/>
```

You can use an `Avatar` to display an image that represents a user or a resource. You should use the `type` prop to specify the kind of item that the image represents.

```js
<Stack>
  <Avatar type="user" image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg" />
  <Avatar type="resource" image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg" />
</Stack>
```

You can use the `size` prop to render `Avatars` of various sizes.

```js
<div>
  <Stack>
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xsmall"
    />
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="small"
    />
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="medium"
    />
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="large"
    />
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xlarge"
    />
    <Avatar
      type="user"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xxlarge"
    />
  </Stack>
  <br />
  <Stack>
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="small"
    />
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="medium"
    />
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="large"
    />
  </Stack>
</div>
```

You can also display an avatar with an icon instead of an image by specifying an icon name in the `icon` property:

```js
<Stack>
  <Avatar type="resource" icon="clients" size="xsmall" />
  <Avatar type="resource" icon="clients" size="small" />
  <Avatar type="resource" icon="clients" size="medium" />
  <Avatar type="resource" icon="clients" size="large" />
  <Avatar type="resource" icon="clients" size="xlarge" />
  <Avatar type="resource" icon="clients" size="xxlarge" />
</Stack>
```

Lastly, you can display an avatar with an SVG as the image:

```js
<Avatar
  type="resource"
  image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
  size="large"
/>
```

## Gravatar images and initials

You may use user's email to fetch it's default gravatar image on its initials from the Auth0 CDN. Try changing one of the `example@auth0.com` emails below to your Gravatar email.

```js
<Stack>
  <Avatar size="xsmall" email="example@auth0.com" initials="AB" />
  <Avatar size="small" email="example@auth0.com" initials="CD" />
  <Avatar size="medium" email="example@auth0.com" initials="EF" />
  <Avatar size="large" email="example@auth0.com" initials="GH" />
  <Avatar size="xlarge" email="example@auth0.com" initials="IJ" />
</Stack>
```

## Default placeholder

If you don't provide an image or initials to the avatar block, it will display a default avatar.

```js
<div>
  <Stack>
    <Avatar type="user" size="xsmall" />
    <Avatar type="user" size="small" />
    <Avatar type="user" size="medium" />
    <Avatar type="user" size="large" />
    <Avatar type="user" size="xlarge" />
  </Stack>
  <Stack style={{ marginTop: 20 }}>
    <Avatar type="resource" size="xsmall" />
    <Avatar type="resource" size="small" />
    <Avatar type="resource" size="medium" />
    <Avatar type="resource" size="large" />
    <Avatar type="resource" size="xlarge" />
  </Stack>
</div>
```
