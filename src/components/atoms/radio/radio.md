```meta
  category: Forms
  description: Use Radio Buttons to make a single selection of options. Unlike Select this serves to easily display simple options to the user.
```

`import { Radio } from '@auth0/cosmos'`

```jsx
<Radio {props} name="opt" value="opt1">Option 1</Radio>
```

## Examples

Radio Buttons can be grouped to gather related options.

```js
<Radio.Group name="exa" value="exa2">
  <Radio value="exa1">Example 1</Radio>
  <Radio value="exa2">Example 2</Radio>
</Radio.Group>
```

### Read-only

Radio Buttons can be locked in it's initial state with the `readOnly` prop.

```js
<Radio.Group name="exo" readOnly>
  <Radio value="exo1">Example 1</Radio>
  <Radio value="exo2">Example 2</Radio>
</Radio.Group>
```
