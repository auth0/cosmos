import React from 'react'
import styled from 'styled-components'
import { colors } from '@auth0/cosmos/tokens'
const versionCompare = require('semver-compare')

import { Icon } from '@auth0/cosmos'
import { changelog } from '@auth0/cosmos/meta/changelog'

/* grab lines that start with ## */
const regex = /^## (.*)$/gm
const lines = changelog.match(regex)
let versions = lines.map((line) => line.split('## ')[1].split(' [')[0])

/* remove versions older than 0.5.1 */
versions = versions.filter((version) => versionCompare(version, '0.5.0') === 1)

const StyledVersionSwitcher = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const StyledIcon = styled(Icon).attrs({
  name: 'dropdown-fill',
  color: 'grayLightest',
  size: '10'
})`
  position: absolute;
  right: 0.5em;
`

const StyledSelect = styled.select`
  background: transparent;
  border: none;
  font-size: 13px;
  border: 1px solid #8e8e8e;
  border-radius: 5px;
  appearance: none;
  padding: 0.15em 0.5em;
  padding-right: 1.75em;
  color: ${colors.base.grayLight};
  position: relative;
  option {
    color: black;
  }
`

const VersionSwitcher = () => (
  <StyledVersionSwitcher>
    <StyledIcon />
    <StyledSelect
      onChange={(event) => {
        const version = event.target.value.replace(/\./g, '-')
        window.location.href = `https://auth0-cosmos-${version}.now.sh`
      }}
    >
      {versions.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </StyledSelect>
  </StyledVersionSwitcher>
)

export default VersionSwitcher
