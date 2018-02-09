The `<Select>` component renders a styled drop-down selector.

```jsx
<Select {props}
  options={[
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ]}
/>
```

By default, the first option will be selected. To override this, you can set `value`
to match a value from options

```js
<Select
  value={2}
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
/>
```

You can also indicate that a `<Select>` should be read-only by setting the `readOnly` prop:

```js
<Select
  readOnly
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
/>
```
