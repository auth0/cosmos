import React from 'react'
import styled from 'styled-components'
import { colors } from '@auth0/cosmos/tokens'

const versions = ['0.5.2', '0.5.1']

const Wrapper = styled.span`
  font-size: 14px;
  letter-spacing: 1.4px;
  1display: inline-block;
  color: ${colors.base.grayLightest};
  font-weight: 700;
  margin-left: 16px;

  select {
    background: transparent;
    border: none;
    font-size: 12px;
    color: ${colors.base.grayLight};
  }
`

const VersionSwitcher = () => (
  <Wrapper>
    COSMOS
    <select
      onChange={event => {
        window.location.href = `https:auth0-cosmos-${event.target.value.replace(/\./g, '-')}.now.sh`
      }}
    >
      {versions.map(v => <option value={v}>{v}</option>)}
    </select>
  </Wrapper>
)

export default VersionSwitcher
