```meta
  category: Layout
  description: "Paginate resource lists and tables"
  unstable: true
```

A `<PaginationToolbar />` component is meant to be used along `ResourceList` and `Table`.

```jsx
<PaginationToolbar {props} defaults={{items: "20372", perPage: "10", page: "3"}} />
```

## Example

The pagination toolbar will not appear if there is only one page.

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
      <PaginationToolbar
        page={page}
        perPage={perPage}
        items={items}
        onPageChanged={this.onPageChange.bind(this)}
      />
    )
  }
}
```

## Usage with Resource Lists

You may want to use a Pagination Toolbar to paginate resources in a `<ResourceList />`. Here is an example of that:

```js
class PaginatedResourceList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      perPage: 5,
      items: [
        {
          title: 'Item 1',
          subtitle: 'Native',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 2',
          subtitle: 'Non Interactive',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 3',
          subtitle: 'Regular Web App',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
        },
        {
          title: 'Item 4',
          subtitle: 'Native',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 5',
          subtitle: 'Non Interactive',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 6',
          subtitle: 'Regular Web App',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
        },
        {
          title: 'Item 7',
          subtitle: 'Native',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 8',
          subtitle: 'Non Interactive',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 9',
          subtitle: 'Regular Web App',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
        },
        {
          title: 'Item 10',
          subtitle: 'Native',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 11',
          subtitle: 'Non Interactive',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 12',
          subtitle: 'Regular Web App',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
        },
        {
          title: 'Item 13',
          subtitle: 'Native',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMjcuMjQ2IDM5SDEwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSA5IDM3LjI0NlYyMC43NTRDOSAxOS43ODUgOS43ODUgMTkgMTAuNzU0IDE5aDE2LjQ5MmMuOTY5IDAgMS43NTQuNzg1IDEuNzU0IDEuNzU0djE2LjQ5MmMwIC45NjktLjc4NSAxLjc1NC0xLjc1NCAxLjc1NCIgZmlsbD0iIzE2MjE0RCIvPjxwYXRoIGQ9Ik0zMi4yNDYgMzRIMTUuNzU0QTEuNzU0IDEuNzU0IDAgMCAxIDE0IDMyLjI0NlYxNS43NTRjMC0uOTY5Ljc4NS0xLjc1NCAxLjc1NC0xLjc1NGgxNi40OTJjLjk2OSAwIDEuNzU0Ljc4NSAxLjc1NCAxLjc1NHYxNi40OTJjMCAuOTY5LS43ODUgMS43NTQtMS43NTQgMS43NTQiIGZpbGw9IiNFQzU0MjQiLz48cGF0aCBkPSJNMzcuMjQ2IDI5SDIwLjc1NEExLjc1NCAxLjc1NCAwIDAgMSAxOSAyNy4yNDZWMTAuNzU0QzE5IDkuNzg1IDE5Ljc4NSA5IDIwLjc1NCA5aDE2LjQ5MkMzOC4yMTUgOSAzOSA5Ljc4NSAzOSAxMC43NTR2MTYuNDkyYzAgLjk2OS0uNzg1IDEuNzU0LTEuNzU0IDEuNzU0IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 14',
          subtitle: 'Non Interactive',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBmaWxsPSIjNDRDN0Y0IiBkPSJNMTYuODA0IDMyLjM5OWwtMi44MS0xLjYyNSA4Ljc0Mi0xNS4xNyAyLjgxIDEuNjI1eiIvPjxwYXRoIGZpbGw9IiNFQzU0MjQiIGQ9Ik0zMS40NzYgMzIuMzk5bC04Ljc0MS0xNS4xNyAyLjgwOS0xLjYyNSA4Ljc0MSAxNS4xN3oiLz48cGF0aCBkPSJNMjkuNTUzIDE2LjQxN2E1LjQxMSA1LjQxMSAwIDAgMS01LjQwNyA1LjQxNiA1LjQxMSA1LjQxMSAwIDAgMS01LjQwNi01LjQxNkE1LjQxMSA1LjQxMSAwIDAgMSAyNC4xNDYgMTFhNS40MTEgNS40MTEgMCAwIDEgNS40MDcgNS40MTciIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjAuODEyIDMxLjU4M0E1LjQxMSA1LjQxMSAwIDAgMSAxNS40MDYgMzcgNS40MTEgNS40MTEgMCAwIDEgMTAgMzEuNTgzYTUuNDExIDUuNDExIDAgMCAxIDUuNDA2LTUuNDE2IDUuNDExIDUuNDExIDAgMCAxIDUuNDA2IDUuNDE2IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTM4LjI5MyAzMS41ODNhNS40MTEgNS40MTEgMCAwIDAtNS40MDctNS40MTYgNS40MTEgNS40MTEgMCAwIDAtNS40MDYgNS40MTZBNS40MTEgNS40MTEgMCAwIDAgMzIuODg2IDM3YTUuNDExIDUuNDExIDAgMCAwIDUuNDA3LTUuNDE3IiBmaWxsPSIjNDRDN0Y0Ii8+PC9nPjwvZz48L3N2Zz4='
        },
        {
          title: 'Item 15',
          subtitle: 'Regular Web App',
          image:
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6Ii8+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMzEuMzMyIDExLjAyN0ExNS40MzMgMTUuNDMzIDAgMCAwIDIzLjY2NyA5djEwLjA3NWMuODY4LS4wMDEgMS43NDkuMjE2IDIuNTU1LjY3NSAyLjQ0NCAxLjM5IDMuMjgxIDQuNDcxIDEuODcgNi44OGw4Ljg1MSA1LjAzN2M0LjIzNC03LjIyNyAxLjcyMi0xNi40NjgtNS42MTEtMjAuNjQiIGZpbGw9IiMxNjIxNEQiLz48cGF0aCBkPSJNMjQgOUMxNS43MTYgOSA5IDE1Ljc2NSA5IDI0LjExYzAgMi43NTMuNzMgNS4zMzQgMi4wMDggNy41NTdsOC42NjEtNS4wMzhBNS4wNDIgNS4wNDIgMCAwIDEgMTkgMjQuMTFjMC0yLjc4MSAyLjIzOS01LjAzNiA1LTUuMDM2czUtMi4yNTUgNS01LjAzN1MyNi43NjEgOSAyNCA5IiBmaWxsPSIjRUM1NDI0Ii8+PHBhdGggZD0iTTI4LjMzNCAyNi4yMjNhNS4wMzUgNS4wMzUgMCAwIDEtMS44MzIgMS44N2MtMi4zOTIgMS40MTEtNS40NTIuNTc0LTYuODMzLTEuODctMS4zODEtMi40NDUtNC40NDEtMy4yODItNi44MzQtMS44Ny0yLjM5MiAxLjQxLTMuMjEyIDQuNTM1LTEuODMgNi45OCA0LjE0NCA3LjMzMiAxMy4zMjIgOS44NDQgMjAuNSA1LjYxQTE1LjEwNCAxNS4xMDQgMCAwIDAgMzcgMzEuMzM0bC04LjY2Ni01LjExeiIgZmlsbD0iIzQ0QzdGNCIvPjxwYXRoIGQ9Ik0zMC4xNjcgMzIuOTk2YTUgNSAwIDEgMSA1LTguNjU5IDUgNSAwIDAgMS01IDguNjYiIGZpbGw9IiMxNjIxNEQiLz48L2c+PC9nPjwvc3ZnPg=='
        }
      ]
    }
  }

  onPageChange(page) {
    this.setState({ page })
  }

  getCurrentItems() {
    const { page, perPage, items } = this.state
    const from = (page - 1) * perPage
    const to = from + perPage
    return items.slice(from, to)
  }

  render() {
    const { page, perPage, items } = this.state
    return (
      <React.Fragment>
        <ResourceList
          items={this.getCurrentItems()}
          actions={[
            <Button icon="settings" onClick={() => {}} label="Settings" />,
            <Button icon="delete" onClick={() => {}} label="Delete" />
          ]}
        />
        <PaginationToolbar
          page={page}
          perPage={perPage}
          items={items.length}
          onPageChanged={this.onPageChange.bind(this)}
        />
      </React.Fragment>
    )
  }
}
```

## Usage with Table

```js
class PaginatedTable extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg',
          email: 'winona.kuiters@example.com',
          latestLogin: '17 days ago',
          logins: 64
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
          email: 'gaëlle.vincent@example.com',
          latestLogin: '10 days ago',
          logins: 2
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/50.jpg',
          email: 'victoria.rasmussen@example.com',
          latestLogin: '9 days ago',
          logins: 78
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
          email: 'salvador.esteban@example.com',
          latestLogin: '11 days ago',
          logins: 37
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
          email: 'ines.hidalgo@example.com',
          latestLogin: '16 days ago',
          logins: 18
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/76.jpg',
          email: 'ebubekir.scheer@example.com',
          latestLogin: '15 days ago',
          logins: 63
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/40.jpg',
          email: 'shivanie.sprengers@example.com',
          latestLogin: '10 days ago',
          logins: 51
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/57.jpg',
          email: 'marinalda.farias@example.com',
          latestLogin: '12 days ago',
          logins: 36
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
          email: 'elizabeth.scott@example.com',
          latestLogin: '9 days ago',
          logins: 75
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/86.jpg',
          email: 'marcel.sjøvold@example.com',
          latestLogin: '10 days ago',
          logins: 8
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/14.jpg',
          email: 'megan.macdonald@example.com',
          latestLogin: '2 days ago',
          logins: 75
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/51.jpg',
          email: 'frida.aanonsen@example.com',
          latestLogin: '6 days ago',
          logins: 2
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/63.jpg',
          email: 'ivy.smith@example.com',
          latestLogin: '2 days ago',
          logins: 31
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
          email: 'stein.fimreite@example.com',
          latestLogin: '11 days ago',
          logins: 5
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/30.jpg',
          email: 'julia.morgan@example.com',
          latestLogin: '15 days ago',
          logins: 75
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/21.jpg',
          email: 'naim.gaillard@example.com',
          latestLogin: '6 days ago',
          logins: 10
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
          email: 'eline.garcia@example.com',
          latestLogin: '11 days ago',
          logins: 86
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/3.jpg',
          email: 'liana.martin@example.com',
          latestLogin: '4 days ago',
          logins: 6
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/women/32.jpg',
          email: 'maeva.gagnon@example.com',
          latestLogin: '4 days ago',
          logins: 75
        },
        {
          avatar: 'https://randomuser.me/api/portraits/thumb/men/48.jpg',
          email: 'marc.santos@example.com',
          latestLogin: '10 days ago',
          logins: 44
        }
      ],
      perPage: 5,
      page: 1
    }
  }

  onPageChange(page) {
    this.setState({ page })
  }

  getCurrentItems() {
    const { page, perPage, items } = this.state
    const from = (page - 1) * perPage
    const to = from + perPage
    return items.slice(from, to)
  }

  render() {
    return (
      <React.Fragment>
        <Table items={this.getCurrentItems()}>
          <Table.Column field="image" title="User" width="50%">
            {item => (
              <AvatarBlock size="compact" type="user" image={item.avatar} title={item.email} />
            )}
          </Table.Column>

          <Table.Column field="latestLogin" title="Latest Login" width="25%" />
          <Table.Column field="logins" title="Logins" sortable width="25%" />
        </Table>
        <PaginationToolbar
          items={this.state.items.length}
          perPage={this.state.perPage}
          page={this.state.page}
          onPageChanged={this.onPageChange.bind(this)}
        />
      </React.Fragment>
    )
  }
}
```
