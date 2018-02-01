import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'
import { labelWidth } from './layout'

import Button from '../../atoms/button'
import { Right, Clear } from '../../_helpers/float'

const StyledActions = styled.div`
  padding-left: ${props => props.labelWidth};
  height: 100px;
  margin-top: ${spacing.xlarge};
  border-top: 1px solid ${colors.base.grayLight};
  padding-top: ${spacing.medium};
`

const Actions = props => {
  return (
    <StyledActions labelWidth={labelWidth}>
      {props.primaryAction && (
        <Button primary onClick={props.primaryAction.method}>
          {props.primaryAction.label}
        </Button>
      )}

      {props.secondaryActions &&
        props.secondaryActions.map((action, index) => {
          return (
            <Button key={index} onClick={action.method}>
              {action.label}
            </Button>
          )
        })}

      {props.destructiveActions && (
        <Right>
          {props.destructiveActions.map((action, index) => (
            <Button key={index} onClick={action.method} destructive>
              {action.label}
            </Button>
          ))}
        </Right>
      )}
      <Clear />
    </StyledActions>
  )
}

export default Actions
export { StyledActions }
