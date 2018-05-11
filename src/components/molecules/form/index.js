import React from 'react'
import PropTypes from 'prop-types'

import ActionInput from '../../molecules/_action-input'
import TextArea from '../../atoms/textarea'
import Select from '../../atoms/select'
import Switch from '../../atoms/switch'
import Radio from '../../atoms/radio'

import Field from './field'
import Actions from './actions'
import FieldSet from './fieldset'

const Form = props => (
  <form>
    {React.Children.map(props.children, child =>
      React.cloneElement(child, { layout: props.layout })
    )}
  </form>
)

Form.TextInput = props => <Field {...props} fieldComponent={ActionInput} />
Form.TextArea = props => <Field {...props} fieldComponent={TextArea} />
Form.Select = props => <Field {...props} fieldComponent={Select} />
Form.Switch = props => <Field {...props} fieldComponent={Switch} />
Form.Radio = props => <Field {...props} fieldComponent={Radio} />
Form.Radio.Option = Radio.Option
Form.Actions = Actions
Form.FieldSet = FieldSet

Form.propTypes = {
  /** Two options for controlling form layout */
  layout: PropTypes.oneOf(['label-on-left', 'label-on-top'])
}

Form.defaultProps = {
  layout: 'label-on-left'
}

export default Form
