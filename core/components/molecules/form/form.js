import React from 'react'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { deprecateComponent } from '../../_helpers/custom-validations'

import ActionInput from '../../molecules/_action-input'
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
    <form {...props} {...Automation('form')} />
  </FormContext.Provider>
)

Form.Field = props => <Field {...props} />
Form.Actions = Actions
Form.FieldSet = FieldSet

Form.TextInput = props => <Field {...props} fieldComponent={ActionInput} />
Form.TextArea = props => <Field {...props} fieldComponent={TextArea} />
Form.Select = props => <Field {...props} fieldComponent={Select} />
Form.Switch = props => <Field {...props} fieldComponent={Switch} />
Form.Radio = props => <Field {...props} fieldComponent={Radio} />
Form.Radio.Option = Radio.Option

Form.propTypes = {
  /** Two options for controlling form layout */
  layout: PropTypes.oneOf(['label-on-left', 'label-on-top'])
}

Form.defaultProps = {
  layout: 'label-on-left'
}

/* deprecate Form.Input element syntax */
const inputs = ['TextInput', 'TextArea', 'Select', 'Switch', 'Radio']

inputs.forEach(input => {
  Form[input].propTypes = {
    _deprecate: deprecateComponent({
      old: `<Form.${input}/>`,
      replacement: `<Form.Field><${input}/></Form.Field>`
    })
  }
})

export default Form
