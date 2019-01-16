```meta
  category: Forms
```

`import { TextArea } from '@auth0/cosmos'`

Note: `TextArea` is camelcased, it's not `Textarea`.

```jsx
<TextArea {props} placeholder="Placeholder text" />
```

### Length of the TextArea

You can make the `TextArea` longer by using the `length` prop. By default, it's 3 rows long.

```js
<div>
  <TextArea length={1} placeholder="Small TextArea" />
  <br />
  <br />
  <TextArea length={7} placeholder="Really long TextArea" />
</div>
```

### Resizing

`TextArea` is resizable by the user. If you want to disable that behaviour, set `resizable` to `false` as a boolean value.

```js
<div>
  <TextArea placeholder="Resizable by default" />
  <br />
  <br />
  <TextArea resizable={false} placeholder="Can't resize this" />
</div>
```

### TextArea states

The `readOnly` prop can be used for disabling input that do not satisfy constraints.

```js
<TextArea readOnly placeholder="Field is disabled" />
```

### Function

The `onChange` prop is transparently passed to the underlying textarea

```js
<TextArea onChange={event => console.log(event.target.value)} placeholder="change my text" />
```

### Actions

You can add actions to a `TextArea` by passing an array of `Button`:

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
