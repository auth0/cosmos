```meta
category: Layout
```

A <code>Dialog</code> opens a modal dialog in a layer above the existing UI.

It can be used to involve the user temporarily in a different context; for example, you can use a Dialog to ask a user a question or confirm that they want to perform an action.

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
            <Button
              appearance="primary"
              onClick={() => {
                alert("You've performed the 'OK' action.")
              }}
            >
              OK
            </Button>,
            <Button
              appearance="secondary"
              onClick={() => {
                alert("You've performed the 'Cancel' action.")
              }}
            >
              Cancel
            </Button>
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

## Usage

As a general rule, try to avoid using dialogs: They are disruptive, invasive, and interrupt the user's flow.

Use dialogs only to allow the user to maintain the context of a particular task.

Good use of dialogs are:

- **Transactional:** Dialogs that allow user to validate irreversible actions.

Try to avoid dialogs for:

- **Passive:** Dialogs that can be replaced for notifications.
- **Input:** Dialogs that include forms.

When you see the need to create a dialog, ask yourself if this interaction must completly stop the user's flow. If the answer is no, then consider other options to display the information.

## Examples

Coming soon...

## Accessibility

The component handles focus order and keyboard behavior following [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The dialog's title is an `<h2>` by default. Make sure to adjust the heading level according to what makes sense on your document tree.

## Resources

- [modalzmodalzmodalz](https://modalzmodalzmodalz.com/)
- [It's a focus Trap](https://hackernoon.com/its-a-focus-trap-699a04d66fb5)
