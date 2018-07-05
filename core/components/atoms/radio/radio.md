```meta
  category: Forms
  description: Provides a way for a user to select from a group of options
```

`import { Radio } from '@auth0/cosmos'`

A `Radio` is similar to a [Select](#/component/select), in that it displays a group of options and allows the user to select one. However, instead of rendering as a drop-down list like `Select`, a `Radio` will render all of the options at once. Since this can take up a lot of visual space and become confusing, you should only use `Radio` when you have a small number of options.

Since `Radio` is a controlled (stateless) components, to make it interactive you'll need to manage state and provide an `onChange` callback.

## State Management

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Radio
        name="example1"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
        {props}
      >
        <Radio.Option value="one">Option 1</Radio.Option>
        <Radio.Option value="two">Option 2</Radio.Option>
      </Radio>
    )
  }
}
```

## Read-only

Radios can be locked in their initial state with the `readOnly` prop. This prop can be set on either the `Radio.Option` to lock a single option, or the `Radio` itself to lock all options.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'two' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Radio
        name="example2"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
      >
        <Radio.Option value="one" readOnly>
          Option 1
        </Radio.Option>
        <Radio.Option value="two">Option 2</Radio.Option>
      </Radio>
    )
  }
}
```

```js
class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 'one' }
  }

  handleChange(evt) {
    this.setState({ selected: evt.target.value })
  }

  render() {
    return (
      <Radio
        name="example3"
        selected={this.state.selected}
        onChange={evt => this.handleChange(evt)}
        readOnly
      >
        <Radio.Option value="one">Option 1</Radio.Option>
        <Radio.Option value="two">Option 2</Radio.Option>
      </Radio>
    )
  }
}
```
