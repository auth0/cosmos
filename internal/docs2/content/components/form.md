---
title: Form
componentName: Form
category: Forms
---

`import { Form } from '@auth0/cosmos'`

---

Form is a compound component that ships with `Form.Field` that can wrapped around input elements.

```jsx
<Form {props}>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```
