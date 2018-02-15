```meta
  category: Forms
```

`import Form from 'cosmos/form'`

---

Form is a compound component that ships with extra props for elements that take care of layout, styling and accessibility.

```jsx
<Form {props}>
  <Form.TextInput
    label="Field label"
    type="text"
    placeholder="Enter something"
  />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
</Form>
```

## Examples

### Form Fields

Form is composed of Form Fields, read more about them [here](/docs/Form%20Field).

```js
<Form>
  <Form.TextInput
    label="Field label"
    type="text"
    placeholder="Enter something"
    description="This is some helper `text`"
  />
  <Form.TextArea
    label="Long input"
    placeholder="Add a lot of text here"
    error="Can't leave this empty"
  />
  <Form.Select
    label="Options list"
    options={[
      { text: 'First option', value: '1', defaultSelected: true },
      { text: 'Second option', value: '2' },
      { text: 'Third option', value: '3' },
      { text: 'Fourth option', value: '4' }
    ]}
  />
  <Form.Switch label="Single Sign On" on onToggle={value => alert(value)} />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
</Form>
```

### Grouping fields

Long forms should be divided into smaller groups using a `Form.FieldSet`. Read the docs [here](/docs/Form%20Fieldset).

```js
<Form>
  <Form.FieldSet label="Group 1">
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
  </Form.FieldSet>

  <Form.FieldSet label="Group 2">
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  </Form.FieldSet>
  <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
</Form>
```

### Multiple forms in a page

If a page has multiple forms, use a [FormGroup](/docs/FormGroup) to separate each form. Use a `Form.FieldSet` to add meaningful titles.

### Form actions

At the end of the forms, you need actions that the user can take. Read how to add them [here](/docs/Form%20Actions).

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
</Form>
```

### Form layouts

`Form` also supports an alternate layout which can be used for narrow environments:

```js
<Form layout="label-on-top">
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
</Form>
```
