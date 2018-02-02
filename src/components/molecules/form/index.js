import React from 'react'

import ActionInput from '../../molecules/_action-input'
import TextArea from '../../atoms/textarea'
import Select from '../../atoms/select'
import Switch from '../../atoms/switch'

import Field from './field'
import Actions from './actions'
import FieldSet from './fieldset'

const Form = props => <form>{props.children}</form>
// TODO: Form will get an layout prop for orientation of labels

Form.TextInput = props => <Field {...props} fieldComponent={ActionInput} />
Form.TextArea = props => <Field {...props} fieldComponent={TextArea} />
Form.Select = props => <Field {...props} fieldComponent={Select} />
Form.Switch = props => <Field {...props} fieldComponent={Switch} />
Form.Actions = Actions
Form.FieldSet = FieldSet

export default Form
