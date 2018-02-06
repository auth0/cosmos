import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing, colors } from '../../../../tokens'
import getLayout from '../layout'

import Button from '../../../atoms/button'
import { Right, Clear } from '../../../_helpers/float'

const StyledActions = styled.div`
  padding-left: ${props =>
    props.layout === 'label-on-left' ? getLayout(props.layout).labelWidth : 0};
  height: 100px;
  margin-top: ${spacing.xlarge};
  border-top: 1px solid ${colors.base.grayLight};
  padding-top: ${spacing.medium};
`

const Actions = props => {
  const layout = 'label-on-top'

  return (
    <StyledActions layout={layout}>
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

Actions.displayName = 'Form Actions'

const actionShape = {
  label: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired
}

Actions.propTypes = {
  primaryAction: PropTypes.shape(actionShape),
  secondaryActions: PropTypes.arrayOf(PropTypes.shape(actionShape)),
  destructiveActions: PropTypes.arrayOf(PropTypes.shape(actionShape))
}

Actions.defaultProps = {}

export default Actions
export { StyledActions }
