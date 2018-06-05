```meta
  category: Layout
  description: "Use this component to horizontally layout children"
```

`import { Stack } from '@auth0/cosmos'`

```jsx
<Stack {props}>
  <Button icon="copy" />
  <Button icon="rotate" />
  <Button icon="delete" />
</Stack>
```

---

## Examples

### Inline form

Use the 'stack' component to layout form elements in the same line.

Use it when you need components in the same horizontal alignment

```js
<Stack>
  <div>Login</div>
  <TextInput type="email" placeholder="email" />
  <TextInput type="password" placeholder="password" />
  <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
</Stack>
```

Use align for stacking elements without margin between them

```js
<Stack align="left">
  <Button icon="copy" />
  <Button icon="rotate" />
  <Button icon="delete" />
</Stack>
```

```js
<Stack align="right">
  <Button icon="copy" />
  <Button icon="rotate" />
  <Button icon="delete" />
</Stack>
```

Or if you wish to have more control over the width of each element, you can supply an array of widths in %

```js
<Stack widths={[10, 30, 30, 30]}>
  <div>Login</div>
  <TextInput type="email" placeholder="email" />
  <TextInput type="password" placeholder="password" />
  <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
</Stack>
```
