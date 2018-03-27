import React from 'react'
import styled from 'styled-components'

import { Switch, Stack, Icon } from 'auth0-cosmos'
import { spacing } from 'auth0-cosmos/tokens'

const ConnectionType = styled.div`
  display: flex;
  align-items: center;

  ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }
`

const ConnectionListRow = props => {
  return (
    <Stack widths={[41, 41, 18]}>
      <div>{props.name}</div>
      <ConnectionType>
        <Icon size={16} name={props.icon} />
        {props.connection}
      </ConnectionType>
      <Stack align="right">
        {props.switchOn ? (
          <Switch on accessibleLabels={[]} />
        ) : (
          <Switch off accessibleLabels={[]} />
        )}
      </Stack>
    </Stack>
  )
}

export default ConnectionListRow
