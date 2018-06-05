import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'
import getLayout from '../layout'

import Button from '../../../atoms/button'
import ButtonGroup from '../../../molecules/button-group'
import { Right, Clear } from '../../../_helpers/float'
import { actionShape } from '@auth0/cosmos/_helpers/action-shape'

const StyledActions = styled.div`
  width: ${props => getLayout(props.layout).formWidth};
  padding-left: ${props =>
    props.layout === 'label-on-left' ? getLayout(props.layout).labelWidth : 0};
  margin-left: ${props => (props.layout === 'label-on-left' ? 0 : 'auto')};
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.small};
`

const Actions = props => {
  const layout = props.layout

  return (
    <StyledActions layout={layout}>
      <ButtonGroup>
        {props.primaryAction && (
          <Button
            appearance="primary"
            icon={props.primaryAction.icon}
            onClick={props.primaryAction.handler}
          >
            {props.primaryAction.label}
          </Button>
        )}

        {props.secondaryActions &&
          props.secondaryActions.map((action, index) => {
            return (
              <Button
                appearance="secondary"
                icon={action.icon}
                key={index}
                onClick={action.handler}
              >
                {action.label}
              </Button>
            )
          })}

        {props.destructiveActions && (
          <Right>
            {props.destructiveActions.map((action, index) => (
              <Button
                appearance="destructive"
                icon={action.icon}
                key={index}
                onClick={action.handler}
              >
                {action.label}
              </Button>
            ))}
          </Right>
        )}
      </ButtonGroup>
      <Clear />
    </StyledActions>
  )
}

Actions.displayName = 'Form Actions'

Actions.propTypes = {
  primaryAction: actionShape,
  secondaryActions: PropTypes.arrayOf(actionShape)
}

Actions.defaultProps = {}

export default Actions
export { StyledActions }
