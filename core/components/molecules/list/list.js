import React, { useState } from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Heading, { StyledHeading } from '../../atoms/heading'
import Icon from '../../atoms/icon'
import { excludeDrawer, getDrawer, isListExpandable, onItemClickHandler } from '../../_helpers/list'

/**
 * Used to store a div element constructor.
 *
 * <Div someProp="someValue"> ... </Div>
 * is the same as:
 * <div someProp="someValue"> ... </div>
 *
 * @param {object} props
 */
export const Div = props => <div {...props} />

const ListContainer = SortableContainer(props => (
  <div>{React.Children.map(props.children, renderItem(props, ListItemContainer))}</div>
))

const ListItemContainer = SortableElement(props =>
  React.cloneElement(props.children, { sortIndex: props.index, value: props.value })
)

const renderItem = (props, wrapperElement = Div) => (child, index) => {
  const ItemWrapper = wrapperElement

  const itemWrapperProps = ItemWrapper === Div ? {} : { index, value: index }

  return (
    <ItemWrapper key={`item-${index}`} {...itemWrapperProps}>
      <List.ItemContainer
        {...Automation('list.item')}
        draggable={props.draggable}
        onClick={onItemClickHandler(props, child)}
      >
        {(drawerIsOpen, setDrawerState) => {
          const drawer = getDrawer(child, drawerIsOpen, List.Drawer)

          return (
            <React.Fragment>
              {props.draggable && (
                <List.Handle
                // aria-expanded="true"
                // aria-label="Toggle details"
                // aria-labelledby="example-id button_id"
                // id="button_id"
                >
                  <Icon name="resize-vertical" size="16" color="blue" />
                </List.Handle>
              )}

              <List.Item>{excludeDrawer(child, List.Drawer)}</List.Item>

              {isListExpandable(child, List.Drawer) && (
                <List.Arrow onClick={() => setDrawerState(!drawerIsOpen)}>
                  <Icon
                    name={drawerIsOpen ? 'chevron-up' : 'chevron-down'}
                    size="16"
                    color="default"
                  />
                </List.Arrow>
              )}

              {drawer}
            </React.Fragment>
          )
        }}
      </List.ItemContainer>
    </ItemWrapper>
  )
}

const List = props => (
  <List.Element
    {...props}
    {...Automation('list')}
    role="list"
    // aria-label="Expandable data list"
  >
    {props.label && (
      <List.Label>
        <Heading size={4}>{props.label}</Heading>
      </List.Label>
    )}

    {props.draggable ? (
      <ListContainer axis="y" useDragHandle={true} onSortEnd={props.onDragEnd} {...props} />
    ) : (
      React.Children.map(props.children, renderItem(props))
    )}
  </List.Element>
)

List.Element = styled.ul`
  ${containerStyles};
`

List.ItemContainer = props => {
  const [drawerOpen, setDrawerState] = useState(false)

  return (
    <List.ItemContainer.Element {...props} hasOpenDrawer={drawerOpen}>
      {props.children(drawerOpen, setDrawerState)}
    </List.ItemContainer.Element>
  )
}

List.ItemContainer.Element = styled.li`
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

List.Item = styled.div`
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
List.Header = styled.div`
  flex: 1;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`

List.Body = styled.div`
  flex: 1.4;
  /* This is not mobile first, but it avoids negation of margin */
  @media screen and (max-width: 768px) {
    flex: 1 0 100%;
    order: 1;
    margin-top: ${spacing.small};
  }
`

List.Footer = styled.div`
  flex: none;
`

// Sortable List
List.Handle = SortableHandle(styled.button`
  cursor: move;
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-left: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`)

List.Arrow = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  margin-top: -${spacing.small};
  margin-bottom: -${spacing.small};
  margin-right: -${spacing.small};
  padding-left: ${spacing.small};
  padding-right: ${spacing.small};
`

List.Drawer = styled.section`
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

List.Label = styled.div`
  padding: ${spacing.xsmall};

  ${StyledHeading[4]} {
    margin: 0;
  }
`

List.propTypes = {
  /** header for list */
  label: PropTypes.string,
  /** whether the list should show dragging handles */
  draggable: PropTypes.bool,
  expandable: PropTypes.bool,
  /** this function is called when dragging items have finished */
  onDragEnd: PropTypes.func,
  onItemClick: PropTypes.func
}

List.arrayMove = arrayMove

List.defaultProps = {}

export default List
