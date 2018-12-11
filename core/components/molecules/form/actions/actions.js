import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { spacing } from '@auth0/cosmos-tokens'
import getLayoutValues from '../layout'
import FormContext from '../form-context'

import Button from '../../../atoms/button'
import ButtonGroup from '../../../molecules/button-group'
import { Right, Clear } from '../../../_helpers/float'
import { actionShape, actionShapeWithoutRequiredHandler } from '@auth0/cosmos/_helpers/action-shape'

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

const Actions = props => {
  const { primaryAction, secondaryActions, destructiveAction } = props

  return (
    <FormContext.Consumer>
      {context => (
        <Actions.Element
          layout={context.layout}
          margin={{
            top: 'medium',
            bottom: 'small',
            left: props.layout === 'label-on-left' ? 0 : 'auto'
          }}
        >
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
              <Right>
                <Button {...getButtonProps(destructiveAction)} appearance="destructive">
                  {destructiveAction.label}
                </Button>
              </Right>
            )}
          </ButtonGroup>
          <Clear />
        </Actions.Element>
      )}
    </FormContext.Consumer>
  )
}

Actions.Element = styled.div`
  width: ${props => getLayoutValues(props.layout).formWidth};
  padding-left: ${props =>
    props.layout === 'label-on-left' ? getLayoutValues(props.layout).labelWidth : 0};
`

Actions.displayName = 'Form Actions'

Actions.propTypes = {
  primaryAction: actionShapeWithoutRequiredHandler,
  secondaryActions: PropTypes.arrayOf(actionShape),
  destructiveAction: actionShape
}

Actions.defaultProps = {}

const StyledActions = Actions.Element

export default Actions
export { StyledActions }
