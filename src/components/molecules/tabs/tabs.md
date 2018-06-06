```meta
  category: Layout
  description: Tabs are great for splitting information into sections to make them easy to consume.
```

```jsx
<Tabs>
  <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3">Third tab's the charm!</Tabs.Tab>
</Tabs>
```

## Examples

### Default selected tab

By default, the first tab is selected but you can change this behavior attaching the `selected` prop to a `Tab`.

```js
<Tabs>
  <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3" selected>
    Look, third tab is selected by default!
  </Tabs.Tab>
</Tabs>
```

### Controlled tab state

Sometimes you need to have control on what tab is selected anytime. So you can pass the current selected tab index in the `selected` prop, as well as a callback function in the `onSelect` prop, and Cosmos will notify you when the user tries to change the tab so you can act accordingly.

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
