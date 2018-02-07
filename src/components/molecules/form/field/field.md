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
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
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

Here's a secret: `description` has not matured to support links yet. You can however take more control and pass a React component instead. It will show get a warning, but we'll let it slide 😉

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    description={
      <span>
        Notice that querystrings are not taking into account when validating these URLs. <br />
        Read more about this at <a href="link">here</a>
      </span>
    }
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
