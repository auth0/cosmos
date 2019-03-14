```meta
  category: Layout
  description: "Use this component to layout a list of components vertically"
```

`import { DataList } from '@auth0/cosmos'`

---

```jsx
<DataList {props}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</DataList>
```

## Examples

You can pass an optional label for the list

```js
<DataList label="Short DataList">
  <div>one</div>
  <div>two</div>
  <div>three</div>
</DataList>
```

Use `DataList` with `Stack` to create complex structures like this:

```js
<DataList label="Social">
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
</DataList>
```

### Draggable DataList

You can make use of the `draggable` prop in order to make your list draggable & sortable.

```js
class DraggableListExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: ['Item #1', 'Item #2', 'Item #3']
    }

    this.handleDragEnd = this.handleDragEnd.bind(this)
  }

  handleDragEnd(oldItems, newItems) {
    this.setState({
      items: DataList.arrayMove(this.state.items, oldItems, newItems)
    })
  }

  render() {
    return (
      <DataList draggable onDragEnd={this.handleDragEnd}>
        {this.state.items.map(item => (
          <DataList.Item>{item}</DataList.Item>
        ))}
      </DataList>
    )
  }
}
```
