import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import * as Components from '../../components'
import { fonts, colors, spacing } from '../../tokens'
import uniqueId from '../../components/_helpers/uniqueId'
import Props from './props'

const Container = styled.div`
  margin-bottom: ${spacing.xlarge};

  & .react-live {
    position: relative;
  }
  & .react-live-preview {
    border: 1px solid ${colors.grayLight};
    border-bottom-width: ${props => (props.codeVisible ? 0 : '1px')};
    border-radius: 4px 4px ${props => (props.codeVisible ? '0 0' : '4px 4px')};
    padding: 20px;
  }

  & .prism-code {
    padding: ${spacing.small} ${spacing.medium};
    background: #20222b;
    overflow-x: auto;
    font-family: ${fonts.family.code};
    border: 1px solid ${colors.grayLightest};
    border-top-width: 0;
    border-radius: 0 0 4px 4px;
  }

  & .react-live-error {
    color: ${colors.orange};
    padding: 5px;
  }
`

const CodeWrapper = styled.div`
  overflow: hidden;
  max-height: ${props => 25 * (props.code.split('\n').length + 1)}px;
  transition: max-height 0.5s ease;

  &.hide {
    max-height: 0;
  }
`

const CodeToggle = styled.div`
  color: ${colors.grayDark};
  text-align: right;
  font-size: 12px;

  cursor: pointer;
  padding: ${spacing.xsmall} 0;
`

const Copy = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${colors.white};
  padding: ${spacing.small};
  cursor: pointer;
  &:hover {
    color: ${colors.blue};
  }
`

class Playground extends React.Component {
  constructor(props) {
    super(props)
    let showProps = props.tags.includes('props')

    this.state = {
      showProps,
      codeVisible: showProps,
      uniqueId: uniqueId('code'),
      code: this.props.code
    }
  }
  toggleCode() {
    this.setState({ codeVisible: !this.state.codeVisible })
  }
  copyCode() {
    const copyText = document.querySelector('#' + this.state.uniqueId)
    copyText.select()
    document.execCommand('copy')
  }
  onPropsChange(propData) {
    // TODO: Refactor this block when less sleepy

    let propString = ''

    const propNames = Object.keys(propData).filter(key => key[0] !== '_')

    propNames.map(name => {
      if (propData[name].type.name === 'bool' && propData[name].value === 'true') {
        propString += ` ${name}`
      } else if (propData[name].type.name === 'string' && propData[name].value !== 'null') {
        propString += ` ${name}="${propData[name].value}"`
      }
    })

    this.setState({ code: this.props.code.replace(' {props}', propString) })
  }
  render() {
    const code = this.state.code

    return (
      <Container codeVisible={this.state.codeVisible}>
        <input
          id={this.state.uniqueId}
          value={code}
          style={{ opacity: 0, height: 0 }}
          onChange={() => {}}
        />
        <LiveProvider
          code={code}
          scope={Components}
          noInline={this.props.tags.includes('multiple')}
        >
          <LivePreview />
          <LiveError />
          {/* {this.state.codeVisible ? <LiveEditor /> : null} */}
          <CodeWrapper className={!this.state.codeVisible && 'hide'} code={code}>
            <LiveEditor />
          </CodeWrapper>
          {this.state.codeVisible ? (
            <Copy onClick={this.copyCode.bind(this)}>
              <Components.Icon type="copy" />
            </Copy>
          ) : null}
        </LiveProvider>
        <CodeToggle codeVisible={this.state.codeVisible} onClick={this.toggleCode.bind(this)}>
          {this.state.codeVisible ? 'Hide Code' : 'Show Code'}
        </CodeToggle>
        {this.state.showProps && (
          <Props
            propData={this.props.component.props}
            onPropsChange={this.onPropsChange.bind(this)}
          />
        )}
      </Container>
    )
  }
}

export default Playground
