If a page has multiple forms, use a the `FormGroup` component to separate each form. Use a `Form.FieldSet` to add meaningful titles.

`import FormGroup from 'cosmos/form-group'`

---

```jsx
<div>
  <FormGroup>
    <Form>
      <Form.FieldSet label="iOS Settings">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      </Form.FieldSet>
      <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
    </Form>

    <Form>
      <Form.FieldSet label="Android Settings">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      </Form.FieldSet>
      <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
    </Form>
  </FormGroup>
</div>
```
