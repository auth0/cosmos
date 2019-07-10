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
      files: []
    }
  }

  render() {
    return (
      <FileInput
        multiple
        files={this.state.files}
        onAttach={files => this.setState({ files: [...this.state.files, ...files] })}
        onDelete={fileIndex =>
          this.setState({
            files: this.state.files.filter((file, index) => !(index === fileIndex))
          })
        }
      />
    )
  }
}
```

## Using with Form.Field

```js
<Form.Field label="Certificates">
  <FileInput
    files={[{ name: 'certificate.pem', size: 3579 }, { name: 'certificate.pub', size: 1337 }]}
  />
</Form.Field>
```

### Expressing errors

```js
<Form.Field label="Certificates" error="The private key does not match the public key">
  <FileInput
    files={[{ name: 'certificate.pem', size: 3579 }, { name: 'certificate.pub', size: 1337 }]}
  />
</Form.Field>
```

## Using custom list items

```js
<FileInput
  files={[{ name: 'certificate.pem', size: 3579 }, { name: 'certificate.pub', size: 1337 }]}
  renderItem={(file, index) => (
    <div style={{ border: '1px solid black', padding: '5px 15px' }}>
      <p>
        #{index + 1}: {file.name} ({FileInput.formatBytes(file.size)}){' '}
        <Button appearance="link" icon="delete" />
      </p>
    </div>
  )}
/>
```
