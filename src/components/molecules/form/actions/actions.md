```meta
  category: Forms
```

At the end of the forms, you need actions that the user can take.

```jsx
<Form.Actions
  primaryAction={{ label: 'Save Changes', method: () => {} }}
  secondaryActions={[{ label: 'Try', icon: 'play', method: () => {} }]}
/>
```

# Examples

Pass a `primaryAction` with the label and method to call.

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: () => {} }} />
</Form>
```

You can also pass an `array` of `secondaryActions`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions
    primaryAction={{ label: 'Save Changes', method: () => {} }}
    secondaryActions={[
      { label: 'Try', icon: 'play', method: () => {} },
      { label: 'Debug', method: () => {} }
    ]}
  />
</Form>
```
