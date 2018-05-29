```meta
  category: Forms
```

Form Fields are a group of field types supported in `Form`:

* `Form.TextInput`
* `Form.TextArea`
* `Form.Select`
* `Form.Switch`
* `Form.Radio`

If you need something we don't have, you can use a custom component with `Form.Field`

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
    actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
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
  <Form.Radio name="example1" selected="one">
    <Form.Radio.Option value="one">One</Form.Radio.Option>
    <Form.Radio.Option value="two">Two</Form.Radio.Option>
  </Form.Radio>
</Form>
```

### Help text

Here's an example of providing some context to the user with `helpText`.

```js
<Form>
  <Form.TextInput
    label="Callback URL"
    type="text"
    placeholder="Enter something"
    helpText="Make sure to specify the protocol, http:// or https://"
  />
</Form>
```

If you need more control, `helpText` also accepts a React component. You can use this to add links
or other rich formatting to displayed text.

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    helpText={
      <span>
        Note that querystrings <strong>are not</strong> taken into account when validating these
        URLs. Read more about this <Link href="https://auth0.com">here</Link>.
      </span>
    }
  />
</Form>
```

### Actions

You can add actions to a field by passing an array of `{ icon, handler }`:

```js
<Form>
  <Form.TextInput
    label="Allowed URLs"
    type="text"
    placeholder="Enter something"
    actions={[
      { icon: 'copy', label: 'Copy URL', handler: e => console.log(e) },
      { icon: 'delete', label: 'Delete URL', handler: e => console.log(e) }
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
    helpText="Make sure to specify the protocol, http:// or https://"
  />
</Form>
```

### Custom component (advanced)

Layout is taken care by `Form.Field`, it sets the position of `label`, `helperText`, etc.

All the props are passed on to the custom component, so you can set the id, error styles, actions customised to the use case.

```js
<Form>
  <Form.Field label="Height" helpText="How tall are you?" error="Show only in the first field">
    <Stack>
      <TextInput placeholder="Value" error="Show only in the first field" />
      <Select options={[{ text: 'centimetres', value: 'cm' }, { text: 'inches', value: 'in' }]} />
      <Button appearance="link" icon="copy" label="Copy value" onClick={e => console.log(e)} />
    </Stack>
  </Form.Field>
</Form>
```
