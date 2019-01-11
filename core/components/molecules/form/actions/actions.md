```meta
  category: Forms
```

At the end of the forms, you need actions that the user can take.

```jsx
<Form>
  <Form.Actions
    primaryAction={{ label: 'Save Changes', handler: () => {} }}
    secondaryActions={[{ label: 'Try', icon: 'play', handler: () => {} }]}
    destructiveAction={{ label: 'Delete', icon: 'delete', handler: () => {} }}
  />
</Form>
```

## Examples

Pass a `primaryAction` with the label and handler to call.

```js
<Form>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```

### Additional action

You can also pass an `array` of `secondaryActions`.

```js
<Form>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions
    primaryAction={{ label: 'Save Changes', handler: () => {} }}
    secondaryActions={[
      { label: 'Try', icon: 'play', handler: () => {} },
      { label: 'Approve', icon: 'check', handler: () => {} }
    ]}
  />
</Form>
```

### Destructive Action

In case you want to represent a dangerous or unrecoverable action, you can pass a `destructiveAction`.

```js
<Form>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions
    primaryAction={{ label: 'Save Changes', handler: () => {} }}
    destructiveAction={{ label: 'Delete', icon: 'delete', handler: () => {} }}
  />
</Form>
```

### Passing button props

You can pass any prop that `Button` accepts and they will be forwarded

```js
<Form>
  <Form.Field label="Field label">
    <TextInput type="text" placeholder="Enter something" />
  </Form.Field>
  <Form.Actions
    primaryAction={{ label: 'Save Changes', loading: true, handler: () => {} }}
    destructiveAction={{
      label: 'Delete',
      disabled: true,
      handler: () => {}
    }}
  />
</Form>
```
