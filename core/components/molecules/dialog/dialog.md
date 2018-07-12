```meta
category: Layout
```

A <code>Dialog</code> builds on an <code>Overlay</code>, providing more styling and
structure around what is displayed. It allows setting a fixed width, and adds a
titlebar, close button, and a footer.

```jsx
class DialogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  setDialogState(open) {
    this.setState({ open })
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setDialogState(true)}>Show dialog</Button>
        <Dialog
          open={this.state.open}
          title="Example Dialog"
          onClose={() => this.setDialogState(false)}
          actions={[
            new Dialog.Action(
              'OK',
              () => {
                alert("You've performed the 'OK' action.")
              },
              'primary'
            ),
            new Dialog.Action('Cancel', () => {
              alert("You've performed the 'Cancel' action.")
            })
          ]}
        >
          Are you sure?
        </Dialog>
      </div>
    )
  }
}
```

## Passing buttons as actions

You can use pass a `<Button />` array as actions to a Dialog.

```js
class DialogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  setDialogState(open) {
    this.setState({ open })
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.setDialogState(true)}>Show dialog</Button>
        <Dialog
          open={this.state.open}
          title="Example Dialog"
          onClose={() => this.setDialogState(false)}
          actions={[
            <Button appearance="primary">OK</Button>,
            <Button appearance="secondary">Cancel</Button>
          ]}
        >
          Are you sure?
        </Dialog>
      </div>
    )
  }
}
```
