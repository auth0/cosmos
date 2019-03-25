import * as React from 'react'

/**
 * Children mover is a utility that helps components have cleaner APIs by
 * allowing the user to pass different kind of sub-components to a component
 * and letting the component internal logic to separate each child and
 * put it when and where it should be displayed in the output.
 *
 * For example:
 *      <Sidebar.Link>
 *        <Icon name="arrow-right" />
 *        <Sidebar.Link.Text>Submenu</Sidebar.Link.Text>
 *
 *        <Sidebar.LinkGroup defaultOpen>
 *          <Sidebar.Link>
 *            <Icon name="dashboard" />
 *            <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
 *          </Sidebar.Link>
 *          <Sidebar.Link>
 *            <Icon name="dashboard" />
 *            <Sidebar.Link.Text>Dashboard</Sidebar.Link.Text>
 *          </Sidebar.Link>
 *        </Sidebar.LinkGroup>
 *      </Sidebar.Link>
 *
 * I want the output of this to be something where the `Sidebar.LinkGroup`
 * is outside the anchor element where the `Icon` and `Sidebar.Link.Text`
 * will be displayed. So then, I need to separate the `Sidebar.LinkGroup`
 * from the rest of the components.
 *
 * Usage:
 *
 *     const { include, exclude } = childrenMover(Sidebar.LinkGroup)
 *     const [linkItems, subMenu] = [exclude(props.children), include(props.children)]
 *
 *     return <div>
 *         <a>
 *             {linkItems}
 *         </a>
 *
 *         {subMenu}
 *     </div>
 *
 * @param {React.Element} type - The React element type you want to match
 */
export const childrenMover = type => {
  const conditionResolver = (child, isInclude) => {
    const condition = child && child.type === type

    return isInclude ? condition : !condition
  }

  const childResolver = ({ isInclude }) => children =>
    React.Children.map(children, child => (conditionResolver(child, isInclude) ? child : null))

  return {
    include: childResolver({ isInclude: true }),
    exclude: childResolver({ isInclude: false })
  }
}
