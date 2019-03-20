import React from 'react'

/**
 * Removes the List.Drawer element from the
 * list body child.
 * @param {React.Element} child
 */
export const excludeDrawer = (child, type) => {
  const newChildren = React.Children.map(child.props.children, child => {
    if (!child || child.type === type) return null

    return child
  })

  return React.cloneElement(child, { children: newChildren })
}

/**
 * Filters the List.Drawer element from the
 * list body child.
 * @param {React.Element} child
 */
export const getDrawer = (child, drawerIsOpen, type) => {
  const drawer = React.Children.map(child.props.children, child => {
    if (!child || child.type !== type) return null

    const { props } = child

    return React.cloneElement(child, { hidden: !drawerIsOpen, 'aria-label': props.description })
  })

  // TODO: return only first item of drawer
  return drawer
}

/**
 * Finds a List.Drawer element in the list
 * and returns if the list is expandable or not.
 * @param {React.Element} child
 */
export const isListExpandable = (child, type) => {
  let isPresent = false

  React.Children.map(child.props.children, item => {
    if (item && item.type === type) isPresent = true
  })

  return isPresent
}

export const onItemClickHandler = (props, child) => {
  if (!props.onItemClick) return

  return ev => props.onItemClick(ev, child.props)
}
