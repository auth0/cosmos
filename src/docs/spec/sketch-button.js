import React from 'react'
import styled from 'styled-components'

import { Icon, Tooltip } from '@auth0/cosmos'
import { spacing, colors } from '@auth0/cosmos/tokens'
import uniqueId from '@auth0/cosmos/_helpers/uniqueId'

import IconSketch from '../../overview/ov-components/icon-sketch'

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${spacing.small};
  cursor: pointer;

  input {
    opacity: 0;
    cursor: default;
  }

  svg #shape {
    fill: #ffab00;
  }

  svg path {
    transition: fill 0.5s ease;
  }
`

class SketchButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uniqueId: uniqueId('code'),
      copied: false
    }
  }
  copyKey() {
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
    let key = 'Button/default'
    if (this.props.code.includes('appearance')) {
      const component = this.props.code.split('<')[1].split(' ')[0]
      const appearance = this.props.code.split('appearance="')[1].split('"')[0]
      key = component + '/' + appearance
    }
    return (
      <Wrapper onClick={this.copyKey.bind(this)}>
        <input id={this.state.uniqueId} value={key} onChange={() => {}} />
        <Tooltip content={this.state.copied ? 'Copied!' : 'Copy key'}>
          <IconSketch src="icon-sketch.svg" />
        </Tooltip>
      </Wrapper>
    )
  }
}

export default SketchButton
