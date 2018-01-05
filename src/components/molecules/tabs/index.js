import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, spacing } from '../../../tokens'

const TabLink = styled.a`
  padding: ${spacing.large};
  color: ${props => (props.selected ? colors.base : colors.blue)};
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
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
    const selectedTabLabel = this.state.selectedTab.props.label

    React.Children.map(this.props.children, child => {
      /* dont change tab if already selected */
      if (child.props.label === label && selectedTabLabel !== label) {
        this.setState({ selectedTab: child })
      }
    })
  }
  render() {
    const selectedTabLabel = this.state.selectedTab.props.label

    return (
      <div>
        {this.state.labels.map(label => (
          <TabLink
            onClick={() => this.changeTab(label)}
            key={label}
            selected={label === selectedTabLabel}
          >
            {label}
          </TabLink>
        ))}
        {this.state.selectedTab}
      </div>
    )
  }
}

Tabs.Tab = props => <div>{props.children}</div>

Tabs.propTypes = {
  /** Children should be an array of React elements */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

Tabs.defaultProps = {
  children: []
}

export default Tabs
