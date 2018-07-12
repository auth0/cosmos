```meta
  category: Text
  description: Displays additional information about another piece of the UI
```

`import { Label } from '@auth0/cosmos'`

---

```jsx
<Label {props}>Label Text</Label>
```

You can use the `appearance` prop to indicate the importance of the label to the user. Here are some examples:

```js
<Stack>
  <Label appearance="default">Default</Label>
  <Label appearance="information">Information</Label>
  <Label appearance="success">Success</Label>
  <Label appearance="warning">Warning</Label>
  <Label appearance="danger">Danger</Label>
</Stack>
```
