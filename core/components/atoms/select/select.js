import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import Icon from '../icon'
import Tag from '../tag'
import Spinner from '../spinner'
import styled from '@auth0/cosmos/styled'
import ReactSelect, { defaultTheme } from 'react-select'
import AsyncSelect from 'react-select/lib/Async'
import { misc, colors, spacing } from '@auth0/cosmos-tokens'
import SimpleSelect from '../_simple-select'
import Form from '../../molecules/form'

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
    })),
  value: (valueProp, options) => {
    if (valueProp === null || typeof valueProp === 'undefined') return null

    if (valueProp.constructor.name === 'Array') {
      return valueProp.map(item => cosmosToReactSelect.value(item, options))
    }

    const matchValue = option => option.value === valueProp

    let valueFound = null

    options.forEach(option => {
      if (option.options && option.options.constructor.name === 'Array') {
        option.options.forEach(subOption => {
          if (matchValue(subOption)) {
            valueFound = subOption
          }
        })
      }
    })

    if (valueFound !== null) return valueFound

    return options.find(matchValue)
  },
  styles: props => ({
    menuPortal: provided => ({ ...provided, zIndex: 20 }),
    control: (provided, state) =>
      props.hasError
        ? {
            ...provided,
            borderColor: colors.input.borderError,
            boxShadow: `0 0 0 ${state.isFocused ? 1 : 0}px ${colors.input.borderError}`,
            '&:hover': {
              borderColor: colors.input.borderError
            },
            '&:focus': {
              borderColor: colors.input.borderError,
              boxShadow: `0 0 0 2px ${colors.input.borderError}`
            }
          }
        : provided
  })
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

const customValueRenderer = providedRenderer => optionProps => {
  const { innerProps, innerRef, data } = optionProps

  return (
    <div ref={innerRef} {...innerProps}>
      {providedRenderer(data)}
    </div>
  )
}

const cosmosMultiValueTagRenderer = optionProps => {
  const { innerProps, removeProps, innerRef, data } = optionProps
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

const oneOrMore = options => {
  if (options === null) return null

  const transformation = option => option.value

  if (options.constructor.name === 'Array') {
    return options.map(transformation)
  }
  return transformation(options)
}

const componentOverrides = {
  MultiValue: cosmosMultiValueTagRenderer,
  DropdownIndicator: cosmosDownIndicator,
  LoadingIndicator: cosmosLoadingIndicator,
  IndicatorSeparator: () => null
}

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = { menuIsOpen: props.defaultMenuOpen || false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll, true)

    if (this.props.defaultMenuOpen) {
      // If `defaultMenuOpen` is passed (only for testing)
      // force react-select to render portal for dropdown
      this.forceUpdate()
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true)
  }

  handleScroll() {
    if (this.state.menuIsOpen) {
      // Force update for react-select to
      // re-compute portal dropdown position
      this.forceUpdate()
    }
  }

  updateMenuState(newState) {
    return () => this.setState({ menuIsOpen: newState })
  }

  render() {
    const props = this.props

    if (
      !(
        props.async ||
        props.searchable ||
        props.multiple ||
        props.customOptionRenderer ||
        props.customValueRenderer
      )
    )
      return <SimpleSelect {...props} />

    /*
      select boxes do not support readonly like input boxes,
      but they do have disabled. we need the style of readOnly input
      and functionality of select disabled
    */

    let options = cosmosToReactSelect.options(props.options)
    const defaultOptions = props.defaultOptions
      ? cosmosToReactSelect.options(props.defaultOptions)
      : null

    if (props.customOptionRenderer) {
      componentOverrides.Option = customOptionRenderer(props.customOptionRenderer)
    }

    if (props.customValueRenderer) {
      componentOverrides.SingleValue = customValueRenderer(props.customValueRenderer)
    }

    /**
     * If the Select is async we need to get the complete object value from the user,
     * while if it's a sync select, we can just get the value and match it from the options.
     */
    const value = props.async ? props.value : cosmosToReactSelect.value(props.value, options)
    const styles = cosmosToReactSelect.styles(props)
    const searchable = props.async || props.searchable

    // React Select requires `noOptionsMessage` to be a function
    const noOptionsMessage = props.noOptionsMessage
      ? typeof props.noOptionsMessage === 'function'
        ? props.noOptionsMessage
        : () => props.noOptionsMessage
      : () => 'No options'

    const SelectProvider = props.async ? AsyncSelect : ReactSelect

    const onChange = options => {
      const newValue = props.async ? options : oneOrMore(options)
      if (props.onChange) props.onChange({ target: { name: props.name, value: newValue } })
    }

    return (
      <Select.Wrapper ref={this.element} {...Automation('select.wrapper')} style={props.style}>
        <Form.Field.ContextConsumer>
          {context => (
            <SelectProvider
              onChange={onChange}
              isClearable
              isDisabled={props.disabled}
              isMulti={props.multiple}
              isSearchable={searchable}
              isLoading={props.loading}
              onMenuOpen={this.updateMenuState(true)}
              onMenuClose={this.updateMenuState(false)}
              menuPortalTarget={document.body}
              menuIsOpen={props.defaultMenuOpen}
              defaultValue={props.defaultValue}
              placeholder={props.placeholder}
              options={options}
              loadOptions={props.loadOptions}
              components={componentOverrides}
              noOptionsMessage={noOptionsMessage}
              defaultOptions={defaultOptions}
              theme={selectTheme}
              value={value}
              styles={styles}
              key={value ? value.length : 0}
              id={props.id || context.formFieldId}
            />
          )}
        </Form.Field.ContextConsumer>
      </Select.Wrapper>
    )
  }
}

Select.Wrapper = styled.div``

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
  /** Pass hasError to show error state */
  hasError: PropTypes.bool,
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
  /** Lets you define a custom component to render each option */
  customOptionRenderer: PropTypes.func,
  /** Lets you define a custom component to render the selected value */
  customValueRenderer: PropTypes.func,
  /** If you want an async select, you can pass a function which can return a Promise here */
  loadOptions: PropTypes.func,
  /** Used to specify a message for when there's no options */
  noOptionsMessage: PropTypes.oneOfType([PropTypes.func || PropTypes.string]),
  /** Used to provide default options for the select (as object) or tell the select to search with '' (as boolean) */
  defaultOptions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.bool])
}

Select.defaultProps = {
  options: [],
  placeholder: '',
  searchable: false
}

export default Select
