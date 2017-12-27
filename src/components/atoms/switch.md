```meta
  category: Forms
```

import Switch from 'cosmos/switch'

```js props
<Switch {props} onToggle={value => alert(value)} />
```

---

## Examples

onToggle should always be provided for handling changes in the value

```js
<Switch onToggle={value => alert(value)} />
```

You can change the default state of the switch by passing the on prop

```js
<Switch on onToggle={value => alert(value)} />
```

Switch can be locked in it's initial state with the readOnly prop

```js multiple
render(
  <div>
    <Switch readOnly />
    <Switch on readOnly />
  </div>
)
```

You can change the accessibility labels by passing an array with two strings

```js
<Switch accessibleLabels={['ON', 'OFF']} onToggle={value => console.log(value)} />
```
