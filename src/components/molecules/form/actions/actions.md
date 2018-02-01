```meta
  category: Forms
```

```js props
<Form.Actions
  primaryAction={{ label: 'Save Changes', method: this.save }}
  secondaryActions={[{ label: 'Clear', method: this.clear }]}
  destructiveActions={[{ label: 'Delete Client', method: this.delete }]}
/>
```

#### Examples

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
