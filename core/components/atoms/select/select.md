```meta
  category: Forms
  description: Select renders a styled drop-down selector.
```

---

```jsx
<Select {props}
  placeholder="Select an option..."
  options={[
    { text: 'One', value: 1, disabled: true },
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

You disable a `<Select>` by setting the `disabled` prop:

```js
<Select
  disabled
  value={1}
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
  onChange={event => console.log(event)}
/>
```

## Groups

You can make groups of options inside a select:

```js
<Select
  placeholder="Groups"
  value={11}
  onChange={event => console.log(event)}
  options={[
    {
      groupName: 'Group one',
      items: [
        { text: 'One one', value: 11 },
        { text: 'One two', value: 12 },
        { text: 'One three', value: 13 }
      ]
    },
    {
      groupName: 'Group two',
      items: [
        { text: 'Two one', value: 21 },
        { text: 'Two two', value: 22 },
        { text: 'Two three', value: 23 }
      ]
    }
  ]}
/>
```
