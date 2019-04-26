import * as React from 'react'

/**
 * Removes the List.Drawer element from the
 * list body child.
 * @param {React.Element} child
 */
export const excludeDrawer = (child, type) => {
  const newChildren = React.Children.map(child.props.children, (child) => {
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
  const drawer = React.Children.map(child.props.children, (child) => {
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
  let arrowIsVisible = true

  React.Children.map(child.props.children, (item) => {
    if (item && item.type === type) {
      isPresent = true

      if (item.props.hidden) {
        arrowIsVisible = false
      }
    }
  })

  return [isPresent, arrowIsVisible]
}

export const onItemClickHandler = (props, child) => {
  if (!props.onItemClick) return undefined

  return (ev) => props.onItemClick(ev, child.props)
}
