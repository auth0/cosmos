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
    console.log({ page })
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
