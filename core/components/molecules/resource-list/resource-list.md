```meta
  category: Layout
  description: "A data-driven list component"
  unstable: true
```

`import { ResourceList } from '@auth0/cosmos'`

The `ResourceList` is a data-driven list. You should use it when you have a list of _resources_; that is, records or entities loaded from a database of some kind.

The only required prop is `items`, which should be a list of items to display.

```jsx
<ResourceList
  items={[
    {
      title: 'Item 1',
      subtitle: 'Native',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
    },
    {
      title: 'Item 2',
      subtitle: 'Non Interactive',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
    },
    {
      title: 'Item 3',
      subtitle: 'Regular Web App',
      image:
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
    }
  ]}
  actions={[
    <Button icon="settings" onClick={() => {}} label="Settings" />,
    <Button icon="delete" onClick={() => {}} label="Delete" />
  ]}
  onItemClick={(evt, item) => alert(`${item.title} (${item.subtitle}) was clicked!`)}
/>
```

## Actions

If you pass an array of `actions` to the `ResourceList`, each item in the list will be given the same set of actions. When the user activates one of these actions, the function specified by `handler` will be called with the click event and the entry in the `items` array corresponding to the item that was clicked.

Here's an example of an action handler:

```
const deleteItem = (evt, item) => {
  alert(`You clicked the delete action for item ${item.title}!`);
}
```

If necessary, you can override the actions for a specific list item by giving the item an `actions` property:

```js
<ResourceList
  items={[
    { title: 'Item 1', subtitle: 'Example item' },
    { title: 'Item 2', subtitle: 'Example item' },
    {
      title: 'Item 3',
      subtitle: 'Example item',
      actions: [
        <Button icon="settings" onClick={() => {}} label="Settings" disabled />,
        <Button icon="delete" onClick={() => {}} label="Delete" />
      ]
    }
  ]}
  actions={[
    <Button icon="settings" onClick={() => {}} label="Settings" />,
    <Button icon="delete" onClick={() => {}} label="Delete" />
  ]}
/>
```

If you just want to detect when the item itself is clicked, you can just pass an event handler via `onItemClick` prop.

## Advanced: Manual Item Rendering

If you need more control over the rendering of list items, you can pass a `renderItem` function to the `ResourceList`. This function will be called once for each list item, and should return a [ResourceList.Item](#/component/resource-list-item). The `ResourceList.Item` can have child elements, which will be rendered as a "body" of the item, between the header and the actions.

```js
<ResourceList
  items={[
    { title: 'Item 1', subtitle: 'Example item', identifier: 'abc123' },
    { title: 'Item 2', subtitle: 'Example item', identifier: 'def456' },
    { title: 'Item 3', subtitle: 'Example item', identifier: 'ghi789' }
  ]}
  renderItem={item => (
    <ResourceList.Item {...item}>
      ID: <Code>{item.identifier}</Code>
    </ResourceList.Item>
  )}
  actions={[
    <Button icon="settings" onClick={() => {}} label="Settings" />,
    <Button icon="delete" onClick={() => {}} label="Delete" />
  ]}
/>
```

## Advanced: Drag and sort items

You can use the `sortable` prop to make the list sortable by dragging and dropping the items.
You will need to implement the `onSortEnd` method in order to reorder the items using the provided
`arrayMove` function

```js
class SortableResourceListExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        { title: 'Title One', subtitle: 'Subtitle One', href: 'https://auth0.com/' },
        { title: 'Title Two', subtitle: 'Subtitle Two', href: 'https://auth0.com/' },
        { title: 'Title Three', subtitle: 'Subtitle Three', href: 'https://auth0.com/' }
      ]
    }
  }
  onSortEnd({ oldIndex, newIndex }) {
    // The arrayMove example does not work on docs
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return (
      <ResourceList
        actions={[
          { icon: 'settings', handler: function() {}, label: 'Settings' },
          { icon: 'delete', handler: function() {}, label: 'Delete' }
        ]}
        sortable
        items={this.state.items}
        onSortEnd={event => this.onSortEnd(event)}
      />
    )
  }
}
```
