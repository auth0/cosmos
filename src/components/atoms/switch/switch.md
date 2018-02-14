```meta
  category: Forms
```

`import Switch from 'cosmos/switch'`

```jsx
<Switch {props} onToggle={value => console.log(value)} />
```

## Examples

### Events

`onToggle` should always be provided for handling changes in the value.

```js
<Switch onToggle={value => console.log(value)} />
```

### Default state

You can change the default state of the switch by passing the `on` prop.

```js
<Switch on onToggle={value => console.log(value)} />
```

### Read-only

Switch can be locked in it's initial state with the `readOnly` prop.

```js
<div>
  <Switch readOnly />
  <Switch on readOnly />
</div>
```

### Accessibility labels

You can change the accessibility labels by passing an array with two strings.

```js
<Switch accessibleLabels={['ON', 'OFF']} onToggle={value => console.log(value)} />
```
