import React from 'react'
import { TextInput, Switch, Select } from '@auth0/cosmos'

const PropSwitcher = ({ propName, data, onPropsChange }) => {
  let method = value => onPropsChange(propName, value.toString())

  if (data.type.name === 'bool') {
    return <Switch accessibleLabels={[]} on={data.value === 'true'} onToggle={method} />
  } else if (['string', 'number'].includes(data.type.name)) {
    return <TextInput defaultValue={data.value} onChange={e => method(e.target.value)} />
  } else if (data.type.name === 'enum' && Array.isArray(data.type.value)) {
    const options = data.type.value.map(({ value }) => ({ text: value, value }))
    return (
      <Select defaultValue={data.value} onChange={e => method(e.target.value)} options={options} />
    )
  }
  return <div />
}

export default PropSwitcher
