```meta
  category: Forms
  description: Use FileInput to upload files
```

`import { FileInput } from '@auth0/cosmos'`

```jsx
<FileInput {props}/>
```

## Managing state

Since the component itself doesn't manage any state, you will need to pass an
`items` array with the files you currently have at all times. 
You can use `onChange` to get file additions and deletions and mutate your local
`items` array.

```js
class FileInputState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <FileInput
        multiple
        items={this.state.items}
        onChange={event => {
          if (event.added) {
            const newItems = event.added
            this.setState({ items: [...this.state.items, ...newItems] })
          }

          if (event.deleted) {
            this.setState({
              items: this.state.items.filter((item, index) => !(index === event.deleted.index))
            })
          }
        }}
      />
    )
  }
}
```

## Using with Form.Field

This component works the same way as any other Cosmos' input, you can use it
along `Form.Field` in order to add things like a label, help text and errors.

```js
<Form.Field label="Certificates" helpText="Upload your domain's certificate to use in production.">
  <FileInput
    items={[
      { file: { name: 'certificate.pem', size: 3579 }, loading: true },
      { file: { name: 'certificate.pub', size: 1337 } }
    ]}
  />
</Form.Field>
```

### Expressing errors

```js
<Form.Field label="Certificates" error="The private key does not match the public key">
  <FileInput
    items={[
      { file: { name: 'certificate.pem', size: 3579 } },
      { file: { name: 'certificate.pub', size: 1337 } }
    ]}
  />
</Form.Field>
```

## Using custom list items

In the case the component's default list is not enough to represent your use
case, you can use `renderItem` to render a custom list element.

```js
<FileInput
  items={[
    { file: { name: 'certificate.pem', size: 3579 } },
    { file: { name: 'certificate.pub', size: 1337 } }
  ]}
  renderItem={(item, index, onDelete) => (
    <div key={item.file.name} style={{ border: '1px solid black', padding: '5px 15px' }}>
      <p>
        #{index + 1}: {item.file.name} ({FileInput.formatBytes(item.file.size)}){' '}
        <Button appearance="link" icon="delete" onClick={onDelete} />
      </p>
    </div>
  )}
/>
```
