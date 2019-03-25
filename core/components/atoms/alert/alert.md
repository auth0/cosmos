---
category: Layout
description: Show a message intended to draw the user's attention
---

`import { Alert } from '@auth0/cosmos'`

The `Alert` component should be used to draw the user's attention to a message.

```jsx
<Alert {props} defaults={{appearance: "warning", icon:"warning", title: "Notice!"}}>This is an important message!</Alert>
```

## Examples

### Alert appearance

There are multiple alert appearance for different situations

```js
<div>
  <Alert icon="notes" appearance="default" title="FYI!">
    Just a regular message
  </Alert>
  <br />
  <Alert icon="megaphone" appearance="information" title="Hi!">
    You should probably know this
  </Alert>
  <br />
  <Alert icon="check-circle" appearance="success" title="Good job!">
    You did the thing!
  </Alert>
  <br />
  <Alert icon="danger" appearance="danger" title="Oh no!">
    We have bad news
  </Alert>
  <br />
  <Alert icon="warning" appearance="warning" title="Notice!">
    You should pay attention
  </Alert>
</div>
```

### Persistent alerts

By default, alerts can be dismissed by the user. You can disable that behaviour and make the alert persistent by passing `dismissible={false}`

```js
<div>
  <Alert appearance="information" title="Notice!">
    You can dismiss me. Go ahead and try
  </Alert>
  <br />
  <Alert dismissible={false} appearance="warning" title="Notice!">
    There is no cross button on me
  </Alert>
</div>
```

### Auto dismiss

Alerts can be made to dismiss on their own by using the `dismissAfterSeconds` prop

```js
<div>
  There was an alert here ⬇️
  <br />
  <br />
  <Alert dismissAfterSeconds={10} appearance="warning" title="Notice!">
    I am going to disappear soon
  </Alert>
</div>
```
