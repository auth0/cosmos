import React from 'react'
import { TextInput, Switch, Select } from '@auth0/cosmos'

/* Test if string matches a string literal union type ( 'string1' | 'string2' | 'string3') */
const REGEX_LITERAL_UNION = /\| ['"]/

const PropSwitcher = ({ propName, data, onPropsChange }) => {
  let handler = value => onPropsChange(propName, value.toString())

  if (data.type.name === 'bool') {
    return <Switch accessibleLabels={[]} on={data.value === 'true'} onChange={handler} />
  } else if (['string', 'number'].includes(data.type.name)) {
    if (data.value === 'null') data.value = ''
    return <TextInput defaultValue={data.value} onChange={e => handler(e.target.value)} />
  } else if (REGEX_LITERAL_UNION.test(data.type.name)) {
    /* Split string literal union into options */
    const options = data.type.name
      .replace(/['"]/g, '')
      .split(' | ')
      .map(value => ({ text: value, value }))
    return (
      <Select defaultValue={data.value} onChange={e => handler(e.target.value)} options={options} />
    )
  }
  return <div />
}

export default PropSwitcher
