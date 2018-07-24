import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'
import getLayoutValues from '../layout'
import FormContext from '../form-context'

import Button from '../../../atoms/button'
import ButtonGroup from '../../../molecules/button-group'
import { Right, Clear } from '../../../_helpers/float'
import { actionShape } from '@auth0/cosmos/_helpers/action-shape'

const StyledActions = styled.div`
  width: ${props => getLayoutValues(props.layout).formWidth};
  padding-left: ${props =>
    props.layout === 'label-on-left' ? getLayoutValues(props.layout).labelWidth : 0};
  margin-left: ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.small};
`

const Actions = props => {
  const { primaryAction, secondaryActions, destructiveAction } = props

  return (
    <FormContext.Consumer>
      {context => (
        <StyledActions layout={context.layout}>
          <ButtonGroup>
            {primaryAction && (
              <Button
                {...primaryAction.props}
                appearance="primary"
                icon={primaryAction.icon}
                onClick={primaryAction.handler}
              >
                {primaryAction.label}
              </Button>
            )}

            {secondaryActions &&
              secondaryActions.map((action, index) => (
                <Button
                  {...action.props}
                  appearance="secondary"
                  icon={action.icon}
                  key={index}
                  onClick={action.handler}
                >
                  {action.label}
                </Button>
              ))}

            {destructiveAction && (
              <Right>
                <Button
                  {...destructiveAction.props}
                  appearance="destructive"
                  icon={destructiveAction.icon}
                  onClick={destructiveAction.handler}
                >
                  {destructiveAction.label}
                </Button>
              </Right>
            )}
          </ButtonGroup>
          <Clear />
        </StyledActions>
      )}
    </FormContext.Consumer>
  )
}

Actions.displayName = 'Form Actions'

Actions.propTypes = {
  primaryAction: actionShape,
  secondaryActions: PropTypes.arrayOf(actionShape),
  destructiveAction: actionShape
}

Actions.defaultProps = {}

export default Actions
export { StyledActions }
