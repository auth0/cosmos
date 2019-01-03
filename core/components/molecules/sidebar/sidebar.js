import React from 'react'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'
import Automation from '../../_helpers/automation-attribute'
import { colors } from '@auth0/cosmos-tokens'

const Sidebar = props => {
  return (
    <Sidebar.Element {...Automation('Sidebar Nav')} aria-label="[landmark description]">
      {/* if group, then do the ul within the section, else do the ul outside. */}
      <Sidebar.List {...Automation('Sidebar List')} {...props} />
    </Sidebar.Element>
  )
}

Sidebar.Element = styled.nav`
  /* * {
    border: 1px solid red;
  } */
  /* float: left; */
  /* width: 160px; */
`

Sidebar.Group = styled.section`
  /* background-color: violet; */
  :not(:last-of-type):not(:only-of-type) {
    margin-bottom: 20px;
  }
`

Sidebar.GroupHeader = styled.h2`
  /* background-color: papayawhip; */
  text-transform: uppercase;
  font-size: 11px;
  color: ${colors.text.secondary};
`

Sidebar.List = styled.ul``

Sidebar.Link = SidebarLink
Sidebar.LinkGroup = SidebarLinkGroup

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar

// <nav aria-label="Primary Nav Expandable Example">
//   <section aria-labelledby="grouped-title1">
//     <h2 id="grouped-title1">Section title 1</h2>
//     <ul>
//       <li>
//         <a href="#" aria-expanded="true" id="expandable-example-1">
//           <i aria-hidden="true"></i>
//           <span>Link 1 (current and expanded example)</span>
//         </a>
//         <ul
//           class="pf-c-nav__simple-list"
//           aria-labelledby="expandable-example-1"
//         >
//           <li><a href="#" aria-current="page"> Current link </a></li>
//           <li>
//             <a href="#"> <i aria-hidden="true"></i> Subnav link 2 </a>
//           </li>
//           <li>
//             <a href="#"> <i aria-hidden="true"></i> Subnav link 3 </a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 2</span> </a>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 3</span> </a>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 2</span> </a>
//       </li>
//     </ul>
//   </section>

//   <section aria-labelledby="grouped-title2">
//     <h2 id="grouped-title2">Section title 1</h2>
//     <ul>
//       <li>
//         <a href="#" aria-expanded="true" id="expandable-example-2">
//           <i aria-hidden="true"></i>
//           <span>Link 1 (current and expanded example)</span>
//         </a>
//         <ul
//           class="pf-c-nav__simple-list"
//           aria-labelledby="expandable-example-2"
//         >
//           <li><a href="#" aria-current="page"> Current link </a></li>
//           <li>
//             <a href="#"> <i aria-hidden="true"></i> Subnav link 2 </a>
//           </li>
//           <li>
//             <a href="#"> <i aria-hidden="true"></i> Subnav link 3 </a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 2</span> </a>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 3</span> </a>
//       </li>
//       <li>
//         <a href="#"> <i aria-hidden="true"></i> <span>Link 2</span> </a>
//       </li>
//     </ul>
//   </section>
// </nav>
