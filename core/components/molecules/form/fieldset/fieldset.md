```meta
  category: Forms
```

Long forms should be divided into smaller groups using `Form.FieldSet`

```jsx
<Form>
  <Form.FieldSet {props}>
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  </Form.FieldSet>
</Form>
```

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
</Form>
```
