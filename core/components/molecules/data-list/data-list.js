import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'
import Icon from '../../atoms/icon'

/**
 * Resolves if the Datalist item has an open drawer.
 * @param {React.Element} drawers
 */
const isDrawerOpen = drawers => {
  return drawers.length > 0 && drawers[0].props.hidden == false
}

/**
 * Removes the DataList.Drawer element from the
 * Datalist body child.
 * @param {React.Element} child
 */
const excludeDrawer = child => {
  const newChildren = React.Children.map(child.props.children, child => {
    if (child.type === DataList.Drawer) return null

    return child
  })

  return React.cloneElement(child, { children: newChildren })
}

/**
 * Filters the DataList.Drawer element from the
 * Datalist body child.
 * @param {React.Element} child
 */
const getDrawer = child => {
  let onToggle
  const drawer = React.Children.map(child.props.children, child => {
    if (child.type !== DataList.Drawer) return null
    const { props } = child
    onToggle = props.onToggle

    return React.cloneElement(child, { hidden: !props.open, 'aria-label': props.description })
  })

  return { drawer, onToggle }
}

/**
 * Finds a DataList.Drawer element in the Datalist
 * and returns if the Datalist is expandable or not.
 * @param {React.Element} child
 */
const isDataListExpandable = child => {
  let isPresent = false

  React.Children.map(child.props.children, item => {
    if (item.type === DataList.Drawer) isPresent = true
  })

  return isPresent
}

const onItemClickHandler = (props, child) => {
  if (!props.onItemClick) return

  return ev => props.onItemClick(ev, child.props)
}

const DataListContainer = SortableContainer(props => (
  <div>{React.Children.map(props.children, renderItem(props, DataListItemContainer))}</div>
))

const DataListItemContainer = SortableElement(props =>
  React.cloneElement(props.children, { sortIndex: props.index, value: props.value })
)

const renderItem = (props, wrapperElement = React.Fragment) => (child, index) => {
  const { onToggle, drawer } = getDrawer(child)
  const hasOpenDrawer = isDrawerOpen(drawer)
  const arrowIconName = hasOpenDrawer ? 'chevron-up' : 'chevron-down'
  const ItemWrapper = wrapperElement

  const itemWrapperProps = ItemWrapper === React.Fragment ? {} : { index, value: index }

  return (
    <ItemWrapper key={`item-${index}`} {...itemWrapperProps}>
      <DataList.ItemContainer
        {...Automation('Datalist.item')}
        hasOpenDrawer={hasOpenDrawer}
        draggable={props.draggable}
        onClick={onItemClickHandler(props, child)}
      >
        {props.draggable && (
          <DataList.Handle
          // aria-expanded="true"
          // aria-label="Toggle details"
          // aria-labelledby="example-id button_id"
          // id="button_id"
          >
            <Icon name="resize-vertical" size="16" color="blue" />
          </DataList.Handle>
        )}

        <DataList.Content>{excludeDrawer(child)}</DataList.Content>

        {isDataListExpandable(child) && (
          <DataList.Arrow onClick={onToggle}>
            <Icon name={arrowIconName} size="16" color="default" />
          </DataList.Arrow>
        )}

        {drawer}
      </DataList.ItemContainer>
    </ItemWrapper>
  )
}

const DataList = props => (
  <DataList.Element
    {...props}
    {...Automation('Datalist')}
    role="Datalist"
    // aria-label="Expandable data Datalist"
  >
    {props.label && (
      <DataList.Label>
        <Heading size={4}>{props.label}</Heading>
      </DataList.Label>
    )}

    {props.draggable ? (
      <DataListContainer axis="y" useDragHandle={true} onSortEnd={props.onDragEnd} {...props} />
    ) : (
      React.Children.map(props.children, renderItem(props))
    )}
  </DataList.Element>
)

DataList.Element = styled.ul`
  ${containerStyles};
`

DataList.Item = React.Fragment

DataList.ItemContainer = styled.li`
  border-top: 1px solid ${colors.list.borderColor};
  padding-left: ${spacing.medium};
  padding-right: ${spacing.medium};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  background-color: ${props => (props.hasOpenDrawer ? colors.list.backgroundHover : 'transparent')};

  &:hover {
    background-color: ${colors.list.backgroundHover};
  }
`

DataList.Content = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  word-break: break-word;

  > *:not(:last-child):not(:only-child) {
    margin-right: ${spacing.medium};
  }

  /* if it has only one item inside we want it to fill all the avaliable space */
  > * {
    flex: 1;
  }
`
DataList.Header = styled.div`
  flex: 1;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`

DataList.Body = styled.div`
  flex: 1.4;
  /* This is not mobile first, but it avoids negation of margin */
  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
    order: 1;
    margin-top: ${spacing.small};
  }
`

DataList.Footer = styled.div`
  flex: none;
`

// Sortable DataList
DataList.Handle = SortableHandle(styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`)

// Sortable DataList
DataList.Arrow = styled.button`
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

DataList.Drawer = styled.section`
  flex: 1 0 100%;
  border-top: 1px solid ${colors.list.borderColor};
  display: ${props => (props.hidden ? 'none' : 'block')};

  margin-top: ${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};
`

DataList.Label = styled.div`
  padding: ${spacing.xsmall};

  ${StyledHeading[4]} {
    margin: 0;
  }
`

DataList.propTypes = {
  /** header for Datalist */
  label: PropTypes.string,
  /** whether the Datalist should show dragging handles */
  draggable: PropTypes.bool,
  expandable: PropTypes.bool,
  /** this function is called when dragging items have finished */
  onDragEnd: PropTypes.func,
  onItemClick: PropTypes.func
}

DataList.arrayMove = arrayMove

DataList.defaultProps = {}

export default DataList
