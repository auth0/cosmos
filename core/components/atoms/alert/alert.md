```meta
  category: Layout
  description: Show a message intended to draw the user's attention
  unstable: true
```

`import { Alert } from '@auth0/cosmos'`

The `Alert` component should be used to draw the user's attention to a message.

```jsx
<Alert {props} defaults={{type: "warning", icon:"warning", title: "Notice!"}}>This is an important message!</Alert>
```

## Examples

### Alert types

There are multiple alert types for different situations

```js
<div>
  <Alert icon="notes" type="default" title="FYI!">
    Just a regular message
  </Alert>
  <br />
  <Alert icon="megaphone" type="information" title="Hi!">
    You should probably know this
  </Alert>
  <br />
  <Alert icon="check-circle" type="success" title="Good job!">
    You did the thing!
  </Alert>
  <br />
  <Alert icon="danger" type="danger" title="Oh no!">
    We've got bad news
  </Alert>
  <br />
  <Alert icon="warning" type="warning" title="Notice!">
    You should pay attention
  </Alert>
</div>
```

### Persistent alerts

By default, alerts can be dismissed by the user. You can disable that behaviour and make the alert persistent by passing `dismissible={false}`

```js
<div>
  <Alert type="information" title="Notice!">
    You can dismiss me. Go ahead and try
  </Alert>
  <br />
  <Alert dismissible={false} type="warning" title="Notice!">
    There's no cross button on me
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
  <Alert dismissAfterSeconds={10} type="warning" title="Notice!">
    I'm going to disappear soon
  </Alert>
</div>
```
