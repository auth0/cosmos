import React from 'react'
import styled from 'styled-components'

import { PageHeader, List, Stack, Code, Button, Link, ButtonGroup, Avatar } from 'auth0-cosmos'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledPageHeader } from 'auth0-cosmos/molecules/page-header'

import { colors, spacing } from 'auth0-cosmos/tokens'
import CreateClientDialog from './create-client-dialog'
import ClientTypeImages from '../../components/client-types-images'

/* TODO: Should be a Close Component */
const NameGroup = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${spacing.xsmall};
  }
`

/* TODO: Should be a type of paragraph: Paragrapgh small? */
const ClientID = styled.span`
  font-size: 13px;
  color: ${colors.base.grayDarkest};
  margin-right: ${spacing.xsmall};
`

/* TODO: Should be a Component or part of typographic styles: allcaps ? */
const Type = styled.div`
  font-size: 12px;
  color: ${colors.base.grayDark};
  letter-spacing: 1px;
  line-height: normal;
  margin-top: ${spacing.xsmall};
  text-transform: uppercase;
`

/* TODO: Remove this override */
const ClientsContent = styled.div`
  ${StyledPageHeader} {
    margin-bottom: ${spacing.xxlarge};
  }
`

const clients = [
  {
    id: 'apXVn76xBT7WougWj17MGXHSthfrBB',
    name: 'My Site',
    type: 'REGULAR WEB APP',
    image: ClientTypeImages.regular_web
  },
  {
    id: 'NfZmyIGFwJ2OhoGcWhYfeql5Ugy4X',
    name: 'Real View',
    type: 'SINGLE PAGE APPLICATION',
    image: ClientTypeImages.spa
  },
  {
    id: 'KyVu1XTC6jOFPIUhi0yFifanPwE3l',
    name: 'Route App',
    type: 'NATIVE',
    image: ClientTypeImages.native
  },
  {
    id: 'JKYNATAI6jOFPIUhi08AUJUAja7yYo',
    name: 'Help Desk',
    type: 'NATIVE',
    image: ClientTypeImages.native
  },
  {
    id: 'Uaf45iaIxiTRP98Jmamkasd8xjKLl',
    name: 'Single Page',
    type: 'NON INTERACTIVE',
    image: ClientTypeImages.non_interactive
  },
  {
    id: 'GMdIcXxiTRPGtIZKzAN8caUWhxeb1W',
    name: 'Test App',
    type: 'NON INTERACTIVE',
    image: ClientTypeImages.non_interactive
  }
]

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
                <Avatar size={48} image={client.image} />
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
