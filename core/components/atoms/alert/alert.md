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
