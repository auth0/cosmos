```meta
  category: Layout
  description: "Paginate resources with a handy pagination component"
  unstable: true
```

```jsx
<Pager {props} defaults={{items: "20372", perPage: "10", page: "3"}} />
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
      <Pager
        page={page}
        perPage={perPage}
        items={items}
        onPageChanged={this.onPageChange.bind(this)}
      />
    )
  }
}
```

### Without items

```js
class PaginatedResource extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 1, perPage: 15 }
  }

  onPageChange(page) {
    this.setState({ page })
  }

  render() {
    const { page, perPage } = this.state
    return <Pager page={page} perPage={perPage} onPageChanged={this.onPageChange.bind(this)} />
  }
}
```
