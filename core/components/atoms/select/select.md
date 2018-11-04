```meta
  category: Forms
  description: Select renders a styled drop-down selector.
```

---

```jsx
<Select {props}
  placeholder="Select an option..."
  options={[
    { text: 'One', value: 1, readOnly: true },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ]}
  onChange={ event => console.log(event) }
/>
```

By default, the first option will be selected. To override this, you can set `value`
to match a value from options

```js
<Select
  value={2}
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
  onChange={event => console.log(event)}
/>
```

You can also indicate that a `<Select>` should be read-only by setting the `readOnly` prop:

```js
<Select
  readOnly
  value={1}
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
  onChange={event => console.log(event)}
/>
```
