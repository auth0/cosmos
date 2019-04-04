import React from 'react'
import styled from 'styled-components'

import { spacing, colors, fonts, misc } from '@auth0/cosmos/tokens'
import parseType from './prop-type'
import addDefaultValues, { getDefaultValue } from './default-props'
import getConflictingProps from './prop-conflicts'
import PropSwitcher from './prop-switcher'
import { Table, Code } from '../docs-components'

const Type = styled.div`
  font-size: 13px;
  font-family: ${fonts.family.code};
  padding: 0 ${spacing.xsmall};
  border-radius: ${misc.radius};
  position: relative;
  left: -${spacing.xsmall};
`

const Deprecated = Type.withComponent('span').extend`
  color: ${colors.text.error};
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
    let deprecationMatch = /@deprecated :(\w+)/gi

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th width="40%">Description</th>
            <th>Default</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {keys.map(key => {
            let description = propData[key].description;
            const isInternal = description.includes('@internal')
            const isDeprecated = description.includes('@deprecated')
            let deprecationReplacement;

            if (isInternal) {
              // Avoid showing internal props in the documentation site.
              return null;
            }

            if (isDeprecated) {
              const deprecationReplMatch = deprecationMatch.exec(description)
              if (deprecationReplMatch) {
                deprecationReplacement = deprecationReplMatch[1]
                description = description.replace(deprecationMatch, '')
              } else {
                description = description.replace('@deprecated', '')
              }
            }

            return (
              <tr key={key}>
                <td>
                  <Code style={{ color: propData[key].deprecated ? colors.text.error : 'inherit' }}>
                    {key}
                  </Code>
                  {isDeprecated && <Deprecated>(deprecated)</Deprecated>}
                  {propData[key].required && <Required />}
                </td>
                <td>
                  {description}
                  <Type>type: {parseType(propData[key].type)}</Type>
                </td>
                <td>{getDefaultValue(propData[key])}</td>
                <td>
                  {deprecationReplacement ? (
                    <Deprecated>
                      use <Code>{deprecationReplacement}</Code>
                    </Deprecated>
                  ) : (
                      <PropSwitcher
                        propName={key}
                        data={propData[key]}
                        onPropsChange={this.onPropsChange.bind(this)}
                      />
                    )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
export default Props
