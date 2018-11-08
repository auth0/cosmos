```meta
  category: Actions
  description: Displays an image and supporting text for a user or resource
  unstable: true
```

`import { AvatarBlock } from '@auth0/cosmos'`

```jsx
<AvatarBlock
  type="user"
  image="https://cdn.auth0.com/website/cosmos/cosmos-logo-avatar.svg"
  title="Auth0 Management API"
  subtitle="System API"
  {props}
/>
```

`AvatarBlock` builds on [Avatar](/docs/#/components/avatar), allowing you to display a title and subtitle along with the image.

```js
<Stack>
  <AvatarBlock
    type="user"
    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
    title="Title"
  />
  <AvatarBlock
    type="user"
    image="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=aa3a807e1bbdfd4364d1f449eaa96d82"
    title="Title"
    subtitle="Subtitle"
  />
</Stack>
```

You can use the `size` prop to render `AvatarBlocks` of various sizes. Note: using the `compact` size with a subtitle will cause it to be rendered as invisible.

```js
<Stack>
  <AvatarBlock
    type="user"
    size="compact"
    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
    title="Title"
  />
  <AvatarBlock
    type="user"
    size="default"
    image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
    title="Title"
    subtitle="Subtitle"
  />
  <AvatarBlock
    type="user"
    size="large"
    image="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=aa3a807e1bbdfd4364d1f449eaa96d82"
    title="Title"
    subtitle="Subtitle"
  />
</Stack>
```

You can pass a `link` prop to link the title to another page. It supports both `string` and object with `{href, target}`

```js
<Stack>
  <AvatarBlock
    type="user"
    image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=707b9c33066bf8808c934c8ab394dff6"
    title="Title"
    link="https://auth0.com"
    subtitle="Link opens in same tab"
  />
  <AvatarBlock
    type="user"
    image="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=aa3a807e1bbdfd4364d1f449eaa96d82"
    title="Title"
    link={{ href: 'https://auth0.com', target: '_blank' }}
    subtitle="Link opens in new tab"
  />
</Stack>
```

## Default placeholder

If you don't provide an image or initials to the avatar block, it will display a default avatar.

```js
<AvatarBlock type="user" title="John Appleseed" subtitle="john.appleseed@auth0.com" />
```

```js
<AvatarBlock type="resource" title="Some Auth0 Resource" subtitle="Example Application" />
```
