import React from 'react'
import styled from 'styled-components'
import { Heading2 } from './typography'
import { Icon } from '@auth0/cosmos'

class FoldingSection extends React.Component {
  state = { expanded: false }
  toggle = () => this.setState({ expanded: !this.state.expanded })

  render() {
    return (
      <section id={this.props.name}>
        <Heading2 onClick={this.toggle}>
          <Icon name={this.state.expanded ? 'chevron-down' : 'chevron-right'} /> {this.props.name}
        </Heading2>

        {this.state.expanded ? this.props.children : null}
      </section>
    )
  }
}

export default FoldingSection
