import React from 'react'

import { Switch, Stack } from 'auth0-cosmos'

const ConnectionListRow = props => {
  return (
    <Stack widths={[41, 41, 18]}>
      <div>{props.name}</div>
      <div>{props.connection}</div>
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
