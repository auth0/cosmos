import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

const defaultItemRenderer = item => <ResourceListItem {...item} />

const ResourceList = props => (
  <ResourceList.Element
    {...Automation('resource-list')}
    margin={{ top: 'large', bottom: 'large', left: 0, right: 0 }}
  >
    {props.items.map((item, index) => {
      const itemRenderer = props.renderItem || defaultItemRenderer
      return React.cloneElement(itemRenderer(item, index), {
        key: item.key || index,
        actions: item.actions || props.actions,
        onClick: item.onClick || props.onItemClick,
        item
      })
    })}
  </ResourceList.Element>
)

ResourceList.Element = styled.ul`
  ${containerStyles};
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
  renderItem: PropTypes.func
}

export default ResourceList
