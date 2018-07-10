import React from 'react'
import styled from 'styled-components'

import { Icon, Tooltip } from '@auth0/cosmos'
import { spacing, colors } from '@auth0/cosmos/tokens'
import uniqueId from '@auth0/cosmos/_helpers/uniqueId'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  padding: ${spacing.small};
  cursor: pointer;

  input {
    opacity: 0;
    cursor: default;
  }

  svg path {
    transition: fill 0.5s ease;
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
    document.execCommand('copy')
    this.setState({ copied: true })
    /* Go back to original state after 2s */
    setTimeout(_ => this.setState({ copied: false }), 2000)
  }
  componentWillReceiveProps() {
    this.setState({ copied: false })
  }
  render() {
    return (
      <Wrapper onClick={this.copyCode.bind(this)}>
        <input id={this.state.uniqueId} value={this.props.code} onChange={() => {}} />
        <Tooltip content={this.state.copied ? 'Copied!' : 'Copy code'}>
          <Icon name="copy" label="Copy code" color={this.state.copied ? 'green' : 'grayLight'} />
        </Tooltip>
      </Wrapper>
    )
  }
}

export default CopyButton
