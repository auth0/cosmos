import React from 'react'
import { Table } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Table
        id="custom-id"
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
        <Table.Column field="name" title="Name" width="30%" />
        <Table.Column field="country" title="Country" />
        <Table.Column field="goals" title="Goals" />
        <Table.Column field="assists" title="Assists" />
      </Table>
    )
  }
}

export default Fixture
