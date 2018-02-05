```meta
  category: Layout
  description: "Use this component to horizontally layout children"
```

`import Stack from 'cosmos/stack'`

## Examples

### Inline form

Use the 'stack' component to layout form elements in the same line.

```js
<Stack>
  <div>Login</div>
  <TextInput type="email" placeholder="email" />
  <TextInput type="password" placeholder="password" />
  <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
</Stack>
```
