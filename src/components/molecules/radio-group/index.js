import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacing } from '@auth0/cosmos-tokens'

import Radio, { StyledRadio } from '../../atoms/radio'

const justifyContent = {
  horizontal: 'right',
  vertical: 'bottom'
}

const StyledRadioGroup = styled.div`
  ${StyledRadio} {
    display: ${props => (props.align === 'horizontal' ? 'inline-block' : 'table')};
    margin-${props => justifyContent[props.align]}: ${props =>
  props.align === 'horizontal' ? spacing.medium : spacing.small};

    &:last-child {
      margin: 0;
    }
  }
`

const RadioGroup = props => (
  <StyledRadioGroup {...props}>
    {React.Children.map(props.children, child => {
      if (child.type === Radio)
        return React.cloneElement(child, {
          isChecked: props.value === child.props.value,
          name: props.name,
          readOnly: props.readOnly,
          onChange: props.handleChange
        })
      return child
    })}
  </StyledRadioGroup>
)

RadioGroup.propTypes = {
  /** Two options for controlling radio aligns  */
  align: PropTypes.oneOf(['horizontal', 'vertical'])
}

RadioGroup.defaultProps = {
  align: 'vertical'
}

export default RadioGroup
export { StyledRadioGroup }
