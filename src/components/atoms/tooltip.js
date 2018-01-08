import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from '../../tokens/'

const StyledTooltip = styled.div`
  background: ${colors.base};
  color: ${colors.white};
  border-radius: ${misc.radius};
  max-width: 200px;
  text-align: center;
  position: relative;
  padding: ${spacing.xsmall};
  line-height: normal;

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 5.5px 0 5.5px;
    border-color: ${colors.base} transparent transparent transparent;
    top: 100%;
    left: 50%;
    position: absolute;
    margin-left: -5px;
  }
`

const Tooltip = props => {
  return <StyledTooltip {...props} />
}

Tooltip.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool
}

Tooltip.defaultProps = {
  top: true,
  bottom: false
}

export default Tooltip
