```meta
  category: Actions
  description: Displays an image representing a User or Resource
  unstable: true
```

`import { Avatar } from '@auth0/cosmos'`

```jsx
<Avatar
  type="user"
  image="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
  {props}
/>
```

## Usage

### User and Resource types

You can use an Avatar to display an image that represents a User or a Resource. A Resource can be any entity found in Auth0: Applications, APIs, Connections, Extensions, etc. Custom images like logos are also considered a resource when they are representing such entities. Each type has a distinctive shape: User avatars are rounded and Resource avatars are squared. An avatar can be enhanced with text via the [Avatar Block](/docs/#/component/avatar-block).

```js
<Stack>
  <Avatar
    type="user"
    size="large"
    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
  />
  <Avatar
    type="resource"
    size="large"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
  />
</Stack>
```

## Examples

### Sizes

The avatar is available in 6 sizes to accommodate different use cases.

```js
<div>
  <Stack>
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="xsmall"
    />
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="small"
    />
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="medium"
    />
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="large"
    />
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="xlarge"
    />
    <Avatar
      type="user"
      image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
      size="xxlarge"
    />
  </Stack>
  <br />
  <br />
  <Stack>
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xsmall"
    />
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
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xlarge"
    />
    <Avatar
      type="resource"
      image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
      size="xxlarge"
    />
  </Stack>
</div>
```

### Gravatar images and initials for Users

You may use user's email to fetch it's default Gravatar image. Be sure to set the initials as a fallback. Try changing one of the `example@auth0.com` emails below to your Gravatar email.

```js
<Stack>
  <Avatar size="large" email="example@auth0.com" initials="AB" />
  <Avatar size="large" email="example@auth0.com" initials="CD" />
  <Avatar size="large" email="example@auth0.com" initials="EF" />
  <Avatar size="large" email="example@auth0.com" initials="GH" />
  <Avatar size="large" email="example@auth0.com" initials="IJ" />
</Stack>
```

### Icons for Resources

Sometimes a Resource can be represented with an icon. This is used a placeholder image before a custom image is set.

```js
<Stack>
  <Avatar type="resource" icon="clients" size="large" />
  <Avatar type="resource" icon="apis" size="large" />
  <Avatar type="resource" icon="connections" size="large" />
  <Avatar type="resource" icon="sso-integrations" size="large" />
  <Avatar type="resource" icon="extensions" size="large" />
</Stack>
```

### Default placeholder

If you don't provide any image or initials, the avatar will display a default image.

```js
<div>
  <Stack>
    <Avatar type="user" size="large" />
    <Avatar type="resource" size="large" />
  </Stack>
</div>
```
