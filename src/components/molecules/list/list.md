```meta
  category: Layout
```

`import List from 'cosmos/list'`

---

Use this component to layout a list of `components` vertically

```js props
<List {props}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</List>
```

#### Examples

You can pass an optional label for the list

```js
<List label="Short List">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</List>
```

Use `List` with `Stack` to create complex structures like this:

```js multiple
const connections = [
  { name: 'GitHub', id: 'github', enabled: true },
  { name: 'Google', id: 'google-oauth2', enabled: false }
]

render(
  <List label="Social">
    {connections.map(connection => (
      <Stack key={connection.id}>
        <div>{connection.id}</div>
        <div>{connection.name}</div>
        <Switch on={connection.enabled} />
      </Stack>
    ))}
  </List>
)
```
