import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ResourceListItem from './item'
import { spacing } from '@auth0/cosmos-tokens'

const StyledList = styled.ul`
  margin: ${spacing.large} 0;
  padding: 0;
`

const defaultItemRenderer = props => (item, index) => (
  <ResourceListItem key={index} actions={props.actions} {...item} />
)

const ResourceList = props => {
  return (
    <StyledList>
      {props.items.map((item, index) => {
        const itemProps = {
          _item: item,
          actions: props.actions,
          ...item
        }
        const itemRenderer = props.renderItem || defaultItemRenderer(props)
        return itemRenderer(itemProps, index)
      })}
    </StyledList>
  )
}

ResourceList.Item = ResourceListItem

ResourceList.propTypes = {
  /** The items that will be rendered in the list. */
  items: PropTypes.array.isRequired,
  /** The actions to render to the right side of the list items. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      method: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  /** A function that accepts an item from the items array, and returns a ResourceList.Item. */
  renderItem: PropTypes.func
}

export default ResourceList
