```meta
  category: Layout
  description: Show a message intended to draw the user's attention
  unstable: true
```

`import Alert from '@auth0/cosmos'`

The `Alert` component should be used to draw the user's attention to a message.

```jsx
<Alert {props} defaults={{type: "warning", title: "Notice!", text: "This is an important message!"}} />
```

## Examples

### Alert types

There are multiple alert types for different situations

```js
<div>
  <Alert type="default" title="FYI!" text="Just a regular message" />
  <br />
  <Alert type="information" title="Hi!" text="You should probably know this" />
  <br />
  <Alert type="success" title="Good job!" text="You did the thing!" />
  <br />
  <Alert type="danger" title="Oh no!" text="We've got bad news" />
  <br />
  <Alert type="warning" title="Notice!" text="You should pay attention" />
</div>
```

### Persistent alerts

By default, alerts can be dismissed by the user. You can disable that behaviour and make the alert persistent by passing `dismissible={false}`

```js
<div>
  <Alert type="information" title="Notice!" text="You can dismiss me. Go ahead and try" />
  <br />
  <Alert dismissible={false} type="warning" title="Notice!" text="There's no cross button on me" />
</div>
```

### Auto dismiss

Alerts can be made to dismiss on their own by using the `dismissAfterSeconds` prop

```js
<div>
  There was an alert here ⬇️
  <br />
  <br />
  <Alert
    dismissAfterSeconds={10}
    type="warning"
    title="Notice!"
    text="I'm going to disappear soon"
  />
</div>
```
