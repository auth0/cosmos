import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import Icon from '../icon'
import Tag from '../tag'
import Spinner from '../spinner'
import styled from '@auth0/cosmos/styled'
import ReactSelect, { defaultTheme } from 'react-select'

import { misc, colors, spacing } from '@auth0/cosmos-tokens'
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
    menuPortal: provided => ({ ...provided, zIndex: 99 }),
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
  const transformation = option => option.value

  if (options.constructor.name === 'Array') {
    return options.map(transformation)
  }
  return transformation(options)
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
    /*
      select boxes do not support readonly like input boxes,
      but they do have disabled. we need the style of readOnly input
      and functionality of select disabled
    */

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

    const value = cosmosToReactSelect.value(props.value, options)
    const styles = cosmosToReactSelect.styles(props)

    return (
      <Select.Wrapper ref={this.element} {...Automation('select.wrapper')} style={props.style}>
        <Form.Field.ContextConsumer>
          {context => (
            <ReactSelect
              onChange={options =>
                props.onChange &&
                props.onChange({ target: { name: props.name, value: oneOrMore(options) } })
              }
              isDisabled={props.disabled}
              isMulti={props.multiple}
              isSearchable={props.searchable}
              isLoading={props.loading}
              onMenuOpen={this.updateMenuState(true)}
              onMenuClose={this.updateMenuState(false)}
              menuPortalTarget={document.body}
              menuIsOpen={props.defaultMenuOpen}
              defaultValue={props.defaultValue}
              placeholder={props.placeholder}
              options={options}
              components={componentOverrides}
              theme={selectTheme}
              value={value}
              styles={styles}
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
  customOptionRenderer: PropTypes.func
}

Select.defaultProps = {
  options: [],
  placeholder: '',
  searchable: false
}

export default Select
