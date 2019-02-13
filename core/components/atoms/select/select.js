import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import Icon from '../icon'
import Tag from '../tag'
import Spinner from '../spinner'
import styled from '@auth0/cosmos/styled'
import ReactSelect, { defaultTheme } from 'react-select'

import { misc, colors, spacing } from '@auth0/cosmos-tokens'

const selectOpacity = {
  default: 1,
  disabled: 0.5
}

const selectTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    danger: colors.input.borderError,
    primary: colors.input.borderFocus
  },
  borderRadius: misc.radius,
  spacing: {
    menuGutter: 4,
    baseUnit: spacing.unit,
    controlHeight: misc.input.default.height
  }
}

const cosmosToReactSelect = {
  options: cosmosOptions =>
    cosmosOptions.map(({ items, groupName, disabled, label, text, ...otherProperties }) => ({
      isDisabled: disabled,
      label: groupName || label || text,
      options: items ? cosmosToReactSelect.options(items) : undefined,
      ...otherProperties
    }))
}

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

const customOptionRenderer = providedRenderer => optionProps => {
  const { innerProps, innerRef, data } = optionProps
  const ifDisabled = (disabledValue, enabledValue) =>
    data.isDisabled ? disabledValue : enabledValue

  const state = { isHovered: optionProps.isFocused }
  const opacity = selectOpacity[ifDisabled('disabled', 'default')]
  const cursor = ifDisabled('no-drop', 'pointer')

  const style = { width: '100%', opacity, cursor }

  return (
    <div ref={innerRef} {...innerProps} style={style}>
      {providedRenderer(data, state)}
    </div>
  )
}

const cosmosMultiValueTagRenderer = optionProps => {
  const { innerProps, removeProps, innerRef, data } = optionProps
  console.log('tag', { optionProps })
  return (
    <Select.Tag {...innerProps} ref={innerRef} onRemove={removeProps.onClick}>
      {data.label}
    </Select.Tag>
  )
}

const cosmosDownIndicator = ({ innerProps }) => (
  <Select.ArrowIcon {...innerProps} name="dropdown-fill" size="14" color="default" />
)

const cosmosLoadingIndicator = () => <Select.Spinner />

const Select = props => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */

  console.table(props.options)
  console.debug(props.value)

  const componentOverrides = {
    MultiValue: cosmosMultiValueTagRenderer,
    DropdownIndicator: cosmosDownIndicator,
    LoadingIndicator: cosmosLoadingIndicator,
    IndicatorSeparator: () => null
  }

  let options = cosmosToReactSelect.options(props.options)

  if (props.customOptionRenderer) {
    componentOverrides.Option = customOptionRenderer(props.customOptionRenderer)
  }

  const value = options.find(option => option.value === props.value)

  return (
    <ReactSelect
      onChange={option => props.onChange({ target: { value: option.value } })}
      isDisabled={props.disabled}
      isMulti={props.multiple}
      isSearchable={props.searchable}
      isLoading={props.loading}
      menuIsOpen={props.defaultMenuOpen}
      options={options}
      placeholder={props.placeholder}
      components={componentOverrides}
      theme={selectTheme}
      {...Automation('select')}
      value={value}
      defaultValue={props.defaultValue}
    />
  )
}

Select.ArrowIcon = styled(Icon)`
  pointer-events: none;
  margin-right: ${spacing.unit * 3}px;
  svg {
    display: block;
  }
`

Select.Spinner = styled(Spinner)`
  margin-right: ${spacing.xsmall};
`

Select.Tag = styled(Tag)`
  margin-top: calc(${spacing.xxsmall} / 2);
  margin-bottom: calc(${spacing.xxsmall} / 2);
  margin-right: ${spacing.xxsmall};
`

Select.propTypes = {
  /** Options to render inside select */
  options: PropTypes.arrayOf(PropTypes.object),
  /** Value selected by default */
  value: PropTypes.any,
  /** onChange transparently passed to select */
  onChange: PropTypes.func,
  /** String to show when the first empty choice is selected */
  placeholder: PropTypes.string,
  /** Determines if the select should be disabled */
  disabled: PropTypes.bool,
  /** Determines if the user can type to search for items */
  searchable: PropTypes.bool,
  /** Determines if the user can select more than one item */
  multiple: PropTypes.bool,
  /** Shows a spinner inside the select control */
  loading: PropTypes.bool,
  /** Shows a cross icon that clears the select */
  clearable: PropTypes.bool
}

Select.defaultProps = {
  options: [],
  placeholder: '',
  searchable: false
}

export default Select
