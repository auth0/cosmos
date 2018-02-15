import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts, misc } from '../../tokens'
import { Code } from '../../components'
import parseType from './prop-type'
import addDefaultValues from './default-props'
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

class Props extends React.Component {
  constructor(props) {
    super(props)
    const propData = addDefaultValues(props.propData)
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
