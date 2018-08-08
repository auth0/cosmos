```meta
  category: Actions
  description: Displays an image and supporting text for a user or resource
  unstable: true
```

`import { AvatarBlock } from '@auth0/cosmos'`

```jsx
<AvatarBlock
  type="user"
  image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
  title="Auth0 Management API"
  subtitle="System API"
  {props}
/>
```

`AvatarBlock` builds on [Avatar](/docs/atoms/avatar), allowing you to display a title and subtitle along with the image.

```js
<Stack>
  <AvatarBlock
    type="user"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
  />
  <AvatarBlock
    type="user"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
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
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
  />
  <AvatarBlock
    type="user"
    size="default"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
    subtitle="Subtitle"
  />
  <AvatarBlock
    type="user"
    size="large"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
    subtitle="Subtitle"
  />
</Stack>
```

You can pass a `href` prop to link the title to another page

```js
<Stack>
  <AvatarBlock
    type="user"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
    href="https://auth0.com"
    subtitle="Link opens in same tab"
  />
  <AvatarBlock
    type="user"
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    title="Title"
    href={{ url: 'https://auth0.com', target: '_blank' }}
    subtitle="Link opens in new tab"
  />
</Stack>
```
