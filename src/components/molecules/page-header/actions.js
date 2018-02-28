import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

import Button from '../../atoms/button'

const StyledActions = styled.div`
  float: right;
  margin-top: ${spacing.xsmall};

  button {
    float: right;
    margin-left: ${spacing.small};
  }
`

const Actions = props => {
  const { primaryAction, secondaryAction } = props.actions
  return (
    <StyledActions>
      {primaryAction && (
        <Button primary icon={primaryAction.icon} onClick={primaryAction.method}>
          {primaryAction.label}
        </Button>
      )}
      {secondaryAction && (
        <Button transparent icon={secondaryAction.icon} onClick={secondaryAction.method}>
          {secondaryAction.label}
        </Button>
      )}
    </StyledActions>
  )
}

export default Actions
