```meta
  category: Layout
```

`import Stack from 'cosmos/stack'`

---

Use this component to horizontally layout children

#### Examples

Use it when you need components in the same horizontal alignment

```js
<Stack>
  <div>Login</div>
  <TextInput type="email" placeholder="email" />
  <TextInput type="password" placeholder="password" />
  <Switch on accessibleLabels={['Remember  me', 'Dont remember me']} />
</Stack>
```

Use compressed for stacking elements without margin between them

```js
<Stack compressed>
  <Button icon="copy" />
  <Button icon="reveal" />
  <Button icon="trash" />
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
