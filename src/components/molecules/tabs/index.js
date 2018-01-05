import React from 'react'
import PropTypes from 'prop-types'

import TabLink from './link'

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    /* get names of tab labels */
    const labels = React.Children.map(props.children, child => child.props.label)

    /* get selected tab component */

    let selectedTab = props.children[0] // start by assuming it's the first component
    React.Children.map(props.children, child => {
      /* override if selected prop is true */
      if (child.props.selected) selectedTab = child
    })

    this.state = { labels, selectedTab }
  }
  changeTab(changeToLabel) {
    const selectedTabLabel = this.state.selectedTab.props.label

    /* only change tab if it's not already selected */
    if (selectedTabLabel !== changeToLabel) {
      React.Children.map(this.props.children, child => {
        if (child.props.label === changeToLabel) this.setState({ selectedTab: child })
      })
    }
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
