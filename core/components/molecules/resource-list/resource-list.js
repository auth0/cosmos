import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import { spacing, colors } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import Automation from '../../_helpers/automation-attribute'
import ResourceListItem from './item'
import Tooltip from '../../atoms/tooltip'
import Icon from '../../atoms/icon'

const StyledList = styled.ul`
  margin: ${spacing.large} 0;
  padding: 0;

  &.cosmos-dragging {
    background-color: red;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  }
`

const SortableListHandle = SortableHandle(() => (
  <SortableListHandle.Element>
    <Tooltip content="Re-order">
      <Icon name="resize-vertical" size={16} color={colors.button.link.icon} />
    </Tooltip>
  </SortableListHandle.Element>
))

SortableListHandle.Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing.large};
  margin-right: ${spacing.xsmall};
  height: 100%;
`

const defaultItemRenderer = (item, index) => (
  <ResourceListItem index={index} reorderHandle={SortableListHandle} {...item} />
)

const itemRendererBuilder = ({ item, index, renderItem, onItemClick, actions }) => {
  const itemRenderer = renderItem || defaultItemRenderer
  return React.cloneElement(itemRenderer(item, index), {
    actions: item.actions || actions,
    onClick: item.onClick || onItemClick,
    item
  })
}

const defaultChildrenRenderer = ({ items, actions, onItemClick, renderItem }) =>
  items.map((item, index) => itemRendererBuilder({ item, index, renderItem, onItemClick, actions }))

const SortableResourceListItem = SortableElement(
  ({ item, index, renderItem, actions, onClick: onItemClick }) =>
    itemRendererBuilder({ item, index, renderItem, actions, onItemClick })
)

const SortableResourceList = SortableContainer(
  ({ items: sortableItems, actions, onItemClick, renderItem }) => (
    <div>
      {sortableItems.map((item, index) => (
        <SortableResourceListItem
          actions={item.actions || actions}
          onClick={item.onClick || onItemClick}
          item={item}
          key={index}
          index={index}
          renderItem={renderItem}
        />
      ))}
    </div>
  )
)

const sortableChildrenRenderer = props => {
  return <SortableResourceList {...props} useDragHandle={true} helperClass="cosmos-dragging" />
}

const resolveChildrenRenderer = props =>
  props.sortable ? sortableChildrenRenderer(props) : defaultChildrenRenderer(props)

const ResourceList = props => (
  <StyledList {...Automation('resource-list')}>{resolveChildrenRenderer(props)}</StyledList>
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
export { arrayMove }
