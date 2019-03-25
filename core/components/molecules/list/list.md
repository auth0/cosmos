---
category: Layout
description: 'Use this component to layout a list of components vertically'
---

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

### Draggable List

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
      items: List.arrayMove(this.state.items, oldItems, newItems)
    })
  }

  render() {
    return (
      <List draggable onDragEnd={this.handleDragEnd}>
        {this.state.items.map(item => (
          <List.Item>{item}</List.Item>
        ))}
      </List>
    )
  }
}
```
