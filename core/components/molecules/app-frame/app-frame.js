import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'


const AppFrame = props => (
  <AppFrame.Element {...Automation('app-frame')}>
    <AppFrame.SkipLink {...Automation('app-frame.skiplink')} href="#main">Skip to main content</AppFrame.SkipLink>
    {props.children}
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
  > * {
    width: 1064px;
    margin-left: auto;
    margin-right: auto;
  }
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
