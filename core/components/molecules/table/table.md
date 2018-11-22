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
  <Table.Column field="name" title="Name" width="30%">
    {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
  </Table.Column>
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" />
  <Table.Column field="assists" title="Assists" />
</Table>
```

### Table Column

| Field        | Type   | Default | Required | Description                                |
| ------------ | ------ | ------- | -------- | ------------------------------------------ |
| `field`      | string |         | false    | Which field from data to display           |
| `title`      | string |         | false    | Title for the column                       |
| `width`      | string |         | false    | Column width                               |
| `sortable`   | bool   | false   | false    | Whether to make the column sortable or not |
| `comparator` | func   |         | false    | Custom comparator function for sorting     |
| `truncate`   | bool   | true    | false    | Whether to truncate the cell text or not   |

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
  <Table.Column field="name" title="Name" width="30%">
    {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
  </Table.Column>
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
  <Table.Column field="name" title="Name" width="30%">
    {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
  </Table.Column>
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
        <Table.Column field="name" title="Name" width="30%">
          {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
        </Table.Column>
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
  <Table.Column field="name" title="Name" width="30%">
    {item => <AvatarBlock type="user" image={item.image} title={item.name} size="compact" />}
  </Table.Column>
  <Table.Column field="country" title="Country" />
  <Table.Column field="goals" title="Goals" sortable />
  <Table.Column field="assists" title="Assists" sortable />
</Table>
```

### Initial loading state

When you are fetching your table's initial data.
You can use the `loading` prop to show a spinner and
let the user know you are wairing for something to load.

```js
<Table loading items={[]}>
  <Table.Column field="data" title="Field 1" />
  <Table.Column field="data" title="Field 2" />
  <Table.Column field="data" title="Field 3" />
  <Table.Column field="data" title="Field 4" />
  <Table.Column field="data" title="Field 7" />
</Table>
```

### Loading table

In case you have to re-fetch data, or switch between pages with async pagination.
Using the `loading` prop won't hide the current data and will still show the spinner.

```js
<Table
  loading
  items={[
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    },
    {
      data: 'Lorem ipsum dolor sit amet.'
    }
  ]}
>
  <Table.Column field="data" title="Field 1" />
  <Table.Column field="data" title="Field 2" />
  <Table.Column field="data" title="Field 3" />
  <Table.Column field="data" title="Field 4" />
  <Table.Column field="data" title="Field 7" />
</Table>
```

### Truncated Content

You can use the `truncate` prop in `Table.Column` to make that column single-line and truncate it's text or link contents.

```js
<Table
  items={[
    {
      name: 'John Doe',
      email: 'john.doe@example.auth0.com',
      latestLogin: 'Yesterday',
      connection: 'Username-Password-Authentication',
      initials: 'JD'
    },
    {
      name: 'Michael Appleseed',
      email: 'john.appleseed@example.auth0.com',
      latestLogin: '2 days ago',
      connection: 'Username-Password-Authentication',
      initials: 'MA'
    },
    {
      name: 'Robert Doe',
      email: 'robert.doe@example.auth0.com',
      latestLogin: '2 days ago',
      connection: 'Username-Password-Authentication',
      initials: 'RD'
    },
    {
      name: 'Shaun Appleseed',
      email: 'shaun.appleseed@example.auth0.com',
      latestLogin: '3 days ago',
      connection: 'Username-Password-Authentication',
      initials: 'SA'
    }
  ]}
>
  <Table.Column>{d => <Avatar email={d.email} initials={d.initials} />}</Table.Column>
  <Table.Column field="name" width="25%" title="Name" truncate />
  <Table.Column field="email" width="25%" title="E-mail" truncate />
  <Table.Column field="latestLogin" width="20%" title="Latest Login" truncate />
  <Table.Column field="connection" width="20%" title="Connection" truncate />
</Table>
```

### Actions in tables

You may want the user to execute action based on items you display on a table.
In that case, que can use a render function to get the current item for a column
and render actions the user can interact with.

```js
class TableWithActions extends React.Component {
  handleActionPressed(item, action) {
    alert(`You have pressed "${action}" for item "${item.name}"`)
  }

  render() {
    return (
      <Table
        items={[
          {
            name: 'Management API',
            base_url: 'https://management.example.com/api/v2/'
          },
          {
            name: 'Authentication API',
            base_url: 'https://id.example.com/'
          },
          {
            name: 'Feature flags API',
            base_url: 'https://internal.example.com/flags/api/v1/'
          }
        ]}
      >
        <Table.Column field="name" width="30%" title="Name" />
        <Table.Column field="base_url" width="50%" title="Client ID" />
        <Table.Column field="actions">
          {item => (
            <ButtonGroup align="right">
              <Button icon="pencil" onClick={() => this.handleActionPressed(item, 'edit')} />
              <Button icon="delete" onClick={() => this.handleActionPressed(item, 'delete')} />
            </ButtonGroup>
          )}
        </Table.Column>
      </Table>
    )
  }
}
```
