import React from 'react'
import styled from 'styled-components'

import { List, Switch, Stack, Icon } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos-tokens'
import { connections } from '../pages/client-detail/connections.json'

const ConnectionType = styled.div`
  display: flex;
  align-items: center;

  ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }
`

const ConnectionList = props => {
  return (
    <div>
      {Object.keys(connections).map((items, i) => (
        <List label={items} key={i}>
          {connections[items].map((cnt, i) => (
            <div key={i}>
              {cnt.connection ? (
                <Stack widths={[41, 41, 18]}>
                  <div>{cnt.name}</div>
                  <ConnectionType>
                    <Icon size={16} name={cnt.icon} />
                    {cnt.connection}
                  </ConnectionType>
                  <Stack align="right">
                    {cnt.switchOn ? (
                      <Switch on accessibleLabels={[]} />
                    ) : (
                      <Switch off accessibleLabels={[]} />
                    )}
                  </Stack>
                </Stack>
              ) : (
                <span>There are no connections</span>
              )}
            </div>
          ))}
        </List>
      ))}
    </div>
  )
}

export default ConnectionList
