```meta
  category: Layout
  description: "Use this component to layout a list of components vertically"
```

`import { List } from '@auth0/cosmos'`

---

```jsx
<List {props}>
  <List.Item>
    one
  </List.Item>
  <List.Item>
    two
  </List.Item>
  <List.Item>
    three
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

### Default structure with switched

```js
<List>
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

### Default structure with expandable drawer

```js
<List>
  <List.Item>
    <List.Header>
      <RowLayout gutter="none">
        <Heading size={3}>M2M</Heading>
        <Paragraph>CLIENT ID whatever</Paragraph>
      </RowLayout>
    </List.Header>
    <List.Footer>
      <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
    </List.Footer>
    <List.Drawer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
      Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius sit
      amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
    </List.Drawer>
  </List.Item>
  <List.Item>
    <List.Header>
      <RowLayout gutter="xsmall">
        <Heading size={3}>M2M</Heading>
        <Paragraph>CLIENT ID whatever</Paragraph>
      </RowLayout>
    </List.Header>
    <List.Footer>
      <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
    </List.Footer>
    <List.Drawer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
      Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius sit
      amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
    </List.Drawer>
  </List.Item>
  <List.Item>
    <List.Header>
      <RowLayout gutter="xsmall">
        <Heading size={3}>M2M</Heading>
        <Paragraph>CLIENT ID whatever</Paragraph>
      </RowLayout>
    </List.Header>
    <List.Footer>
      <Switch on labelPosition="left" accessibleLabels={['AUTHORIZED', 'NOT AUTHORIZED']} />
    </List.Footer>
    <List.Drawer>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporellentesque.
      Risus ultricies tristique nulla aliquet enim. Proin libero nunc consequat interdum varius sit
      amet. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt.
    </List.Drawer>
  </List.Item>
</List>
```

### Basic structure with StackLayout and different column size

```js
<List>
  <List.Item>
    <StackLayout space={[1.3, 1, 'none']} distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>

  <List.Item>
    <StackLayout space={[1.3, 1, 'none']} distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>

  <List.Item>
    <StackLayout space={[1.3, 1, 'none']} distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>
</List>
```

### Basic structure with StackLayout and 4 columns

```js
<List>
  <List.Item>
    <StackLayout distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>

  <List.Item>
    <StackLayout distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>

  <List.Item>
    <StackLayout distribution="spaceBetween">
      <Heading size={4}>Heading</Heading>
      <Paragraph>Something</Paragraph>
      <Paragraph>Something</Paragraph>

      <ButtonGroup compressed>
        <Button icon="pencil" />
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </StackLayout>
  </List.Item>
</List>
```

### Dragable List

```js
<List draggable>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
    <List.Footer>
      <ButtonGroup>
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
    <List.Footer>
      <ButtonGroup>
        <Button icon="copy" />
        <Button icon="delete" />
      </ButtonGroup>
    </List.Footer>
  </List.Item>
  <List.Item>
    <List.Header>Empty Rule</List.Header>
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
