import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Stack, Code, Button, Link, ButtonGroup, Thumbnail } from 'auth0-cosmos'
import { spacing } from 'auth0-cosmos/tokens'

import ClientTypeImages from './client-types-images'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledTextAllCaps, StyledTextSubdued } from 'auth0-cosmos/atoms/text'

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

const ClientListRow = props => {
  /* you can pass on all the props to the component like this */
  return (
    <Stack key={props.id} widths={[35, 40, 25]}>
      <NameGroup>
        <Thumbnail source={ClientTypeImages[props.image]} />
        <div>
          <Link href={`/clients/${props.id}`}>{props.name}</Link>
          <Type>{props.type}</Type>
        </div>
      </NameGroup>
      <Stack align="left">
        <ClientID>Client ID</ClientID>
        <Code>{props.id}</Code>
      </Stack>
      <ButtonGroup align="right">
        <Button icon="quickstarts" label="Quickstart" />
        <Button icon="settings" label="Settings" />
        <Button icon="code" label="Addons" />
        <Button icon="connections" label="Connections" />
      </ButtonGroup>
    </Stack>
  )
}

ClientListRow.propTypes = {
  /* App token */
  id: PropTypes.string.isRequired,
  /* App name */
  name: PropTypes.string
}

ClientListRow.defaultProps = {
  id: null,
  name: null
}

export default ClientListRow
