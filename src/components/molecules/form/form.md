```meta
  category: Forms
```

Form is a compound component that ships with extra props for elements that take care of layout, styling and accessibility.

There are common props for all fields like `label`, `description` and `error`.

---

#### Examples

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
</Form>
```

There are multiple field types supported like `TextInput`, `TextArea` and `Select`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
  <Form.Select
    label="Options list"
    options={[
      { text: 'First option', value: '1', defaultSelected: true },
      { text: 'Second option', value: '2' },
      { text: 'Third option', value: '3' },
      { text: 'Fourth option', value: '4' }
    ]}
  />
</Form>
```

You can also add `description` for the form field which supports tagging variables in `` and also supports custom components

```js
<Form>
  <Form.TextInput
    label="Field label"
    type="text"
    placeholder="Enter something"
    description="This is some helper `text`"
  />
  <Form.TextInput
    label="Field label"
    type="text"
    placeholder="Enter something"
    description={
      <span>
        Find more about it <a href="link">here</a>
      </span>
    }
  />
</Form>
```

#### Grouping fields

Long forms should be divided into smaller groups using a `FieldSet`. Note that `Form.Actions` go outside fieldsets.

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

#### Multiple forms in a page

If a page has multiple forms, use a <a href="FormGroup">FormGroup component</a> to separate each form. Use a `Form.FieldSet` to add meaningful titles.

#### Form actions

At the end of the forms, you need actions that the user can take. Pass a `primaryAction` with the label and method to call.

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
</Form>
```

You can also have an `array` of `secondaryActions` and `destructiveActions`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions
    primaryAction={{ label: 'Save Changes', method: this.save }}
    secondaryActions={[{ label: 'Clear', method: this.clear }]}
    destructiveActions={[{ label: 'Delete Client', method: this.delete }]}
  />
</Form>
```
