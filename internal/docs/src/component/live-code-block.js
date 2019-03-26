import React from "react"
import styled from "styled-components"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import * as Components from "@auth0/cosmos"

import { fonts, colors, spacing } from "@auth0/cosmos/tokens"
import Props from "./props"
import getPropString from "./prop-string"
import CopyButton from "./copy-button"
import {
  getDefaultsFromCode,
  stripDefaultsFromDocs,
} from "./get-defaults-from-code"

const Container = styled.div`
  margin: ${spacing.medium} 0;

  & .react-live {
    position: relative;
  }
  & .react-live-preview {
    white-space: normal;
    border: 1px solid ${colors.base.grayLight};
    border-bottom-width: ${props => (props.codeVisible ? 0 : "1px")};
    border-radius: 3px 3px ${props => (props.codeVisible ? "0 0" : "3px 3px")};
    padding: 40px;
  }

  & .prism-code {
    padding: ${spacing.small} ${spacing.medium};
    background: #20222b;
    overflow-x: auto;
    font-family: ${fonts.family.code};
    border: 1px solid ${colors.base.grayLightest};
    border-top-width: 0;
    border-radius: 0 0 3px 3px;
  }

  & .react-live-error {
    color: ${colors.base.orange};
    padding: 5px;
  }
`

const CodeWrapper = styled.div`
  overflow: hidden;
  max-height: ${props => 25 * (props.code.split("\n").length + 1)}px;
  transition: max-height 0.5s ease;

  &.hide {
    max-height: 0;
  }
`

const CodeToggle = styled.div`
  color: ${colors.base.grayDark};
  text-align: right;
  font-size: 12px;

  cursor: pointer;
  padding: ${spacing.xsmall} 0;
`

class LiveCodeBlock extends React.Component {
  constructor(props) {
    super(props)
    const showProps = props.language === "jsx"

    const defaultsFromDocs = getDefaultsFromCode(props.code)
    const code = stripDefaultsFromDocs(props.code)

    this.state = {
      showProps,
      codeVisible: showProps,
      code,
      defaultsFromDocs,
    }
  }
  toggleCode() {
    this.setState({ codeVisible: !this.state.codeVisible })
  }
  onPropsChange(propData) {
    const propString = getPropString(propData)
    const code = stripDefaultsFromDocs(this.props.code)
    this.setState({ code: code.replace(" {props}", propString) })
  }
  render() {
    return (
      <Container codeVisible={this.state.codeVisible}>
        <LiveProvider code={this.state.code} scope={Components}>
          <LivePreview />
          <LiveError />
          <CodeWrapper
            className={!this.state.codeVisible && "hide"}
            code={this.state.code}
          >
            <LiveEditor />
          </CodeWrapper>
          {this.state.codeVisible ? (
            <CopyButton code={this.state.code} />
          ) : null}
        </LiveProvider>
        <CodeToggle
          codeVisible={this.state.codeVisible}
          onClick={this.toggleCode.bind(this)}
        >
          {this.state.codeVisible ? "Hide Code" : "Show Code"}
        </CodeToggle>
        {this.state.showProps && (
          <Props
            propData={this.props.component.props}
            code={this.state.code}
            defaultsFromDocs={this.state.defaultsFromDocs}
            onPropsChange={this.onPropsChange.bind(this)}
          />
        )}
      </Container>
    )
  }
}

export default LiveCodeBlock

export { Container }
