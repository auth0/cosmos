```meta
  category: Forms
  description: Use FileInput to upload files
```

`import { FileInput } from '@auth0/cosmos'`

```jsx
<FileInput {props}/>
```

## Managing state

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

```js
<Form.Field label="Certificates">
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
