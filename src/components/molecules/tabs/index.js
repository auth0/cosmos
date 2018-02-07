import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../tokens'

import TabLink from './link'
import TabContent from './content'

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

    const Tabs = styled.div``

    const TabsNavigation = styled.div`
      border-bottom: 1px solid ${colors.base.grayLight};
      ${TabLink}:last-child {
        margin-right: 0;
      }
    `

    return (
      <Tabs>
        <TabsNavigation>
          {this.state.labels.map(label => (
            <TabLink
              onClick={() => this.changeTab(label)}
              key={label}
              selected={label === selectedTabLabel}
            >
              {label}
            </TabLink>
          ))}
        </TabsNavigation>
        {this.state.selectedTab}
      </Tabs>
    )
  }
}

Tabs.Tab = props => <TabContent>{props.children}</TabContent>

Tabs.propTypes = {
  /** Children should be an array of React elements */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  selected: PropTypes.bool
}

Tabs.defaultProps = {
  children: []
}

export default Tabs
