import React from 'react'
import styled from 'styled-components'

import { spacing } from '../../../tokens'

const TabLink = styled.a`
  padding: ${spacing.large};
`

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    /* get names of tab labels */
    const labels = React.Children.map(props.children, child => child.props.label)

    /* get selected tab component */
    let selectedTab = props.children[0] // assume it's the first component
    React.Children.map(props.children, child => {
      if (child.props.selected) selectedTab = child // override if selected prop is true
    })

    this.state = { labels, selectedTab }
  }
  changeTab(label) {
    React.Children.map(this.props.children, child => {
      if (child.props.label === label) this.setState({ selectedTab: child })
    })
  }
  render() {
    return (
      <div>
        {this.state.labels.map(label => (
          <TabLink onClick={() => this.changeTab(label)} key={label}>
            {label}
          </TabLink>
        ))}
        {this.state.selectedTab}
      </div>
    )
  }
}

Tabs.Tab = props => <div>{props.children}</div>

export default Tabs
