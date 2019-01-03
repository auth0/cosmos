```meta
  category: Forms
```

`Form.Field` is a wrapper component inside supported in `Form`.

You can put any input element inside it like another cosmos component `TextInput`, `Select`, etc. or your own component.

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
        <Form.Field label="Agree">
          <Radio
            name="example1"
            selected={this.state.selected}
            onChange={evt => this.handleChange(evt)}
          >
            <Radio.Option value="one">One</Radio.Option>
            <Radio.Option value="two">Two</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Field label="Framework">
          <Checkbox.Group name="example1" selected={['one', 'two']}>
            <Checkbox name="one" value="one">
              Option 1
            </Checkbox>
            <Checkbox name="two" value="two">
              Option 2
            </Checkbox>
          </Checkbox.Group>
        </Form.Field>
        <Form.Field label="Custom field">
          <input type="file" />
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
  <Form.Field
    label="Callback URL"
    helpText="Make sure to specify the protocol, http:// or https://"
  >
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
</Form>
```

If you need more control, `helpText` also accepts a React component. You can use this to add links
or other rich formatting to displayed text.

```js
<Form>
  <Form.Field
    label="Allowed URLs"
    helpText={
      <span>
        Note that querystrings <strong>are not</strong> taken into account when validating these
        URLs. Read more about this <Link href="https://auth0.com">here</Link>.
      </span>
    }
  >
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
</Form>
```

### Actions

You can add actions to a `TextInput` by passing an array of `Button`:

```js
<Form>
  <Form.Field label="Allowed URLs">
    <TextInput
      type="text"
      placeholder="Enter something"
      actions={[
        <Button icon="copy" onClick={e => console.log(e)} />,
        <Button icon="delete" onClick={e => console.log(e)} />
      ]}
    />
  </Form.Field>
</Form>
```

### Validation

We leave the logic part of validation to you the developer, you can pass `error` back to the field and it will take care of the presentation.

```js
<Form>
  <Form.Field
    label="Allowed URLs"
    error="This is not a valid URL"
    helpText="Make sure to specify the protocol, http:// or https://"
  >
    <TextInput type="text" placeholder="Enter something" defaultValue="auth0.com" hasError={true} />
  </Form.Field>
</Form>
```

### Multiple inputs in one field

Layout is taken care by `Form.Field`, it sets the position of `label`, `helperText`, etc.

This lets you can add multiple input elements inside the same `Form.Field`.

```js
<Form>
  <Form.Field label="Height" helpText="How tall are you?" error="Show only in the first field">
    <Stack>
      <TextInput placeholder="Value" hasError />
      <Select
        value="in"
        options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]}
      />
      <Button appearance="primary" onClick={e => console.log(e)}>
        Save
      </Button>
    </Stack>
  </Form.Field>
</Form>
```

### Old API

If you are using the old flavor of the API, you can continue using it till `1.0.0` without any problems. Here's an example:

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
