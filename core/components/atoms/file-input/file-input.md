```meta
  category: Forms
  description: Use FileInput to upload files
```

`import { FileInput } from '@auth0/cosmos'`

```jsx
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
