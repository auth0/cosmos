```meta
  category: Layout
  description: "A component"
```

A `<Pagination />` component is meant to be used along `ResourceList` and `Table`.

```jsx
<Pagination items={20372} perPage={10} page={3} />
```

## Example

```js
class PaginatedResource extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 1, perPage: 15, items: 7500 }
  }

  onPageChange(page) {
    this.setState({ page })
  }

  render() {
    const { page, perPage, items } = this.state
    return (
      <Pagination
        page={page}
        perPage={perPage}
        items={items}
        onPageChanged={this.onPageChange.bind(this)}
      />
    )
  }
}
```

### Example with totals

You may want to show a little bit more detail of the content you are
displaying, so we let you show the totals for the current page by passing the `showTotals`
prop to the `<Pagination>` component.

```js
class PaginatedResource extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 1, perPage: 15, items: 7500 }
  }

  onPageChange(page) {
    this.setState({ page })
  }

  render() {
    const { page, perPage, items } = this.state
    return (
      <Pagination
        page={page}
        perPage={perPage}
        items={items}
        onPageChanged={this.onPageChange.bind(this)}
        showTotals
      />
    )
  }
}
```
