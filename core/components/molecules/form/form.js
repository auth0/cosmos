import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import TextInput from '../../atoms/text-input'
import TextArea from '../../atoms/textarea'
import Select from '../../atoms/select'
import Switch from '../../atoms/switch'
import Radio from '../../atoms/radio'

import Field from './field'
import Actions from './actions'
import FieldSet from './fieldset'

import FormContext from './form-context'

const Form = props => (
  <FormContext.Provider value={{ layout: props.layout }}>
    <Form.Element {...props} {...Automation('form')} />
  </FormContext.Provider>
)

Form.Element = styled.form`
  ${Field.Element} {
    max-width: ${props => (props.layout === 'label-on-top' || props.fullWidth ? 'auto' : '625px')};
  }
`

Form.Field = props => <Field {...props} />
Form.Field.ContextConsumer = Field.ContextConsumer
Form.TextInput = props => <Field {...props} fieldComponent={TextInput} />
Form.TextArea = props => <Field {...props} fieldComponent={TextArea} />
Form.Select = props => <Field {...props} fieldComponent={Select} />
Form.Switch = props => <Field {...props} fieldComponent={Switch} />
Form.Radio = props => <Field {...props} fieldComponent={Radio} />
Form.Radio.Option = Radio.Option
Form.Actions = Actions
Form.FieldSet = FieldSet

Form.propTypes = {
  /** Two options for controlling form layout */
  layout: PropTypes.oneOf(['label-on-left', 'label-on-top']),
  /** Remove the 625px constraint from the form fields width */
  fullWidth: PropTypes.bool
}

Form.defaultProps = {
  layout: 'label-on-left'
}

export default Form
