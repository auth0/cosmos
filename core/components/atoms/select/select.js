import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import Icon from '../icon'
import styled from 'styled-components'

import { misc, colors, spacing } from '@auth0/cosmos-tokens'
import { StyledInput } from '../_styled-input'

const selectOpacity = {
  default: 1,
  disabled: 0.5
}
const PLACEHOLDER_VALUE = '__select_placeholder'

const StyledIcon = styled(Icon).attrs({
  name: 'dropdown-fill',
  size: '14'
})`
  position: absolute;
  right: 12px;

  svg {
    display: block;

    path {
      fill: ${colors.text.default};
    }
  }
`

const StyledSelect = StyledInput.withComponent('select').extend`
  appearance: none;
  
  padding-right: ${spacing.large};
  
  text-overflow: ellipsis;
  overflow-x: hidden;
  
  height: ${misc.input.default.height};
  opacity: ${props => (props.disabled ? selectOpacity.disabled : selectOpacity.default)};
  background-color: ${props =>
    props.disabled ? colors.input.backgroundReadOnly : colors.input.background};
`
const isGroup = option => option.groupName && option.items
const renderOption = (option, idx) => {
  if (isGroup(option)) {
    return (
      <optgroup key={idx} label={option.groupName} {...Automation('select.optgroup')}>
        {option.items.map(renderOption)}
      </optgroup>
    )
  }

  return (
    <option
      key={idx}
      value={option.value}
      readOnly={option.disabled}
      disabled={option.disabled}
      {...Automation('select.option')}
    >
      {option.text}
    </option>
  )
}

const Select = ({ options, ...props }) => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */
  if (!(props.value || props.defaultValue)) props.value = PLACEHOLDER_VALUE

  return (
    <Select.Wrapper>
      <StyledIcon />
      <StyledSelect {...props} {...Automation('select')}>
        {/* First option will be selected if there is no value passed as a prop */}
        <option disabled hidden value={PLACEHOLDER_VALUE} {...Automation('select.option')}>
          {props.placeholder}
        </option>

        {options.map(renderOption)}
      </StyledSelect>
    </Select.Wrapper>
  )
}

Select.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const selectOptionShape = PropTypes.shape({
  text: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  disabled: PropTypes.bool
})

Select.propTypes = {
  /** Options to render inside select */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      selectOptionShape,
      PropTypes.shape({
        groupName: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(selectOptionShape)
      })
    ])
  ),
  /** Value selected by default */
  value: PropTypes.any,
  /** onChange transparently passed to select */
  onChange: PropTypes.func,
  /** String to show when the first empty choice is selected */
  placeholder: PropTypes.string,
  /** Determines if the select should be disabled */
  disabled: PropTypes.bool
}

Select.defaultProps = {
  options: [],
  placeholder: ''
}

export default Select
