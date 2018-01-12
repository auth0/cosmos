import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from '../../../tokens/'

const StyledTooltip = styled.div`
  background: ${colors.tooltip.background};
  color: ${colors.tooltip.text};
  border-radius: ${misc.radius};
  max-width: 200px;
  text-align: center;
  position: relative;
  padding: ${spacing.xsmall};
  line-height: normal;
  font-size: 13px;

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    left: 50%;
    position: absolute;
    margin-left: -5px;

    ${props =>
      props.bottom
        ? css`
            border-width: 0 5.5px 6px 5.5px;
            border-color: transparent transparent ${colors.tooltip.background} transparent;
            bottom: 100%;
          `
        : css`
            border-width: 6px 5.5px 0 5.5px;
            border-color: ${colors.tooltip.background} transparent transparent transparent;
            top: 100%;
          `};
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
  top: null,
  bottom: false
}

export default Tooltip
