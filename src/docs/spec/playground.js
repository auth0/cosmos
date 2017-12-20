import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

import * as Components from '../../components'
import { fonts, colors, spacing } from '../../tokens'
import uniqueId from '../../components/_helpers/uniqueId'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: ${spacing.small} 0 ${spacing.xlarge};
  position: relative;

  & .react-live-preview {
    border: 1px solid ${colors.grayLightest};
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
  position: absolute;
  color: ${colors.grayDark};
  right: 0;
  font-size: 12px;

  cursor: pointer;
  padding: ${spacing.small};
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
    this.state = { codeVisible: props.className.includes('props'), uniqueId: uniqueId('code') }
  }
  toggleCode() {
    this.setState({ codeVisible: !this.state.codeVisible })
  }
  copyCode() {
    const copyText = document.querySelector('#' + this.state.uniqueId)
    console.log(copyText)
    copyText.select()
    document.execCommand('copy')
  }
  render() {
    const code = this.props.children

    return (
      <Container codeVisible={this.state.codeVisible}>
        <input id={this.state.uniqueId} defaultValue={code} style={{ opacity: 0 }} />
        <LiveProvider
          code={code}
          scope={Components}
          noInline={this.props.className.includes('multiple')}
        >
          <CodeToggle codeVisible={this.state.codeVisible} onClick={this.toggleCode.bind(this)}>
            {this.state.codeVisible ? 'Hide Code' : 'Show Code'}
          </CodeToggle>
          <LivePreview />
          <LiveError />
          {/* {this.state.codeVisible ? <LiveEditor /> : null} */}
          <CodeWrapper className={!this.state.codeVisible && 'hide'} code={this.props.children}>
            <LiveEditor />
          </CodeWrapper>
          {this.state.codeVisible ? (
            <Copy onClick={this.copyCode.bind(this)}>
              <Components.Icon type="copy" />
            </Copy>
          ) : null}
        </LiveProvider>
      </Container>
    )
  }
}

export default Playground
