```meta
  category: Forms
```

At the end of the forms, you need actions that the user can take.

```jsx
<Form.Actions
  primaryAction={{ label: 'Save Changes', handler: () => {} }}
  secondaryActions={[{ label: 'Try', icon: 'play', handler: () => {} }]}
/>
```

## Examples

Pass a `primaryAction` with the label and handler to call.

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
</Form>
```

### Additional actions

You can also pass an `array` of `secondaryActions`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions
    primaryAction={{ label: 'Save Changes', handler: () => {} }}
    secondaryActions={[
      { label: 'Try', icon: 'play', handler: () => {} },
      { label: 'Debug', handler: () => {} }
    ]}
  />
</Form>
```
