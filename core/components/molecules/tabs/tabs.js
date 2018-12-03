import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'

import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

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
      <Tabs.Element {...Automation('tabs')}>
        <Tabs.TabList role="tablist">
          {this.tabs.map((tab, index) => (
            <Tabs.TabListItem role="presentation">
              <Tabs.TabLink
                aria-label={tab.props.label}
                role="tab"
                {...Automation('tabs.item')}
                onClick={() => this.changeTab(index)}
                key={index}
                selected={selectedIndex === index}
                tabIndex={selectedIndex === index ? '-1' : '0'}
                type="button"
                aria-selected={selectedIndex === index}
                aria-controls="lomismo"
                id=""
                onKeyPress={e => this.handleKeyPress(e, index)}
              >
                {tab.props.label}
              </Tabs.TabLink>
            </Tabs.TabListItem>
          ))}
        </Tabs.TabList>
        {/* add role="tabpanel" to the panel   aria-labelledby="lomismo" tabindex="0" id=""*/}
        {this.tabs[selectedIndex]}
      </Tabs.Element>
    )
  }
}

Tabs.Element = styled.div`
  ${containerStyles};
`
Tabs.TabList = styled.ul`
  display: flex;
  border-bottom: 1px solid ${colors.base.grayLight};
`

Tabs.TabListItem = styled.li`
  &:not(:last-child) {margin-right: ${spacing.large};}
`

Tabs.TabLink = styled.button`
  /* Resets button browser styles */
  background-color: transparent;
  border: none;
  padding: ${spacing.small} 0;
  color: ${colors.link.default};
  cursor: pointer;
  border-bottom: 1px solid transparent;
  margin-bottom: -1px;
  &:hover {
    color: ${props => (!props.selected ? colors.link.defaultHover : colors.text.default)};
  }
  &:focus {
    outline: none;
    border-bottom-color: ${colors.link.default};
  }
  &:active {
    border-bottom-color: ${colors.base.text};
  }
  ${props =>
    props.selected &&
    css`
      border-bottom: 1px solid ${colors.base.text};
      cursor: default;
      color: ${colors.text.default};
      &:focus {
        border-bottom-color: ${colors.base.text};
      }
    `};
`

Tabs.TabContent = styled.div`
  padding-top: ${spacing.large};
`

Tabs.Tab = Tabs.TabContent

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
