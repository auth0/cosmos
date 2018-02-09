import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts, misc } from '../../tokens'
import { TextInput, Switch, Code, Select } from '../../components'
import parseType from './prop-type'

const Table = styled.table`
  width: 100%;
  margin-bottom: 80px;
  white-space: normal;
  th,
  td {
    text-align: left;
    padding: ${spacing.small} ${spacing.small};
    vertical-align: middle;
    position: relative;
  }
  th {
    border-bottom: 2px solid #ddd;
  }
  td {
    border-bottom: 1px solid #ddd;
  }
  th {
    text-transform: uppercase;
    font-weight: ${fonts.weight.medium};
    letter-spacing: 1px;
    font-size: 12px;
  }
`

const Type = styled.div`
  font-size: 13px;
  font-family: ${fonts.family.code};
  color: ${colors.base.grayDark};
  padding: 0 ${spacing.xsmall};
  border-radius: ${misc.radius};
  position: relative;
  left: -${spacing.xsmall};
`

const Description = styled.span`
  color: ${colors.base.grayDark};
`

const PropSwitcher = ({ propName, data, onPropsChange }) => {
  let method = value => onPropsChange(propName, value.toString())

  if (data.type.name === 'bool') {
    return <Switch accessibleLabels={[]} on={data.value === 'true'} onToggle={method} />
  } else if (['string', 'number', 'any'].includes(data.type.name)) {
    return <TextInput defaultValue={data.value} onChange={e => method(e.target.value)} />
  } else if (data.type.name === 'enum') {
    const options = data.type.value.map(({ value }) => ({ text: value, value }))
    return <Select onChange={e => method(e.target.value)} options={options} />
  }
  return <div />
}

class Props extends React.Component {
  constructor(props) {
    super(props)
    const propData = this.getDefaultValues(props.propData)
    this.state = { propData: propData }
    this.props.onPropsChange(propData)
  }

  getDefaultValues(propData) {
    const propNames = Object.keys(propData).filter(key => key[0] !== '_')
    propNames.forEach(name => {
      const { defaultValue } = propData[name]
      propData[name].value = defaultValue ? defaultValue.value : 'null'
    })
    return propData
  }

  onPropsChange(propName, value) {
    this.setState(currentState => {
      currentState.propData[propName].value = value
      this.props.onPropsChange(currentState.propData)
      return currentState
    })
  }

  render() {
    let { propData } = this.state

    const keys = Object.keys(propData).filter(key => key[0] !== '_')

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <td>
                <Code>{key}</Code>
              </td>
              <td>
                <Description>{propData[key].description}</Description>
              </td>
              <td>
                <Type>{parseType(propData[key].type)}</Type>
              </td>

              <td>
                <PropSwitcher
                  propName={key}
                  data={propData[key]}
                  onPropsChange={this.onPropsChange.bind(this)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )
  }
}
export default Props
