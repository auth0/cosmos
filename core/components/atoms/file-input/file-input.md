```meta
  category: Forms
  description: Use FileInput to let the user upload one or more files
```

`import { FileInput } from '@auth0/cosmos'`

```jsx
<FileInput {props} />
```

## Managing the state

```js
<FileInput
  items={[{ fileName: 'photo.jpg' }, { fileName: 'cert.pem' }]}
  onAttach={file => {
    // Handle the new file
  }}
  onDelete={fileIndex => {
    // Remove the file from the `items` array,
    // remove from the server.
  }}
/>
```

### Practical example

```js
class FileInputExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  uploadToServer(file) {
    // Actual upload simulated
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  removeFromServer(filename) {
    // Actual upload simulated
    return new Promise(resolve => setTimeout(resolve, 1000))
  }

  render() {
    return (
      <FileInput
        items={this.state.items}
        onAttach={(file, info) => {
          this.setState({ items: [...this.state.items, { name: info.name, progress: true }] })

          this.uploadToServer(file).then(() => {
            this.setState({
              items: this.state.items.map(
                item => (item.name === info.name ? { name: info.name, progress: false } : item)
              )
            })
          })
        }}
        onDelete={fileIndex => {
          this.setState({
            items: this.state.items.map(
              (item, idx) => (idx === fileIndex ? { name: info.name, progress: true } : item)
            )
          })

          this.removeFromServer(this.state.items[fileIndex].name).then(() => {
            this.setState({
              items: this.state.items.filter((item, idx) => !(idx === fileIndex))
            })
          })
        }}
      />
    )
  }
}
```
