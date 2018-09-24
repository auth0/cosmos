```meta
  category: Layout
  description: Display a table of data
  unstable: true
```

`import { Table } from '@auth0/cosmos'`

```jsx
<Table
  items={[
    {
      name: 'Harry Kane',
      goals: 6,
      assists: 0,
      country: '🇬🇧',
      image: 'https://twitter-avatar.now.sh/HKane'
    },
    {
      name: 'Romelu Lukaku',
      goals: 4,
      assists: 1,
      country: '🇧🇪',
      image: 'https://twitter-avatar.now.sh/Romelu_lukaku9'
    },
    {
      name: 'Antoine Griezmann',
      goals: 4,
      assists: 2,
      country: '🇫🇷',
      image: 'https://twitter-avatar.now.sh/AntoGriezmann'
    },
    {
      name: 'Ivan Perišić',
      goals: 3,
      assists: 1,
      country: '🇭🇷',
      image: 'https://twitter-avatar.now.sh/ivanperisic44'
    }
  ]}
  onRowClick={(evt, item) => alert(`${item.name} was clicked!`)}
>
  <Table.Column field="image" width="50px">
    {item => <Avatar type="user" image={item.image} />}
  </Table.Column>
  <Table.Column field="name" title="Name" width="30%" />
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" />
  <Table.Column field="assists" title="Assists" />
</Table>
```

### Table Column

| Field        | Type   | Default | Required | Description                                |
| ------------ | ------ | ------- | -------- | ------------------------------------------ |
| `field`      | string |         | true     | Which field from data to display           |
| `title`      | string |         | false    | Title for the column                       |
| `width`      | string |         | false    | Column width                               |
| `sortable`   | bool   | false   | false    | Whether to make the column sortable or not |
| `comparator` | func   |         | false    | Custom comparator function for sorting     |
| `truncating` | bool   | true    | false    | Whether to truncate the cell text or not   |

## Examples

### Automatic sorting

The `Table` can sort the rows that it displays by the values of a given column. To indicate
that a column is sortable, you can give it the `sortable` prop. By default, the `Table` will
begin with the first `sortable` column selected for sorting. You can change this behavior
by specifying the column to sort by in the `sortOn` prop.

```js
<Table
  items={[
    {
      name: 'Harry Kane',
      goals: 6,
      assists: 0,
      country: '🇬🇧',
      image: 'https://twitter-avatar.now.sh/HKane'
    },
    {
      name: 'Romelu Lukaku',
      goals: 4,
      assists: 1,
      country: '🇧🇪',
      image: 'https://twitter-avatar.now.sh/Romelu_lukaku9'
    },
    {
      name: 'Antoine Griezmann',
      goals: 4,
      assists: 2,
      country: '🇫🇷',
      image: 'https://twitter-avatar.now.sh/AntoGriezmann'
    },
    {
      name: 'Ivan Perišić',
      goals: 3,
      assists: 1,
      country: '🇭🇷',
      image: 'https://twitter-avatar.now.sh/ivanperisic44'
    }
  ]}
  sortOn="assists"
>
  <Table.Column field="image" width="50px">
    {item => <Avatar type="user" image={item.image} />}
  </Table.Column>
  <Table.Column field="name" title="Name" width="30%" />
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" sortable />
  <Table.Column field="assists" title="Assists" sortable />
</Table>
```

### Custom compare function

Normally, the `Table` will compare of the values of the sorted column using a comparator
function that makes sense for the type of data contained in the column. For example,
if the column contains numbers, they will be compared numerically, and if the column
contains strings, they will be compared alphabetically.

Sometimes, you might need to override this behavior. For example, you may wish to support
sorting by a field that contains data of various types, or you might have a column that
represents a computation of other fields. In this case, you can specify your own custom
comparator function using the `comparator` prop.

```js
<Table
  items={[
    {
      name: 'Harry Kane',
      goals: 6,
      assists: 0,
      country: '🇬🇧',
      image: 'https://twitter-avatar.now.sh/HKane'
    },
    {
      name: 'Romelu Lukaku',
      goals: 4,
      assists: 1,
      country: '🇧🇪',
      image: 'https://twitter-avatar.now.sh/Romelu_lukaku9'
    },
    {
      name: 'Antoine Griezmann',
      goals: 4,
      assists: 2,
      country: '🇫🇷',
      image: 'https://twitter-avatar.now.sh/AntoGriezmann'
    },
    {
      name: 'Ivan Perišić',
      goals: 3,
      assists: 1,
      country: '🇭🇷',
      image: 'https://twitter-avatar.now.sh/ivanperisic44'
    }
  ]}
>
  <Table.Column field="image" width="50px">
    {item => <Avatar type="user" image={item.image} />}
  </Table.Column>
  <Table.Column field="name" title="Name" width="30%" />
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" sortable />
  <Table.Column field="assists" title="Assists" sortable />
  <Table.Column
    field="points"
    title="Points"
    sortable
    comparator={(a, b) => {
      return a.goals + a.assists - b.goals - b.assists
    }}
  >
    {item => item.goals + item.assists}
  </Table.Column>
</Table>
```

### Controlled sorting

By default, the `Table` will operate in _uncontrolled_ mode, meaning it will keep track of
the state required to sort the rows. This is the simplest possible way to use the `Table`,
but sometimes you might want to take control of the sorting mechanism in your own application.

To do so, you can pass a function via the `onSort` prop, which will be called when the `Table`
is sorted (for example, when column header is clicked). This function will be passed two
arguments, `sortOn`, which is the name of the column that is being sorted, and `sortDirection`,
which will be either `asc` (ascending) or `desc` (descending).

If you override the sorting functionality, you will also need to specify values for the `sortOn`
and `sortDirection` props, as shown in the following example.

```js
class Example extends React.Component {
  constructor() {
    super()
    const items = [
      {
        name: 'Harry Kane',
        goals: 6,
        assists: 0,
        country: '🇬🇧',
        image: 'https://twitter-avatar.now.sh/HKane'
      },
      {
        name: 'Romelu Lukaku',
        goals: 4,
        assists: 1,
        country: '🇧🇪',
        image: 'https://twitter-avatar.now.sh/Romelu_lukaku9'
      },
      {
        name: 'Antoine Griezmann',
        goals: 4,
        assists: 2,
        country: '🇫🇷',
        image: 'https://twitter-avatar.now.sh/AntoGriezmann'
      },
      {
        name: 'Ivan Perišić',
        goals: 3,
        assists: 1,
        country: '🇭🇷',
        image: 'https://twitter-avatar.now.sh/ivanperisic44'
      }
    ]
    this.state = { items, sortOn: 'goals', sortDirection: 'desc' }
  }
  onSort(sortOn, sortDirection) {
    let items = this.state.items.sort((a, b) => {
      return a[sortOn] - b[sortOn]
    })

    if (sortDirection === 'desc') items.reverse()

    this.setState({ items, sortOn, sortDirection })
  }
  render() {
    return (
      <Table
        sortOn={this.state.sortOn}
        sortDirection={this.state.sortDirection}
        onSort={this.onSort.bind(this)}
        items={this.state.items}
      >
        <Table.Column field="image" width="50px">
          {item => <Avatar type="user" image={item.image} />}
        </Table.Column>
        <Table.Column field="name" title="Name" width="30%" />
        <Table.Column field="country" title="Country" />
        <Table.Column field="goals" title="Goals" sortable />
        <Table.Column field="assists" title="Assists" sortable />
      </Table>
    )
  }
}
```

### Empty table

You can optionally pass an message to the table and it will be shown if there are no items in the dataset. In case you don't provide it, we will use "There are no items to display" as the default.

```js
<Table items={[]} emptyMessage="You don't have any users in your tenant at the moment.">
  <Table.Column field="image" width="50px">
    {item => <Avatar type="user" image={item.image} />}
  </Table.Column>
  <Table.Column field="name" title="Name" width="30%" />
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" sortable />
  <Table.Column field="assists" title="Assists" sortable />
</Table>
```
