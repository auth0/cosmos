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

### Composed dialog

Note: This implementation is experimental.

```js
<Dialog onClose={() => {}} open={true} composed>
  <Dialog.Header>
    <Dialog.Title>This is a simple title</Dialog.Title>
  </Dialog.Header>
  <Dialog.Body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut autem delectus inventore
      labore laboriosam laborum libero molestias obcaecati odit officia optio, praesentium quam
      quasi sapiente unde vel voluptatem voluptatum.
    </p>
  </Dialog.Body>
  <Dialog.Footer>
    <Button appearance="cta">Test</Button>
  </Dialog.Footer>
</Dialog>
```

### Composed dialog with tabs

Note: This implementation is experimental.

```js
class StatedDialogTabsExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newIndex) {
    this.setState({ selected: newIndex })
  }

  render() {
    return (
      <Dialog open={true}>
        <Tabs selected={this.state.selected} onSelect={this.handleChange}>
          <Tabs.Tab label="Test 1st tab">
            <Dialog.Header>
              <Dialog.Title>Test 1</Dialog.Title>
            </Dialog.Header>
            <p>Are you sure</p>

            {/* Adding a key is optional but recommended
            to avoid unexpected transitions between tab footer buttons */}
            <Dialog.Footer key="1st-tab-footer">
              <Button appearance="secondary">Cancel</Button>
              <Button appearance="cta">Send</Button>
            </Dialog.Footer>
          </Tabs.Tab>
          <Tabs.Tab label="Test 2nd tab">
            <Dialog.Header>
              <Dialog.Title>Test 2</Dialog.Title>
            </Dialog.Header>

            <Tooltip content="This is a tooltip which is soooo long that should go out of the dialog.">
              <Button>Hover me</Button>
            </Tooltip>

            <Dialog.Footer key="2nd-tab-footer">
              <Button appearance="cta">Enable add-on</Button>
            </Dialog.Footer>
          </Tabs.Tab>
        </Tabs>
      </Dialog>
    )
  }
}
```

## Accessibility

The component handles focus order and keyboard behavior following [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal).

The dialog's title is an `<h2>` by default. Make sure to adjust the heading level according to what makes sense on your document tree.

## Resources

- [modalzmodalzmodalz](https://modalzmodalzmodalz.com/)
- [It's a focus Trap](https://hackernoon.com/its-a-focus-trap-699a04d66fb5)
