```meta
  category: Actions
  description: Avatar component contains images.
```

`import { Avatar } from 'auth0-cosmos'`

```jsx
<Avatar image='https://cdn.auth0.com/website/cosmos/cosmos-logo.svg' {props} />
```

## Example

### Avatar only with image

```js
<div>
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="small" />
  <br />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="medium" />
  <br />
  <Avatar image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg" size="large" />
</div>
```

### Avatar with username

```js
<div>
  <Avatar
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    size="small"
    name="Cosmos DS"
  />
  <br />
  <Avatar
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    size="medium"
    name="Cosmos DS"
  />
  <br />
  <Avatar
    image="https://cdn.auth0.com/website/cosmos/cosmos-logo.svg"
    size="large"
    name="Cosmos DS"
  />
</div>
```
