```meta
  category: Layout
  description: "Use this component to create a list"
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

The `List` default structure has a `List.Header`, `List.Body`, and `List.Footer` to distribute the content within a row.

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

You can nest any component within each section, for example as `Switch`.

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

The `List` has an optional expandable `List.Drawer` that you can nest within a `List.Item`. It will automatically generate the arrow and handle the toggle.

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

If you need to create a different distrubution from the default, you can nest any Layout within the `List.Item` for example a `StackLayout`.

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

You can make use of the `draggable` prop to make your list draggable and sortable.

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
