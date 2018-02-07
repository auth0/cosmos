import React from 'react'
import styled from 'styled-components'

import Button from '../../atoms/button'
import Icon from '../../atoms/icon'

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
        <Button primary onClick={props.children.primaryAction.method}>
          {props.children.primaryAction.icon ? (
            <Icon type={props.children.primaryAction.icon} />
          ) : null}
          {props.children.primaryAction.label}
        </Button>
      )}
      {props.children.secondaryAction && (
        <Button transparent onClick={props.children.secondaryAction.method}>
          {props.children.secondaryAction.icon ? (
            <Icon type={props.children.secondaryAction.icon} />
          ) : null}
          {props.children.secondaryAction.label}
        </Button>
      )}
    </StyledActions>
  )
}

export default Actions
