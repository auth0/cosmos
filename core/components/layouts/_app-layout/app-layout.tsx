import * as React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '../../tokens'

const AppLayout = props => (
  <AppLayout.Element {...Automation('app-frame')}>
    <AppLayout.SkipLink {...Automation('app-frame.skiplink')} href="#main">
      Skip to main content
    </AppLayout.SkipLink>
    {props.children}
  </AppLayout.Element>
)

AppLayout.Element = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas:
    'header'
    'sidebar'
    'content';
  @media (min-width: 700px) {
    grid-template-columns: auto 200px calc(866px - ${spacing.medium}) auto;
    grid-template-areas:
      'header header header header'
      '. sidebar  content .';
  }
`

AppLayout.Header = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #f1f1f1;

  /*

  Comsmos won't set heights and padding for now,
  until we create the inner structures and
  header components

  height: 69px;
  padding: 10px 0; */
  > * {
    width: 1064px;
    margin-left: auto;
    margin-right: auto;
  }
`

AppLayout.SideBar = styled.div`
  grid-area: sidebar;
  > * {
    position: sticky;

    /* The value of top should be the height of the header */
    top: 20px;
  }
`

AppLayout.Content = styled.main`
  grid-area: content;
`

AppLayout.SkipLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  &:focus {
    z-index: 1;
  }
`

export default AppLayout
