import React from 'react'
import styled from 'styled-components'

import { PageHeader } from '@auth0/cosmos'

import CreateClientDialog from './create-client-dialog'
import ClientList from '../../components/client-list'

const ClientsContent = styled.div``

class ClientIndex extends React.Component {
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

        <ClientList />

        <CreateClientDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </ClientsContent>
    )
  }
}

export default ClientIndex
