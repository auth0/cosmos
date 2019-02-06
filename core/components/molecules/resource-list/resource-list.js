import React from 'react'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'
import styled from '@auth0/cosmos/styled'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'
import SortableListHandle from './sortable-handle'

const ResourceList = props => {
  const defaultItemRenderer = (item, _, index) => {
    // We can say we are in dragging mode if there one .cosmos-dragging
    // element in the DOM.
    const draggingMode = document.querySelector('.cosmos-dragging')
    return (
      <ResourceListItem
        index={index}
        draggingMode={draggingMode}
        reorderHandle={props.sortable ? SortableListHandle : null}
        item={item}
        {...item}
      />
    )
  }

  const itemRendererBuilder = props => {
    const {
      item,
      index,
      actions,
      renderItem,
      onItemClick,
      accessibilityIndex,
      accessibilityOnSortEnd
    } = props
    const itemRenderer = renderItem || defaultItemRenderer
    const actualIndex = index || accessibilityIndex

    const handleOnItemClick = evt => {
      if (typeof onItemClick === 'function') onItemClick(evt, item)
    }

    return React.cloneElement(itemRenderer(item, props, actualIndex), {
      item,
      key: actualIndex,
      index: actualIndex,
      accessibilityOnSortEnd,
      actions: item.actions || actions,
      onClick: item.onClick || handleOnItemClick
    })
  }

  const defaultChildrenRenderer = ({ items, actions, onItemClick, renderItem }) =>
    items.map((item, index) =>
      itemRendererBuilder({ item, index, renderItem, onItemClick, actions })
    )

  const SortableResourceListItem = SortableElement(
    ({
      item,
      actions,
      renderItem,
      accessibilityIndex,
      onClick: onItemClick,
      accessibilityOnSortEnd
    }) =>
      itemRendererBuilder({
        item,
        actions,
        renderItem,
        accessibilityIndex,
        onItemClick,
        accessibilityOnSortEnd
      })
  )

  const SortableResourceList = SortableContainer(
    ({ items: sortableItems, actions, onItemClick, renderItem, accessibilityOnSortEnd }) => (
      <div>
        {sortableItems.map((item, index) => (
          <SortableResourceListItem
            actions={item.actions || actions}
            onClick={item.onClick || onItemClick}
            item={item}
            key={index}
            // Need to pass accessibilityIndex due to index being omitted
            // when calling child component.
            // See: https://github.com/clauderic/react-sortable-hoc/blob/0077f0b4e3b50f68c04672e78b6b69b8dc880d96/src/SortableElement/index.js#L89
            accessibilityIndex={index}
            accessibilityOnSortEnd={accessibilityOnSortEnd}
            index={index}
            renderItem={renderItem}
          />
        ))}
      </div>
    )
  )

  const sortableChildrenRenderer = props => {
    return (
      <SortableResourceList
        {...props}
        useDragHandle={true}
        helperClass="cosmos-dragging"
        accessibilityOnSortEnd={props.onSortEnd}
      />
    )
  }

  const resolveChildrenRenderer = props =>
    props.sortable ? sortableChildrenRenderer(props) : defaultChildrenRenderer(props)

  return (
    <ResourceList.Element {...Automation('resource-list')} {...props}>
      {resolveChildrenRenderer(props)}
    </ResourceList.Element>
  )
}

ResourceList.Element = styled.ul`
  ${containerStyles};

  margin: ${spacing.large} 0;
  padding: 0;
`

ResourceList.Item = ResourceListItem

ResourceList.propTypes = {
  /** The items that will be rendered in the list. */
  items: PropTypes.array.isRequired,
  /** The actions to render to the right side of the list items. */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(actionShapeWithRequiredIcon)
  ]),
  /** A function that will be called when an item is clicked. */
  onItemClick: PropTypes.func,
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: PropTypes.func,
  /** Whether the resource list will be sortable by the user or not */
  sortable: PropTypes.bool
}

export default ResourceList
export { arrayMove }
