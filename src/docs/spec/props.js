import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts, misc } from '@auth0/cosmos/tokens'
import { Code } from '@auth0/cosmos'
import parseType from './prop-type'
import addDefaultValues, { getDefaultValue } from './default-props'
import getConflictingProps from './prop-conflicts'
import PropSwitcher from './prop-switcher'

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
    color: ${colors.base.grayDark};
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
  padding: 0 ${spacing.xsmall};
  border-radius: ${misc.radius};
  position: relative;
  left: -${spacing.xsmall};
`

const Required = styled.span`
  color: ${colors.base.orange};
  &:after {
    content: '*';
    font-size: 16px;
  }
`

class Props extends React.Component {
  constructor(props) {
    super(props)
    let propData = addDefaultValues(props.propData)

    /* over ride with defaults from documentation */
    const defaultsFromDocs = props.defaultsFromDocs
    Object.keys(defaultsFromDocs).forEach(key => {
      if (propData[key]) propData[key].value = defaultsFromDocs[key]
    })

    this.state = { propData: propData }
    this.props.onPropsChange(propData)
  }

  onPropsChange(propName, value) {
    this.setState(currentState => {
      /* Handle conflicting binary props */
      const conflictingProps = getConflictingProps(currentState.propData, propName)
      conflictingProps.forEach(conflictingPropName => {
        /* disable all conflicting props */
        currentState.propData[conflictingPropName].value = 'false'
      })

      /* set value for prop */
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
            <th>Default</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <td>
                <Code>{key}</Code>
                {propData[key].required && <Required />}
              </td>
              <td>
                {propData[key].description}
                <Type>type: {parseType(propData[key].type)}</Type>
              </td>
              <td>{getDefaultValue(propData[key])}</td>
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
