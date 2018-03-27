import React from 'react'
import styled from 'styled-components'

import { PageHeader, List } from 'auth0-cosmos'
import { clients } from './clients.json'

import CreateClientDialog from './create-client-dialog'
import ClientListRow from '../../components/client-list-row'

const ClientsContent = styled.div``

class ClientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dialogOpen: false }
  }

  setDialogOpen = dialogOpen => () => {
    this.setState({ dialogOpen })
  }

  render() {
    return (
      <ClientsContent>
        <PageHeader
          title="Clients"
          description={{
            text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
            learnMore: '/clients'
          }}
          primaryAction={{
            label: 'Create Client',
            icon: 'plus',
            method: this.setDialogOpen(true)
          }}
          secondaryAction={{
            label: 'Tutorial',
            icon: 'play-circle',
            method: () => {}
          }}
        />
        <List>
          {clients.map(client => (
            <ClientListRow
              id={client.id}
              name={client.name}
              type={client.type}
              image={client.image}
            />
          ))}
        </List>
        <CreateClientDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </ClientsContent>
    )
  }
}

export default ClientList
