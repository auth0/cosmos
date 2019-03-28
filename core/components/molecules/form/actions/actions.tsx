import * as React from 'react'
import styled from '@auth0/cosmos/styled'

import { spacing } from '@auth0/cosmos-tokens'
import FormContext from '../form-context'

import Button from '../../../atoms/button'
import ButtonGroup from '../../../molecules/button-group'
import { Action, ActionWithoutHandler } from '@auth0/cosmos/_helpers/action-shape'

const getButtonProps = action => {
  const props = { ...action }
  props.icon = action.icon
  props.onClick = action.handler
  /*
    label should not be passed on to Button, it's a way
    of  showing tooltips which is not the intention here
  */
  delete props.label
  return props
}

export interface IActionsProps {
  primaryAction?: ActionWithoutHandler,
  secondaryActions?: Action[],
  destructiveAction?: Action
}

const Actions = props => {
  const { primaryAction, secondaryActions, destructiveAction } = props

  return (
    <FormContext.Consumer>
      {context => (
        <Actions.Element layout={context.layout} fullWidth={context.fullWidth}>
          <ButtonGroup>
            {primaryAction && (
              <Button {...getButtonProps(primaryAction)} appearance="primary">
                {primaryAction.label}
              </Button>
            )}
            {secondaryActions &&
              secondaryActions.map((action, index) => (
                <Button
                  {...getButtonProps(action)}
                  type="button"
                  appearance="secondary"
                  key={index}
                >
                  {action.label}
                </Button>
              ))}
            {destructiveAction && (
              <Button {...getButtonProps(destructiveAction)} appearance="destructive">
                {destructiveAction.label}
              </Button>
            )}
          </ButtonGroup>
        </Actions.Element>
      )}
    </FormContext.Consumer>
  )
}

Actions.Element = styled.div`
  display: grid;
  margin-top: ${spacing.xlarge};
  grid-gap: ${props => (props.layout === 'label-on-left' ? '25px' : '0')};
  @media (min-width: 768px) {
    grid-template-columns: ${props => (props.layout === 'label-on-left' ? '200px 1fr' : '1fr')};

    ${ButtonGroup.Element} {
      grid-column-start: ${props => (props.layout === 'label-on-left' ? '2' : '1')};
    }
  }
`

Actions.displayName = 'Form Actions'

Actions.defaultProps = {}

const StyledActions = Actions.Element

export default Actions
export { StyledActions }
