import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Code, ResourceList } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos-tokens'
import { clients } from '../pages/clients/clients.json'

import ClientTypeImages from './client-types-images'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledTextSubdued } from '@auth0/cosmos/atoms/text'

const noop = () => {}

const ClientID = styled(StyledTextSubdued)`
  margin-right: ${spacing.xsmall};
  line-height: normal;
`

const ClientList = props => (
  <ResourceList
    items={clients}
    renderItem={(client, props, index) => (
      <ResourceList.Item
        key={index}
        title={client.name}
        subtitle={client.type}
        href={`/manage/clients/${client.id}`}
        image={ClientTypeImages[client.image]}
        actions={props.actions}
      >
        <ClientID>Client ID</ClientID>
        <Code>{client.id}</Code>
      </ResourceList.Item>
    )}
    actions={[
      { icon: 'quickstarts', label: 'Quickstart', handler: noop },
      { icon: 'settings', label: 'Settings', handler: noop },
      { icon: 'code', label: 'Addons', handler: noop },
      { icon: 'connections', label: 'Connections', handler: noop }
    ]}
  />
)

ClientList.propTypes = {
  /* App token */
  id: PropTypes.string.isRequired,
  /* App name */
  name: PropTypes.string
}

ClientList.defaultProps = {
  id: null,
  name: null
}

export default ClientList
