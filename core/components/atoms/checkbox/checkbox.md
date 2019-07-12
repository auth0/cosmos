```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

### Single checkbox

Has two properties that determine whether the checkbox input should be checked: `checked` and `defaultChecked`. The main difference between the two is that the `defaultChecked` property reads the input values from a `selected` prop.

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
        onChange={event => this.handleChange(event)}
      >
        I agree with the <Link url="#">Terms and Conditions</Link>.
      </Checkbox>
    )
  }
}
```

### Multiple checkboxes

The `Checkbox.Group` layout groups multiple checkboxes and has alignment options `vertical` or `horizontal`. Keep note, the `selected` property is needed for this wrapper to work.

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

Consider using a [Select](#/component/select) when you have more than 6 checkboxes.

### Disabled options

```js
<Checkbox.Group name="example5" selected={['two']}>
  <Checkbox name="one" value="one" readOnly>
    Option 1 is disabled
  </Checkbox>
  <Checkbox name="two" value="two">
    Option 2
  </Checkbox>
</Checkbox.Group>
```

### Using Checkboxes within a Form Field

See additional examples in the Form [Field](#/component/field#examples) section. Keep note, the `checkbox` prop on `Form.Field` is needed to render the labels and spacing properly. Also consider rendering all checkboxes in a single Form Field layout.

```js
<Form.Field
  label="This is a form label"
  helpText="This is a help text for the form field"
  checkbox={true}
>
  <Checkbox.Group selected={['one', 'two']} align="horizontal">
    <Checkbox name="example1" value="one">
      Example One
    </Checkbox>
    <Checkbox name="example2" value="two">
      Example Two
    </Checkbox>
  </Checkbox.Group>
</Form.Field>
```
