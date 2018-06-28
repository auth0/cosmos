```meta
  category: Text
  description: Displays a numeric indicator
```

`import { Badge } from '@auth0/cosmos'`

---

```jsx
<Badge {props}>99</Badge>
```

You can use the `appearance` prop to indicate the importance of the badge to the user. Here are some examples:

```js
<Stack>
  <Badge appearance="default">123</Badge>
  <Badge appearance="information">99</Badge>
  <Badge appearance="success">345</Badge>
  <Badge appearance="warning">6</Badge>
  <Badge appearance="danger">55</Badge>
</Stack>
```
