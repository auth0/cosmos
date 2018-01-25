import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'

const Wrapper = styled.div`
  position: relative;
`

const ButtonGroup = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
  ${Button.Element} {
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
        <TextInput {...props} />
        <ButtonGroup>
          {props.actions.map((action, index) => (
            <Button key={index} link icon={action.icon} onClick={action.method} />
          ))}
        </ButtonGroup>
      </Wrapper>
    )
  } else {
    return <TextInput {...props} />
  }
}

ActionInput.propTypes = {
  ...TextInput.propTypes,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      method: PropTypes.func.isRequired
    })
  )
}

ActionInput.defaultProps = {
  ...TextInput.defaultProps,
  actions: []
}

export default ActionInput
