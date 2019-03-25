---
category: Forms
description: Select renders a styled drop-down selector.
---

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

## Examples

### Placeholder text

```js
<Select
  placeholder="Select an option..."
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
  onChange={event => console.log(event)}
/>
```

### Disabled options

You can disable a option by setting it as `disabled`. You can disable the whole select as well.

```js
<RowLayout>
  <Select
    value={1}
    options={[
      { text: 'One', value: 1 },
      { text: 'Two', value: 2 },
      { text: 'Three is disabled', value: 3, disabled: true }
    ]}
    onChange={event => console.log(event)}
  />
  <Select
    disabled
    value={1}
    options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
    onChange={event => console.log(event)}
  />
</RowLayout>
```

## Single select

### Single selected option

When there is no placeholder text, the first option will be selected by default. To override this, you can set `value` to match a value from options.

```js
<Select
  value={2}
  options={[{ text: 'One', value: 1 }, { text: 'Two', value: 2 }, { text: 'Three', value: 3 }]}
  onChange={event => console.log(event)}
/>
```

### Single with groups

You can make groups of options inside a select:

```js
<Select
  placeholder="Grouped items"
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

### Single searchable option (with Typeahead)

Mark the select as `searchable` in order to be able to type to search through items in the select.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  render() {
    return (
      <Select
        searchable
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Search for a number..."
        options={[
          {
            label: 'One',
            value: 1
          },
          {
            label: 'Two',
            value: 2
          },
          {
            label: 'Three',
            value: 3
          },
          {
            label: 'Four',
            value: 4
          },
          {
            label: 'Five',
            value: 5
          },
          {
            label: 'Six',
            value: 6
          },
          {
            label: 'Seven',
            value: 7
          },
          {
            label: 'Eight',
            value: 8
          },
          {
            label: 'Nine',
            value: 9
          },
          {
            label: 'Ten',
            value: 10
          }
        ]}
      />
    )
  }
}
```

## Select Multiple

### Multiple selected options

You can use the `multiple` prop in order to select more than one item at a time.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [1, 2] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  render() {
    return (
      <Select
        multiple
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select numbers..."
        options={[
          {
            label: 'One',
            value: 1
          },
          {
            label: 'Two',
            value: 2
          },
          {
            label: 'Three',
            value: 3
          },
          {
            label: 'Four',
            value: 4
          },
          {
            label: 'Five',
            value: 5
          },
          {
            label: 'Six',
            value: 6
          },
          {
            label: 'Seven',
            value: 7
          },
          {
            label: 'Eight',
            value: 8
          },
          {
            label: 'Nine',
            value: 9
          },
          {
            label: 'Ten',
            value: 10
          }
        ]}
      />
    )
  }
}
```

### Multiple searchable options (with Typeahead)

Mark the select as `searchable` in order to be able to type to search through items in the select.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  render() {
    return (
      <Select
        multiple
        searchable
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Search for multiple numbers..."
        options={[
          {
            label: 'One',
            value: 1
          },
          {
            label: 'Two',
            value: 2
          },
          {
            label: 'Three',
            value: 3
          },
          {
            label: 'Four',
            value: 4
          },
          {
            label: 'Five',
            value: 5
          },
          {
            label: 'Six',
            value: 6
          },
          {
            label: 'Seven',
            value: 7
          },
          {
            label: 'Eight',
            value: 8
          },
          {
            label: 'Nine',
            value: 9
          },
          {
            label: 'Ten',
            value: 10
          }
        ]}
      />
    )
  }
}
```

## Select with custom options

You can use the `customOptionRenderer` prop in order to render custom components as options in the select menu.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  renderOption(option, { isHovered }) {
    return (
      <div>
        <p>
          <strong>{option.label}</strong>
        </p>
        <p>{option.description}</p>
      </div>
    )
  }

  render() {
    return (
      <Select
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select a custom item..."
        customOptionRenderer={this.renderOption}
        options={[
          {
            label: 'One',
            description: 'This item holds the One number as 1.',
            value: 1
          },
          {
            label: 'Two',
            description: 'This item holds the Two number as 2.',
            value: 2
          },
          {
            label: 'Three',
            description: 'This item holds the Three number as 3.',
            value: 3
          },
          {
            label: 'Four',
            description: 'This item holds the Four number as 4.',
            value: 4
          },
          {
            label: 'Five',
            description: 'This item holds the Five number as 5.',
            value: 5
          },
          {
            label: 'Six',
            description: 'This item holds the Six number as 6.',
            value: 6
          },
          {
            label: 'Seven',
            description: 'This item holds the Seven number as 7.',
            value: 7
          },
          {
            label: 'Eight',
            description: 'This item holds the Eight number as 8.',
            value: 8
          },
          {
            label: 'Nine',
            description: 'This item holds the Nine number as 9.',
            value: 9
          },
          {
            label: 'Ten',
            description: 'This item holds the Ten number as 10.',
            value: 10
          }
        ]}
      />
    )
  }
}
```

The custom renderer comes with a default padding and hover background color, among other styles. You can disable this by passing a `noStyles` prop to the root element of your custom renderer.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  renderOption(option, { isHovered }) {
    return (
      <div
        noStyles
        style={{
          padding: '12px 16px',
          backgroundColor: isHovered ? 'rgba(66, 134, 244, 0.2)' : 'white',
          width: '100%'
        }}
      >
        <p>
          <strong>{option.label}</strong>
        </p>
        <p>{option.description}</p>
      </div>
    )
  }

  render() {
    return (
      <Select
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select a custom item..."
        customOptionRenderer={this.renderOption}
        options={[
          {
            label: 'One',
            description: 'This item holds the One number as 1.',
            value: 1
          },
          {
            label: 'Two',
            description: 'This item holds the Two number as 2.',
            value: 2
          },
          {
            label: 'Three',
            description: 'This item holds the Three number as 3.',
            value: 3
          },
          {
            label: 'Four',
            description: 'This item holds the Four number as 4.',
            value: 4
          },
          {
            label: 'Five',
            description: 'This item holds the Five number as 5.',
            value: 5
          },
          {
            label: 'Six',
            description: 'This item holds the Six number as 6.',
            value: 6
          },
          {
            label: 'Seven',
            description: 'This item holds the Seven number as 7.',
            value: 7
          },
          {
            label: 'Eight',
            description: 'This item holds the Eight number as 8.',
            value: 8
          },
          {
            label: 'Nine',
            description: 'This item holds the Nine number as 9.',
            value: 9
          },
          {
            label: 'Ten',
            description: 'This item holds the Ten number as 10.',
            value: 10
          }
        ]}
      />
    )
  }
}
```

## Select with custom value

You can use the `customValueRenderer` prop in order to render a custom component as the selected value.

```js
class Example extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  renderValue(option) {
    return (
      <span>
        {option.country} {option.label}
      </span>
    )
  }

  render() {
    return (
      <Select
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select a custom item..."
        customValueRenderer={this.renderValue}
        options={[
          {
            value: 'Harry Kane',
            text: 'Harry Kane',
            country: '🇬🇧'
          },
          {
            value: 'Lionel Messi',
            text: 'Lionel Messi',
            country: '🇦🇷'
          },
          {
            value: 'Antoine Griezmann',
            text: 'Antoine Griezmann',
            country: '🇫🇷'
          },
          {
            value: 'Luis Suarez',
            text: 'Luis Suarez',
            country: '🇺🇾'
          }
        ]}
      />
    )
  }
}
```

## Asynchronous select

In case you need to load data from an asynchronous data source, you can use the `async` prop along with `loadOptions`
instead of `options` to let the Select know it will need to call the function to get its options.

```js
class AsyncExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
    this.allOptions = [
      {
        label: 'One',
        description: 'This item holds the One number as 1.',
        value: 1
      },
      {
        label: 'Two',
        description: 'This item holds the Two number as 2.',
        value: 2
      },
      {
        label: 'Three',
        description: 'This item holds the Three number as 3.',
        value: 3
      },
      {
        label: 'Four',
        description: 'This item holds the Four number as 4.',
        value: 4
      },
      {
        label: 'Five',
        description: 'This item holds the Five number as 5.',
        value: 5
      },
      {
        label: 'Six',
        description: 'This item holds the Six number as 6.',
        value: 6
      },
      {
        label: 'Seven',
        description: 'This item holds the Seven number as 7.',
        value: 7
      },
      {
        label: 'Eight',
        description: 'This item holds the Eight number as 8.',
        value: 8
      },
      {
        label: 'Nine',
        description: 'This item holds the Nine number as 9.',
        value: 9
      },
      {
        label: 'Ten',
        description: 'This item holds the Ten number as 10.',
        value: 10
      }
    ]

    this.loadOptions = this.loadOptions.bind(this)
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  filterOptions(value) {
    return this.allOptions.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
  }

  loadOptions(inputValue, callback) {
    setTimeout(() => {
      callback(this.filterOptions(inputValue))
    }, 500)
  }

  render() {
    return (
      <Select
        async
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select an item..."
        noOptionsMessage={({ inputValue }) =>
          inputValue.length > 0 ? 'No options' : 'Type to search...'
        }
        loadOptions={this.loadOptions}
      />
    )
  }
}
```

### The loadOptions function

> If you pass a function as the `loadOptions` prop, the Select component will call the function with
> the `inputValue` and a `callback`. You may choose to use the callback to pass your async data
> or you may want to return a `Promise` and ignore the callback completely. Both options will work.

### With muliple items

The asynchronous Select is fully compatible `multiple` mode.

```js
class AsyncExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = { selectedItems: [] }
    this.allOptions = [
      {
        label: 'One',
        description: 'This item holds the One number as 1.',
        value: 1
      },
      {
        label: 'Two',
        description: 'This item holds the Two number as 2.',
        value: 2
      },
      {
        label: 'Three',
        description: 'This item holds the Three number as 3.',
        value: 3
      },
      {
        label: 'Four',
        description: 'This item holds the Four number as 4.',
        value: 4
      },
      {
        label: 'Five',
        description: 'This item holds the Five number as 5.',
        value: 5
      },
      {
        label: 'Six',
        description: 'This item holds the Six number as 6.',
        value: 6
      },
      {
        label: 'Seven',
        description: 'This item holds the Seven number as 7.',
        value: 7
      },
      {
        label: 'Eight',
        description: 'This item holds the Eight number as 8.',
        value: 8
      },
      {
        label: 'Nine',
        description: 'This item holds the Nine number as 9.',
        value: 9
      },
      {
        label: 'Ten',
        description: 'This item holds the Ten number as 10.',
        value: 10
      }
    ]

    this.loadOptions = this.loadOptions.bind(this)
  }

  handleChange(event) {
    const selectedItems = event.target.value
    this.setState({ selectedItems })
  }

  filterOptions(value) {
    return this.allOptions.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
  }

  loadOptions(inputValue, callback) {
    setTimeout(() => {
      callback(this.filterOptions(inputValue))
    }, 500)
  }

  render() {
    return (
      <Select
        async
        multiple
        value={this.state.selectedItems}
        onChange={ev => this.handleChange(ev)}
        placeholder="Select an item..."
        noOptionsMessage={({ inputValue }) =>
          inputValue.length > 0 ? 'No options' : 'Type to search...'
        }
        loadOptions={this.loadOptions}
      />
    )
  }
}
```
