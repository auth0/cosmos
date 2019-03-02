```meta
  category: Forms
```

`import { Checkbox } from '@auth0/cosmos'`

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: ['one', 'two'] }
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
        name="example"
        onChange={evt => this.handleChange(evt)}
        value="one"
        checked={this.state.selected.indexOf('one') >= 0}
        {props}
      >
        You can check and uncheck me
      </Checkbox>
    )
  }
}
```
