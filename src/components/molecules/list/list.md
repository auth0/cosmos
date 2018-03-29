```meta
  category: Layout
  description: "Use this component to layout a list of components vertically"
```

`import { List } from '@auth0/cosmos'`

---

```jsx
<List {props}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</List>
```

## Examples

You can pass an optional label for the list

```js
<List label="Short List">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</List>
```

Use `List` with `Stack` to create complex structures like this:

```js
<List label="Social">
  <Stack>
    <div>github</div>
    <div>GitHub</div>
    <Switch on />
  </Stack>
  <Stack>
    <div>google-oauth2</div>
    <div>Google</div>
    <Switch />
  </Stack>
</List>
```
