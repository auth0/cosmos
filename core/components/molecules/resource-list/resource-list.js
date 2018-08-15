import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'

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
        onClick: item.onClick || props.onItemClick,
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
  actions: PropTypes.arrayOf(actionShapeWithRequiredIcon),
  /** A function that will be called when an item is clicked. */
  onItemClick: PropTypes.func,
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: PropTypes.func
}

export default ResourceList
