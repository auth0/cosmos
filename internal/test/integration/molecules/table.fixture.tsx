import * as React from 'react'
import { Table } from '@auth0/cosmos'

const mockOnSort = jest.fn()
const mockOnRowClick = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Table id="custom-id" items={items} onRowClick={mockOnRowClick} onSort={mockOnSort}>
        <Table.Column field="name" title="Name" width="30%" />
        <Table.Column field="country" title="Country" />
        <Table.Column field="goals" title="Goals" sortable />
        <Table.Column field="assists" title="Assists" />
      </Table>
    )
  }
}

Fixture.onSort = mockOnSort
Fixture.onRowClick = mockOnRowClick

export default Fixture

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
