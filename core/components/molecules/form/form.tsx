import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import ExtTextInput from '../../atoms/text-input'
import ExtTextArea from '../../atoms/textarea'
import ExtSelect from '../../atoms/select'
import ExtSwitch from '../../atoms/switch'
import ExtRadio from '../../atoms/radio'

import ExtField from './field'
import ExtActions from './actions'
import ExtFieldSet from './fieldset'

import FormContext from './form-context'

export interface IFormProps {
  /** Two options for controlling form layout */
  layout?: 'label-on-left' | 'label-on-top'
  /** Remove the 625px constraint from the form fields width */
  fullWidth?: boolean,
  children?: JSX.Element | JSX.Element[]
}

const Form = (props: IFormProps) => (
  <FormContext.Provider value={{ layout: props.layout, fullWidth: props.fullWidth }}>
    <Form.Element {...props} {...Automation('form')} />
  </FormContext.Provider>
)

Form.Field = ExtField
Form.TextInput = props => <ExtField {...props} fieldComponent={ExtTextInput} />
Form.TextArea = props => <ExtField {...props} fieldComponent={ExtTextArea} />
Form.Select = props => <ExtField {...props} fieldComponent={ExtSelect} />
Form.Switch = props => <ExtField {...props} fieldComponent={ExtSwitch} />

const FormRadio: { (props): JSX.Element; Option: any } = (() => {
  const Radio = (props) => <ExtField {...props} fieldComponent={ExtRadio} />;
  Radio.Option = ExtRadio.Option
  return Radio
})()

Form.Radio = FormRadio

Form.Actions = ExtActions
Form.FieldSet = ExtFieldSet

Form.Element = styled.form`
  ${ExtField.Element}, ${ExtActions.Element} {
    max-width: ${props => (props.layout === 'label-on-top' || props.fullWidth ? 'auto' : '624px')};
  }
`

Form.defaultProps = {
  layout: 'label-on-left'
}


export default Form
