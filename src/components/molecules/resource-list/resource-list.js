import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const StyledList = styled.ul`
  margin: ${spacing.large} 0;
  padding: 0;
`

const defaultItemRenderer = (item, index) => <ResourceListItem {...item} />

const ResourceList = props => (
  <StyledList>
    {props.items.map((item, index) => {
      const itemRenderer = props.renderItem || defaultItemRenderer
      return React.cloneElement(itemRenderer(item, index), {
        key: item.key || index,
        actions: item.actions || props.actions,
        item
      })
    })}
  </StyledList>
)

ResourceList.Item = ResourceListItem

ResourceList.propTypes = {
  /** The items that will be rendered in the list. */
  items: PropTypes.array.isRequired,
  /** The actions to render to the right side of the list items. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
      handler: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: PropTypes.func
}

export default ResourceList
