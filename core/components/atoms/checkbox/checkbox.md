```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

### Single checkbox

Checks the `value` against the `selected` array to determine if the input is `checked`. `Selected` is an optional prop that the `defaultChecked` value can be derived from.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: ['one'] }
  }

  handleChange(evt) {
    let selected = [...this.state.selected]
    const evtChecked = evt.target.checked
    const evtValue = evt.target.value

    if (evtChecked) {
      selected.push(evtValue)
    } else {
      selected = selected.filter(item => item !== evtValue)
    }

    this.setState({ selected })
  }
  render() {
    return (
      <Checkbox
        name="terms"
        value="one"
        checked={this.state.selected.indexOf('one') >= 0}
        defaultChecked={this.state.selected.indexOf('one') < 0}
        onChange={event => this.handleChange(event)}
      >
        I agree with the <Link url="#">Terms and Conditions</Link>.
      </Checkbox>
    )
  }
}
```

### Multiple checkboxes

The `Checkbox.Group` layout groups multiple checkboxes and has alignment options `vertical` or `horizontal`.

```js
<Checkbox.Group name="example3" selected={['one', 'two']} align="horizontal">
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```

```js
<Checkbox.Group name="example3" selected={['one', 'two']} align="vertical">
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```

Consider using a Select when having more than 6 available options.
(This example doesn't work)

```js
<Checkbox.Group name="example4" selected={['one', 'two', 'seven']}>
  <Checkbox name="one" value="one">
    Option 1
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
  <Checkbox name="five" value="five">
    Option 5
  </Checkbox>
  <Checkbox name="six" value="six">
    Option 6
  </Checkbox>
  <Checkbox name="seven" value="seven">
    Option 7
  </Checkbox>
  <Checkbox name="eight" value="eight">
    Option 8
  </Checkbox>
</Checkbox.Group>
```

### Disabled options

```js
<Checkbox.Group name="example5" selected={['one', 'two']}>
  <Checkbox name="one" value="one" readOnly>
    Option 1 is disabled
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
  <Checkbox name="three" value="three">
    Option 3
  </Checkbox>
  <Checkbox name="four" value="four">
    Option 4
  </Checkbox>
</Checkbox.Group>
```
