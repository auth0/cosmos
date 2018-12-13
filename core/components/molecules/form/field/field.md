```meta
  category: Forms
```

`Form.Field` is a wrapper component inside supported in `Form`:

You can put any input element inside it like `TextInput`, `TextArea`, `Select`, `Switch`, `Radio`, etc.

`Form.Field` has a few props to make the form more descriptive for the user.

```jsx
<Form>
  <Form.Field {props}>
    <TextInput placeholder="Enter some text" />
  </Form.Field>
</Form>
```

## Examples

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Form>
        <Form.Field label="Field label">
          <TextInput
            type="text"
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field label="Long input">
          <TextArea placeholder="Add a lot of text here" />
        </Form.Field>
        <Form.Field label="Options list">
          <Select
            options={[
              { text: 'First option', value: '1', defaultSelected: true },
              { text: 'Second option', value: '2' },
              { text: 'Third option', value: '3' },
              { text: 'Fourth option', value: '4' }
            ]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
        <Form.Field label="Framework">
          <Radio
            name="example1"
            selected={this.state.selected}
            onChange={evt => this.handleChange(evt)}
          >
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
      </Form>
    )
  }
}
```

### Help text

Here's an example of providing some context to the user with `helpText`.

```js
<Form>
  <Form.TextInput
    label="Callback URL"
    type="text"
    placeholder="Enter something"
    helpText="Make sure to specify the protocol, http:// or https://"
  />
</Form>
```

If you need more control, `helpText` also accepts a React component. You can use this to add links
or other rich formatting to displayed text.

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    helpText={
      <span>
        Note that querystrings <strong>are not</strong> taken into account when validating these
        URLs. Read more about this <Link href="https://auth0.com">here</Link>.
      </span>
    }
  />
</Form>
```

### Actions

You can add actions to a field by passing an array of `{ icon, handler }`:

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    actions={[
      { icon: 'copy', label: 'Copy URL', handler: e => console.log(e) },
      { icon: 'delete', label: 'Delete URL', handler: e => console.log(e) }
    ]}
  />
</Form>
```

### Validation

We leave the logic part of validation to you the developer, you can pass `error` back to the field and it will take care of the presentation.

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    defaultValue="auth0.com"
    error="This is not a valid URL"
    helpText="Make sure to specify the protocol, http:// or https://"
  />
</Form>
```

### Custom component (advanced)

Layout is taken care by `Form.Field`, it sets the position of `label`, `helperText`, etc.

All the props are passed on to the custom component, so you can set the id, error styles, actions customised to the use case.

```js
<Form>
  <Form.Field label="Height" helpText="How tall are you?" error="Show only in the first field">
    <Stack>
      <TextInput placeholder="Value" hasError />
      <Select options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]} />
      <Button appearance="link" icon="copy" label="Copy value" onClick={e => console.log(e)} />
    </Stack>
  </Form.Field>
</Form>
```
