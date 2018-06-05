import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'
import makeId from '../../_helpers/uniqueId'

const Wrapper = styled.div``

const TabLink = styled.a`
  display: inline-block;
  padding: ${spacing.small} 0;
  margin-right: ${spacing.large};
  color: ${props => (props.selected ? colors.base.text : colors.link.default)};
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
  border-bottom: 1px solid ${props => (props.selected ? colors.base.text : 'transparent')};
  margin-bottom: -1px;

  &:hover {
    color: ${props => (!props.selected ? colors.link.defaultHover : null)};
  }
`

const TabLinkGroup = styled.div`
  border-bottom: 1px solid ${colors.base.grayLight};
  ${TabLink}:last-child {
    margin-right: 0;
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
    this.state = { selectedIndex: this.getSelectedTabFromChildProps(this.tabs) }
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
    this.setState({ selectedIndex: this.getSelectedTabFromChildProps(this.tabs) })
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
    const currentIndex = this.getSelectedTabFromPropsOrState()

    if (currentIndex !== nextIndex) {
      if (this.props.onSelect) {
        this.props.onSelect(nextIndex)
      } else {
        const { cosmosKey } = this.props
        if (cosmosKey) {
          tabStore[cosmosKey] = nextIndex
        }

        this.setState({ selectedIndex: nextIndex })
      }
    }
  }

  getSelectedTabFromPropsOrState() {
    const stateSelectedIndex = this.state.selectedIndex
    const propsSelectedIndex = this.props.selected
    const selectedIndex =
      typeof propsSelectedIndex !== 'undefined' ? propsSelectedIndex : stateSelectedIndex

    return selectedIndex
  }

  render() {
    const selectedIndex = this.getSelectedTabFromPropsOrState()

    return (
      <Wrapper>
        <TabLinkGroup>
          {this.tabs.map((tab, index) => (
            <TabLink
              onClick={() => this.changeTab(index)}
              key={tab.props.label}
              selected={selectedIndex === index}
            >
              {tab.props.label}
            </TabLink>
          ))}
        </TabLinkGroup>
        {this.tabs[selectedIndex]}
      </Wrapper>
    )
  }
}

Tabs.Tab = TabContent

Tabs.propTypes = {
  /** Children should be an array of Tabs.Tab */
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  /** Selected should be the index of the desired selected tab */
  selected: PropTypes.number,
  /** onSelect will be called with the new index when a new tab is selected by the user */
  onSelect: PropTypes.func
}

Tabs.defaultProps = {
  children: []
}

const generateKey = WrappedComponent =>
  class Tabs extends React.Component {
    displayName = `KeyWrapper(${WrappedComponent.displayName})`

    shouldComponentUpdate(nextProps) {
      const { selected } = this.props
      if (typeof selected === 'undefined') return false

      return selected !== nextProps.selected
    }

    render() {
      const key = makeId('tab')
      return this.props.selected ? (
        <WrappedComponent {...this.props} />
      ) : (
        <WrappedComponent {...this.props} cosmosKey={key} />
      )
    }
  }

const TabWithKey = generateKey(Tabs)
TabWithKey.Tab = TabContent

export default TabWithKey
