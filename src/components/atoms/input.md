```meta
  category: Forms
```

`import Input from 'cosmos/input'`

```js props
<Input {props} placeholder="Placeholder text" />
```

#### Input types

You can use semantic HMTL property type with input.

It also ships with a `code` prop that is useful when the input is a hash/code value.

```js multiple
render(
  <div>
    <Input type="text" defaultValue="This is plain text field value" />
    <br/><br/>
    <Input type="password" defaultValue="This is a code field" />
    <br/><br/>
    <Input type="number" defaultValue="1" />
    <br/><br/>
    <Input code defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUip" />
  </div>
)
```

#### Input states

The `readOnly` prop can be used for disabling input that do not satisfy constraints.

To show validation errors, use the `error` prop which takes the error message as a string.

```js multiple
render(
  <div>
    <Input readOnly placeholder="Field is disabled" />
    <br/><br/>
    <Input defaultValue="siddharth@auth..com" error="email id not valid" />
  </div>
)
```

#### Function

The `onChange` prop is transparently passed to the input

```js multiple
const method = event => alert(event.target.value)

render(<Input onChange={method} placeholder="change my text" />)
```
