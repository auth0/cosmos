```meta
  category: Forms
  description: Use TextInput to ask for input from the user
```

`import { TextInput } from '@auth0/cosmos'`

```jsx
<TextInput placeholder="Placeholder text" {props} />
```

### Input types

You can use semantic HMTL property type with input.

It also ships with a `code` prop that is useful when the input is a hash/code value.

```js
<div>
  <TextInput type="text" defaultValue="This is plain text field value" />
  <br />
  <br />
  <TextInput type="password" defaultValue="This is a code field" />
  <br />
  <br />
  <TextInput type="number" defaultValue="1" />
  <br />
  <br />
  <TextInput code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
</div>
```

### Input states

The `readOnly` prop can be used for disabling input that do not satisfy constraints.

```js
<TextInput readOnly placeholder="Field is disabled" />
```

You can also indicate that the value of the input should be masked. This will result
in a display similar to password fields, but won't trigger password managers.

(Note: this is just a visual effect, and doesn't provide any actual additional security!)

```js
<TextInput defaultValue="secret-client-hash" masked />
```

### Function

The `onChange` prop is transparently passed to the input

```js
<TextInput onChange={event => console.log(event.target.value)} placeholder="change my text" />
```

### Actions

You can add actions to a `TextInput` by passing an array of `Button`:

```js
<TextInput
  label="Allowed URLs"
  type="text"
  placeholder="Enter something"
  actions={[
    <Button icon="copy" onClick={e => console.log(e)} />,
    <Button icon="delete" onClick={e => console.log(e)} />
  ]}
/>
```
