import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/button'

const StyledActions = styled.div`
  float: right;

  button {
    float: right;
  }
`

const Actions = props => {
  return (
    <StyledActions>
      {props.children.primaryAction && (
        <Button
          primary
          icon={props.children.primaryAction.icon}
          onClick={props.children.primaryAction.method}
        >
          {props.children.primaryAction.label}
        </Button>
      )}
      {props.children.secondaryAction && (
        <Button
          transparent
          icon={props.children.secondaryAction.icon}
          onClick={props.children.secondaryAction.method}
        >
          {props.children.secondaryAction.label}
        </Button>
      )}
    </StyledActions>
  )
}

export default Actions
