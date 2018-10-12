import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'

import Automation from '../../_helpers/automation-attribute'

const TabNav = styled.nav`
  `

export const TabList = styled.ul`
  border-bottom: 1px solid ${colors.base.grayLight};
  display: flex;
  ${TabLink}:last-child {
    margin-right: 0;
  }
`

export const TabListItem = styled.li`
`
export const TabLink = styled.a`
  display: block;
  padding: ${spacing.small} 0;
  margin-right: ${spacing.large};
  color: ${colors.link.default};
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-bottom: -1px;
  &:hover {
    color: ${props => (!props.selected ? colors.link.defaultHover : colors.text.default)};
  }
`



const TabContent = styled.div`
  padding-top: ${spacing.large};
`

/* Used to keep selected tab on uncontrolled Tabs instances */
const tabStore = {}

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabs = React.Children.toArray(props.children)
    this.state = {
      selectedIndex: this.getSelectedTabFromChildProps(this.tabs)
    }
  }

  componentDidUpdate() {
    const { cosmosKey } = this.props
    if (!cosmosKey) return

    const storedIndex = tabStore[cosmosKey]
    if (storedIndex && storedIndex !== this.state.selectedIndex) {
      this.setState({ selectedIndex: tabStore[cosmosKey] })
    }
  }

  componentWillReceiveProps(newProps) {
    this.tabs = React.Children.toArray(newProps.children)
    this.setState({
      selectedIndex: this.getSelectedTabFromChildProps(this.tabs)
    })
  }

  getSelectedTabFromChildProps(tabs) {
    const { selected } = this.props
    if (selected) return selected

    for (let index = 0; index < tabs.length; index++) {
      if (tabs[index].props.selected) return index
    }
    // If none of the tabs were marked as selected, choose the first.
    return 0
  }

  changeTab(nextIndex) {
    const currentIndex = this.props.selected

    if (currentIndex !== nextIndex) {
      this.props.onSelect(nextIndex)
    }
  }

  handleKeyPress(e, index) {
    if (e.key === 'Enter') {
      this.changeTab(index)
    }
  }

  render() {
    const { selected: selectedIndex } = this.props

    return (
      <TabNav {...Automation('tabs')}>
        <TabList>
          {this.tabs.map((tab, index) => (
            <TabListItem>
              <TabLink
                {...Automation('tabs.item')}
                onClick={() => this.changeTab(index)}
                key={index}
                selected={selectedIndex === index}
              >
                {tab.props.label}
              </TabLink>
            </TabListItem>
          ))}
        </TabList>
        {this.tabs[selectedIndex]}
      </TabNav>
    )
  }
}

Tabs.Tab = TabContent

Tabs.propTypes = {
  /** Children should be an array of Tabs.Tab */
  children: PropTypes.node.isRequired,
  /** Selected should be the index of the desired selected tab */
  selected: PropTypes.number.isRequired,
  /** onSelect will be called with the new index when a new tab is selected by the user */
  onSelect: PropTypes.func.isRequired
}

Tabs.defaultProps = {
  children: []
}

export default Tabs
