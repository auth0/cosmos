`import Select from 'cosmos/select'`

```js props
<Select
  options={[
    { text: "One", value: 1, defaultSelected: true },
    { text: "Two", value: 2 },
    { text: "Three", value: 3 }
  ]}
/>
```

---

Options is required field

```js
<Select
  options={[
    { text: 'One', value: 1, defaultSelected: true },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ]}
/>
```

Select can be readOnly

```js
<Select
  readOnly
  options={[
    { text: 'One', value: 1, defaultSelected: true },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ]}
/>
```

Select can have a default selected value (TO-DO: fix!)

```js
<Select
  options={[
    { text: 'One', value: 1 },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3, defaultSelected: true }
  ]}
/>
```
