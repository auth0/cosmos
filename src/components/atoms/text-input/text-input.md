```meta
  category: Forms
  description: Use TextInput to ask for input from the user
```

`import TextInput from 'cosmos/text-input'`

```jsx
<TextInput {props} placeholder="Placeholder text" />
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

### Function

The `onChange` prop is transparently passed to the input

```js
<TextInput onChange={event => console.log(event.target.value)} placeholder="change my text" />
```
