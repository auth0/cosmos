import React from "react"
import styled from "styled-components"
import { Icon } from "@auth0/cosmos"
import "@auth0/cosmos-fonts"

import { Provider as ComponentProvider } from "../context/component-context"
import Sidebar from "../sidebar"
import { Navigation } from "../docs-components"
import { Provider as SiteProvider } from "./../context/site-meta"
class AppLayout extends React.Component {
  constructor() {
    super()

    this.state = { sidebarVisible: false }
  }
  toggleSidebar = () => {
    this.setState({ sidebarVisible: !this.state.sidebarVisible })
  }
  componentDidMount() {
    // Copied from: https://github.com/ReactTraining/react-router/issues/394#issuecomment-128148470
    // Decode entities in the URL
    // Sometimes a URL like #/foo#bar will be encoded as #/foo%23bar
    window.location.hash = window.decodeURIComponent(window.location.hash)
    const scrollToAnchor = () => {
      const hashParts = window.location.hash.split("#")
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0]
        const link = document.querySelector(`#${hash}`)
        if (link) link.scrollIntoView()
      } else {
        document.querySelector("nav").scrollIntoView()
      }
    }
    scrollToAnchor()
    window.onhashchange = scrollToAnchor
  }
  render() {
    return (
      <SiteProvider>
        <ComponentProvider>
          <Layout>
            <Navigation />
            <SidebarToggle
              sidebarVisible={this.state.sidebarVisible}
              onClick={this.toggleSidebar}
            >
              <Icon
                name={this.state.sidebarVisible ? "close" : "arrow-right"}
              />
            </SidebarToggle>
            <SideContent visible={this.state.sidebarVisible}>
              <Sidebar />
            </SideContent>
            <MainContent id="main">
              <Body>{this.props.children}</Body>
            </MainContent>
          </Layout>
        </ComponentProvider>
      </SiteProvider>
    )
  }
}

export default AppLayout

const SideContent = styled.div`
  width: 19rem;
  position: fixed;
  height: calc(100vh - 80px);
  overflow-y: auto;
  transition: width 0.25s;

  @media (max-width: 800px) {
    width: ${props => (props.visible ? "19rem" : "0rem")};
    z-index: 2;
  }
`
const SidebarToggle = styled.div`
  padding: 16px;
  position: fixed;
  left: ${props => (props.sidebarVisible ? "19rem" : "0rem")};
  transition: left 0.25s;
  z-index: 3;

  &:hover {
    svg path {
      fill: ${props => (props.sidebarVisible ? "#E40002" : "#0a84ae")};
    }
  }

  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

const MainContent = styled.div`
  padding-left: 19rem;
  padding-bottom: 4rem;

  @media (max-width: 800px) {
    padding-left: 4rem;
  }
`

const Body = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.1rem 1.05rem;
`

const Layout = styled.div`
  position: relative;
  width: 100%;
  margin-top: 80px;
  ${"" /* make room for the fixed top navigation */};
`
