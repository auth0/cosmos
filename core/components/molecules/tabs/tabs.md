```meta
  category: Layout
  description: Tabs are great for splitting information into sections to make them easy to consume.
```

```jsx
class TabContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: 0 }
  }

  handleSelected(selected) {
    this.setState({ selected })
  }

  render() {
    return (
      <Tabs onSelect={nextIndex => this.handleSelected(nextIndex)} selected={this.state.selected}>
        <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
        <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
        <Tabs.Tab label="Tab 3">Third tabs the charm!</Tabs.Tab>
      </Tabs>
    )
  }
}
```

## Usage

As a general rule only use tabs to alternate between views within the same context, not to navigate to different areas.

The [Nielsen Norman Group](https://www.nngroup.com/articles/tabs-used-right/) has a 12 point design guideline for tab controls to distinguish tabs from site navigation and address click uncertainty.

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

## Accessibility

The component handles focus order and keyboard behavior following [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel).

## Resources

- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel)
- [Tabs, Used Right by the Nielsen Norman Group](https://www.nngroup.com/articles/tabs-used-right/)
