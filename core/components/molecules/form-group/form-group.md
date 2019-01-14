```meta
category: forms
description: If a page has multiple forms, you can use FormGroup to separate them out.
```

`import { FormGroup } from '@auth0/cosmos'`

---

Use a `Form.FieldSet` to add meaningful titles.

```jsx
<div>
  <FormGroup>
    <Form>
      <Form.FieldSet label="iOS Settings">
        <Form.Field label="Field label">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form.FieldSet>
    </Form>

    <Form>
      <Form.FieldSet label="Android Settings">
        <Form.Field label="Field label">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form.FieldSet>
    </Form>
  </FormGroup>
</div>
```
