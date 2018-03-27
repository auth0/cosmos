import React from 'react'
import styled from 'styled-components'

import { PageHeader, List, Stack, Code, Button, Link, ButtonGroup, Thumbnail } from '@auth0/cosmos'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledPageHeader } from '@auth0/cosmos/molecules/page-header'
import { StyledTextAllCaps, StyledTextSubdued } from '@auth0/cosmos/atoms/text'

import { spacing } from '@auth0/cosmos/tokens'
import CreateClientDialog from './create-client-dialog'
import ClientTypeImages from '../../components/client-types-images'

import { clients } from './clients.json'

/* TODO: Should be a Close Component */
const NameGroup = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${spacing.small};
  }
`

const ClientID = styled(StyledTextSubdued)`
  margin-right: ${spacing.xsmall};
  line-height: normal;
`

const Type = styled(StyledTextAllCaps)`
  margin-top: ${spacing.xsmall};
  display: block;
`

/* TODO: Remove this override */
const ClientsContent = styled.div`
  ${StyledPageHeader} {
    margin-bottom: ${spacing.xxlarge};
  }
`

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
            <Stack key={client.id} widths={[35, 40, 25]}>
              <NameGroup>
                <Thumbnail source={ClientTypeImages[client.image]} />
                <div>
                  <Link href={`/clients/${client.id}`}>{client.name}</Link>
                  <Type>{client.type}</Type>
                </div>
              </NameGroup>
              <Stack align="left">
                <ClientID>Client ID</ClientID>
                <Code>{client.id}</Code>
              </Stack>
              <ButtonGroup align="right">
                <Button icon="quickstarts" label="Quickstart" />
                <Button icon="settings" label="Settings" />
                <Button icon="code" label="Addons" />
                <Button icon="connections" label="Connections" />
              </ButtonGroup>
            </Stack>
          ))}
        </List>
        <CreateClientDialog open={this.state.dialogOpen} onClose={this.setDialogOpen(false)} />
      </ClientsContent>
    )
  }
}

export default ClientList
