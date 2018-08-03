```meta
  category: Layout
  description: Tabs are great for splitting information into sections to make them easy to consume.
```

```jsx
<Tabs selected={0} onSelect={() => {}}>
  <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3">Third tab's the charm!</Tabs.Tab>
</Tabs>
```

## Example

You must pass a `selected` prop with the index of the selected tab. Also, you must listen for changes
on the selected tab with the `onSelect` function and update the `selected` prop accordingly.

```js
class TabContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
  }

  handleSelected(selected) {
    this.setState({ selected })
  }

  handleInputChange(ev) {
    const selected = parseInt(ev.target.value)
    this.setState({ selected })
  }

  render() {
    return (
      <div>
        <span>
          Selected tab index:{' '}
          <input
            value={this.state.selected}
            type="number"
            onChange={ev => this.handleInputChange(ev)}
          />
        </span>
        <Tabs onSelect={nextIndex => this.handleSelected(nextIndex)} selected={this.state.selected}>
          <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
          <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
          <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
        </Tabs>
      </div>
    )
  }
}
```

