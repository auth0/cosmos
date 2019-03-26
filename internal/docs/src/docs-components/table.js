import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts } from '@auth0/cosmos/tokens'

const Table = styled.table`
  width: 100%;
  margin-bottom: 80px;
  white-space: normal;
  th,
  td {
    text-align: left;
    padding: ${spacing.small} ${spacing.small};
    vertical-align: middle;
    position: relative;
    color: ${colors.base.grayDark};
  }
  th {
    border-bottom: 2px solid #ddd;
  }
  td {
    border-bottom: 1px solid #ddd;
  }
  th {
    text-transform: uppercase;
    font-weight: ${fonts.weight.medium};
    letter-spacing: 1px;
    font-size: 12px;
  }
`

export default Table
