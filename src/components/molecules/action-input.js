import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Input from '../atoms/input'
import Button, { StyledButton } from '../atoms/button'

const Wrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  ${StyledButton} {
    margin: 0;
  }
`

/**
 * Used when input can have actions attached
 */

const ActionInput = props => {
  if (props.actions) {
    return (
      <Wrapper>
        <Input {...props} />
        <ButtonGroup>
          {props.actions.map((action, index) => (
            <Button key={index} link icon={action.icon} onClick={action.method} />
          ))}
        </ButtonGroup>
      </Wrapper>
    )
  } else {
    return <Input {...props} />
  }
}

ActionInput.propTypes = {
  ...Input.propTypes,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      method: PropTypes.func.isRequired
    })
  )
}

ActionInput.defaultProps = {
  ...Input.defaultProps,
  actions: []
}

export default ActionInput
