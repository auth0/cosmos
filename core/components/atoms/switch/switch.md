```meta
  category: Forms
```

`import { Switch } from '@auth0/cosmos'`

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
<Stack>
  <Switch readOnly />
  <Switch on readOnly />
</Stack>
```

### Accessibility labels

You can change the accessibility labels by passing an array with two strings. The position of the label can be changed to align the switch to the right.

```js
<Stack align="space-between">
  <Switch accessibleLabels={['ON', 'OFF']} onToggle={value => console.log(value)} />
  <Switch
    accessibleLabels={['ON', 'OFF']}
    onToggle={value => console.log(value)}
    labelPosition="left"
  />
</Stack>
```

You can hide the accessibility labels and display just the switch passing the `hideAccessibleLabels` prop.

```js
<Switch hideAccessibleLabels onToggle={() => {}} />
```
