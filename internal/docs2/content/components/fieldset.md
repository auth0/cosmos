```meta
  category: Forms
```

Long forms should be divided into smaller groups using `Form.FieldSet`

```jsx
<Form>
  <Form.FieldSet {props}>
    <Form.Field label="Field label">
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
    <Form.Field label="Field label">
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
  </Form.FieldSet>
</Form>
```

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
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
    <Form.Field label="Field label">
      <TextInput type="text" placeholder="Enter something" />
    </Form.Field>
  </Form.FieldSet>
</Form>
```
