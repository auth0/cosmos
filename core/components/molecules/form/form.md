```meta
  category: Forms
```

`import { Form } from '@auth0/cosmos'`

---

Form is a compound component that ships with `Form.Field` that can wrapped around input elements.

```jsx
<Form {props}>
  <Form.Field label="Field label">
    <TextInput
      type="text"
      placeholder="Enter something"
    />
  </Form.Field>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```

## Examples

### Form Fields

Form is composed of Form Fields, read more about them [here](#/component/form-field).

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'React' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Form>
        <Form.Field label="Field label" helpText="This is some helper text">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
        <Form.Field label="Long input" error="Can't leave this empty">
          <TextArea placeholder="Add a lot of text here" hasError={true} />
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
        <Form.Field label="Single Sign On">
          <Switch on onToggle={value => alert(value)} />
        </Form.Field>
        <Form.Field label="Framework">
          <Radio
            name="Radio"
            selected={this.state.selected}
            onChange={evt => this.handleChange(evt)}
          >
            <Radio.Option value="React">React</Radio.Option>
            <Radio.Option value="html">HTML + Liquid</Radio.Option>
          </Radio>
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    )
  }
}
```

### Grouping fields

Long forms should be divided into smaller groups using a `Form.FieldSet`. Read the docs [here](#/component/form-fieldset).

```js
<Form>
  <Form.FieldSet label="Group 1">
    <Form.Field label="Field label">
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
    <Form.Field label="Long input">
      <TextArea placeholder="Add a lot of text here" />
    </Form.Field>
  </Form.FieldSet>

  <Form.FieldSet label="Group 2">
    <Form.Field label="Field label">
      <TextInput label="Field label" type="text" placeholder="Enter something" />
    </Form.Field>
    <Form.Field label="Field label">
      <TextInput label="Field label" type="text" placeholder="Enter something" />
    </Form.Field>
  </Form.FieldSet>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```

### Multiple forms in a page

If a page has multiple forms, use a [FormGroup](#/component/form-group) to separate each form. Use a `Form.FieldSet` to add meaningful titles.

### Form actions

At the end of the forms, you need actions that the user can take. Read how to add them [here](#/component/form-actions).

```js
<Form>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```

### Form layouts

`Form` also supports an alternate layout which can be used for narrow environments:

```js
<Form layout="label-on-top">
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```
