```meta
category: Layout
```

A <code>Dialog</code> opens a modal dialog in a layer above the existing UI.
It can be used to involve the user temporarily in a different context; for example,
you can use a Dialog to ask a user a question or confirm that they want to perform
an action.

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
        >
          <Dialog.Body>Are you sure?</Dialog.Body>
          <Dialog.Footer>
            <Button appearance="primary" onClick={() => alert("You've performed the 'OK' action.")}>
              OK
            </Button>
            <Button
              appearance="secondary"
              onClick={() => alert("You've performed the 'Cancel' action.")}
            >
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}
```

## Form inside Dialog

You can use add actions inside `Dialog.Footer` for the form. Use the `size` prop to get a wider dialog.

```js
class DialogContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  setDialogState(open) {
    this.setState({ open })
  }

  save() {}

  render() {
    return (
      <div>
        <Button onClick={() => this.setDialogState(true)}>Show dialog</Button>
        <Dialog
          open={this.state.open}
          title="Example Dialog"
          size="large"
          onClose={() => this.setDialogState(false)}
        >
          <Form>
            <Dialog.Body>
              <Form.TextInput
                label="Application Name"
                type="text"
                placeholder="What's your application called?"
              />
              <Form.Select
                label="Application Type"
                options={[
                  { text: 'Native', value: 'native', defaultSelected: true },
                  { text: 'Non Interactive Application', value: 'non-interactive' },
                  { text: 'Regular Web Application', value: 'regular' },
                  { text: 'Single Page Application', value: 'spa' }
                ]}
                helpText="The type of application will determine which settings you can configure from the dashboard."
              />
            </Dialog.Body>
            <Dialog.Footer>
              <Form.Actions
                primaryAction={{ label: 'Save Changes', handler: () => {} }}
                secondaryActions={[{ label: 'Cancel', handler: () => {} }]}
              />
            </Dialog.Footer>
          </Form>
        </Dialog>
      </div>
    )
  }
}
```
