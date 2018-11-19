import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import Automation from '../../_helpers/automation-attribute'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

const StyledList = styled.ul`
  margin: ${spacing.large} 0;
  padding: 0;
`

const defaultItemRenderer = (item, index) => <ResourceListItem index={index} {...item} />
const defaultChildrenRenderer = ({ items, actions, onItemClick, renderItem }) =>
  items.map((item, index) => {
    const itemRenderer = renderItem || defaultItemRenderer
    return React.cloneElement(itemRenderer(item, index), {
      key: item.key || index,
      actions: item.actions || actions,
      onClick: item.onClick || onItemClick,
      item
    })
  })

const sortableChildrenRenderer = ({ items, actions, onItemClick, renderItem, onSortEnd }) => {
  const Container = SortableContainer(({ items: sortableItems }) =>
    sortableItems.map((item, index) => {
      const itemRenderer = renderItem || defaultItemRenderer
      const SortableResourceListItem = SortableElement(value => itemRenderer(item, index, value))

      return (
        <SortableResourceListItem
          key={index}
          actions={item.actions || actions}
          onClick={item.onClick || onItemClick}
          item={item}
          index={index}
        />
      )
    })
  )
  return <Container items={items} onSortEnd={onSortEnd} />
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
