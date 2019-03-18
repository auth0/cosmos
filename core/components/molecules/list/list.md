```meta
  category: Layout
  description: "Use this component to layout a list of components vertically"
```

`import { List } from '@auth0/cosmos'`

---

```jsx
<List {props}>
  <List.Item>
    <div>one</div>
  </List.Item>
  <List.Item>
    <div>two</div>
  </List.Item>
  <List.Item>
    <div>three</div>
  </List.Item>
</List>
```

## Examples

### Default structure

```js
<List>
  <List.Item>
    <List.Header>
      <AvatarBlock
        type="resource"
        icon="apis"
        title="Auth0 Management"
        subtitle="System API"
        size="default"
      />
    </List.Header>
    <List.Body>
      <span>ID:</span> <Code>98367683783</Code>
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
  <List.Item>
    <List.Header>
      <AvatarBlock
        type="resource"
        icon="apis"
        title="Auth0 Management"
        subtitle="System API"
        size="default"
      />
    </List.Header>
    <List.Body>
      <span>ID:</span> <Code>98367683783</Code>
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>

  <List.Item>
    <List.Header>
      <AvatarBlock
        type="resource"
        icon="apis"
        title="Auth0 Management"
        subtitle="System API"
        size="default"
      />
    </List.Header>
    <List.Body>
      <span>ID:</span> <Code>98367683783</Code>
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
</List>
```

```js
<List sortable>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
    <List.Body>
      <Switch hideAccessibleLabels />
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
    <List.Body>
      <Switch hideAccessibleLabels />
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
    <List.Body>
      <Switch hideAccessibleLabels />
    </List.Body>
    <List.Footer>
      <ButtonGroup>
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
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
