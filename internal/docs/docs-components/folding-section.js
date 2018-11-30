import React from 'react'
import styled from 'styled-components'
import kebabCase from 'lodash.kebabcase'

import { Heading2 } from './typography'
import { Icon } from '@auth0/cosmos'

class FoldingSection extends React.Component {
  constructor(props) {
    super(props)

    const id = kebabCase(this.props.name)
    let expanded = false

    const hashParts = window.location.hash.split('#')
    if (hashParts[2] === id) expanded = true

    this.state = { id, expanded }
  }
  toggle = () => {
    location.href = `/#/contribution-guide#${this.state.id}`
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    return (
      <section id={this.state.id}>
        <Heading2 onClick={this.toggle}>
          <Icon name={this.state.expanded ? 'chevron-down' : 'chevron-right'} />
          {this.props.name}
        </Heading2>

        {this.state.expanded ? this.props.children : null}
      </section>
    )
  }
}

export default FoldingSection
