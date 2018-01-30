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

```js multiple
const connections = [
  { name: 'GitHub', id: 'github', enabled: true },
  { name: 'Google', id: 'google-oauth2', enabled: false }
]

render(
  <List label="Social">
    {connections.map(connection => (
      <List.Item key={connection.id}>
        <div>{connection.id}</div>
        <div>{connection.name}</div>
        <Switch on={connection.enabled} />
      </List.Item>
    ))}
  </List>
)
```

If you wish to have more control over the width of each element, you can supply an array of widths to `List.Item` in %

```js multiple
const connections = [
  { name: 'GitHub', id: 'github', enabled: true },
  { name: 'Google', id: 'google-oauth2', enabled: false }
]

render(
  <List label="Social">
    {connections.map(connection => (
      <List.Item key={connection.id} widths={[30, 50, 20]}>
        <div>{connection.id}</div>
        <div>{connection.name}</div>
        <Switch on={connection.enabled} />
      </List.Item>
    ))}
  </List>
)
```
