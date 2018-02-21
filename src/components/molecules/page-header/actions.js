import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'

const Actions = props => {
  return (
    <ButtonGroup>
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
    </ButtonGroup>
  )
}

export default Actions
