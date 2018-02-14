import React from 'react'
import styled from 'styled-components'

import { Icon, Tooltip } from '../../components'
import { spacing, colors } from '../../tokens'
import uniqueId from '../../components/_helpers/uniqueId'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: ${spacing.small};
  cursor: pointer;

  input {
    opacity: 0;
    height: 0;
    width: 0;
    display: 'none';
  }
`

class CopyButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uniqueId: uniqueId('code'),
      copied: false
    }
  }
  copyCode() {
    const copyText = document.querySelector('#' + this.state.uniqueId)
    copyText.select()
    this.setState({ copied: true })
  }
  componentWillReceiveProps() {
    this.setState({ copied: false })
  }
  render() {
    return (
      <Wrapper onClick={this.copyCode.bind(this)}>
        <input id={this.state.uniqueId} value={this.props.code} onChange={() => {}} />
        <Tooltip content={this.state.copied ? 'Copied!' : 'Copy code'}>
          <Icon
            name="copy"
            label="Copy code"
            color={this.state.copied ? colors.base.green : colors.base.grayLight}
          />
        </Tooltip>
      </Wrapper>
    )
  }
}

export default CopyButton
