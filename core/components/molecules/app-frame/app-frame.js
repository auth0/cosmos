import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'


const AppFrame = props => (
  <AppFrame.Element {...Automation('app-frame')}>
    <AppFrame.SkipLink {...Automation('app-frame.skiplink')} href="#main">Skip to main content</AppFrame.SkipLink>
    <AppFrame.Header {...Automation('app-frame.header')} role="banner">
      <AppFrame.HeaderContainer>Header</AppFrame.HeaderContainer>
    </AppFrame.Header>
    <AppFrame.SideBar {...Automation('app-frame.sidebar')}>SideBar</AppFrame.SideBar>
    <AppFrame.Content {...Automation('app-frame.content')} role="main">ConThere are some key differences with how a grid layout works over the grid systems you may have used previously. As you can see, we do not need to add any markup to create a row, grid systems need to do this to stop elements popping up into the row above. With CSS Grid Layout, we can place things into rows, with no danger of them rising up into the row above if it is left empty. Due to this strict column and row placement we can also easily leave white space in our layout. We also don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the item.There are some key differences with how a grid layout works over the grid systems you may have used previously. As you can see, we do not need to add any markup to create a row, grid systems need to do this to stop elements popping up into the row above. With CSS Grid Layout, we can place things into rows, with no danger of them rising up into the row above if it is left empty. Due to this strict column and row placement we can also easily leave white space in our layout. We also don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the item.There are some key differences with how a grid layout works over the grid systems you may have used previously. As you can see, we do not need to add any markup to create a row, grid systems need to do this to stop elements popping up into the row above. With CSS Grid Layout, we can place things into rows, with no danger of them rising up into the row above if it is left empty. Due to this strict column and row placement we can also easily leave white space in our layout. We also don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the item.There are some key differences with how a grid layout works over the grid systems you may have used previously. As you can see, we do not need to add any markup to create a row, grid systems need to do this to stop elements popping up into the row above. With CSS Grid Layout, we can place things into rows, with no danger of them rising up into the row above if it is left empty. Due to this strict column and row placement we can also easily leave white space in our layout. We also don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the item.tent</AppFrame.Content>
  </AppFrame.Element>
)


AppFrame.Element = styled.div`
  position: relative;
  display: grid;
  grid-gap: ${spacing.medium};
  grid-template-areas: 
    "header"
    "sidebar"
    "content";

  @media (min-width: 700px) {
    grid-template-columns: auto 200px calc(866px - ${spacing.medium}) auto;
    grid-template-areas:
    "header header header header"
    ". sidebar  content .";
  }  
`

AppFrame.Header = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  background: rgba(255,255,255,.5);
  border-bottom: 1px solid grey;
`
AppFrame.HeaderContainer = styled.header`
  width: 1064px;
  margin-left: auto;
  margin-right: auto;
`

AppFrame.SideBar = styled.div`
  grid-area: sidebar;
`

AppFrame.Content = styled.main`
  grid-area: content;
`

AppFrame.SkipLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(0,0,0,.8);
  color: #fff;
  &:focus {
    z-index: 1;
  }
`

export default AppFrame
