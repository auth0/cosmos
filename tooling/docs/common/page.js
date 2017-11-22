import React from 'react'
import Playground from '../common/playground'
import Title from '../common/title'
import Description from '../common/description'
import PropTable from '../common/prop-table'
import Examples from '../common/examples'
import getDefaultProps from '../common/default-props'

/*
  prettify that code!
*/
const format = (code, propList) => {
  const propString = getPropString(propList)
  code = code.replace('{props}', propString)

  let printWidth = 50 // default
  const editor = document.getElementById('editor')
  // printWidth is width of the editor / width of each charachter
  if (editor) printWidth = editor.offsetWidth / 10

  code = window.prettyFormat(code, { printWidth })
  code += '\n'
  return code
}

const getPropString = propList => {
  return (
    propList
      // remove props with null values
      .filter(prop => prop.value)
      // get values
      .map(prop => prop.value)
      // make one string that can be passed to the component
      .join(' ')
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props)

    // clone the propList to a new variable
    const propList = props.docs.propList.slice(0)

    // get props with default:true
    const defaultProps = getDefaultProps(propList)

    this.state = {
      code: format(this.props.docs.template, defaultProps)
    }
  }

  onPropsChanged(props) {
    // convert object to array
    const propList = Object.entries(props).map(([key, value]) => ({
      name: key,
      value
    }))

    // prettify code
    let code = format(this.props.docs.template, propList)
    this.setState({ code })
  }
  render() {
    return (
      <div>
        <Title>
          {this.props.docs.name}
        </Title>
        <Description>
          {this.props.docs.description}
        </Description>
        <Playground
          main
          code={this.state.code}
          components={this.props.components}
        />
        <PropTable
          list={this.props.docs.propList}
          onPropsChanged={this.onPropsChanged.bind(this)}
        />
        <Examples
          examples={this.props.docs.examples}
          components={this.props.components}
        />
      </div>
    )
  }
}

export default Page
