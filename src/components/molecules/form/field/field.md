```meta
  category: Forms
```

Form Fields are a group of field types supported in `Form`:

* `Form.TextInput`
* `Form.TextArea`
* `Form.Select`
* `Form.Switch`

In addition to their own [native props](/docs/TextInput), we add a few more props in the context of a `Form`:

```jsx
<Form>
  <Form.TextInput {props} />
</Form>
```

## Examples

```js
<Form>
  <Form.TextInput
    label="Field label"
    type="text"
    placeholder="Enter something"
    actions={[{ icon: 'copy', method: () => {}, label: 'Copy to clipboard' }]}
  />
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
  <Form.Switch label="Subscribe" on />
</Form>
```

### Helper text

Here's an example of providing some context to the user with `description`. It supports adding `backticks`.

```js
<Form>
  <Form.TextInput
    label="Callback URL"
    type="text"
    placeholder="Enter something"
    description="Make sure to specify the protocol, `http://` or `https://`"
  />
</Form>
```

If you need more control, `description` also accepts a React component. You can use this to add links
or other rich formatting to displayed text.

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    description={
      <span>
        Note that querystrings <strong>are not</strong> taken into account when validating these
        URLs. Read more about this <Link href="https://auth0.com">here</Link>.
      </span>
    }
  />
</Form>
```

### Actions

You can add actions to a field by passing an array of `{ icon, method }`:

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    actions={[
      { icon: 'copy', label: 'Copy URL', method: e => console.log(e) },
      { icon: 'delete', label: 'Delete URL', method: e => console.log(e) }
    ]}
  />
</Form>
```

### Validation

We leave the logic part of validation to you the developer, you can pass `error` back to the field and it will take care of the presentation.

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    defaultValue="auth0.com"
    error="This is not a valid URL"
    description="Make sure to specify the protocol, `http://` or `https://`"
  />
</Form>
```
