import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { Icon } from '@auth0/cosmos'
import '@auth0/cosmos-fonts'

import Sidebar from './sidebar'
import Spec from './spec'
import Home from './home'
import GuidingPrinciples from './guiding-principles'
import Usage from './usage'
import ContributionGuide from './contribution-guide'
import SystemGuidelines from './system-guidelines'
import FAQS from './faqs'
import Changes from './changes'
import Overview from './overview'
import AutomationGlossary from './automation-glossary'
import Playground from './playground'
import Navigation from './docs-components/navigation'

const SideContent = styled.div`
  width: 19rem;
  position: fixed;
  height: calc(100vh - 80px);
  overflow-y: auto;
  transition: width 0.25s;

  @media (max-width: 800px) {
    width: ${props => (props.visible ? '19rem' : '0rem')};
    z-index: 2;
  }
`
const SidebarToggle = styled.div`
  padding: 16px;
  position: fixed;
  left: ${props => (props.sidebarVisible ? '19rem' : '0rem')};
  transition: left 0.25s;
  z-index: 3;

  &:hover {
    svg path {
      fill: ${props => (props.sidebarVisible ? '#E40002' : '#0a84ae')};
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
  ${'' /* make room for the fixed top navigation */};
`

class App extends React.Component {
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
      const hashParts = window.location.hash.split('#')
      if (hashParts.length > 2) {
        const hash = hashParts.slice(-1)[0]
        document.querySelector(`#${hash}`).scrollIntoView()
      } else {
        document.querySelector('nav').scrollIntoView()
      }
    }
    scrollToAnchor()
    window.onhashchange = scrollToAnchor
  }
  render() {
    return (
      <Router>
        <Layout>
          <Navigation />
          <SidebarToggle sidebarVisible={this.state.sidebarVisible} onClick={this.toggleSidebar}>
            <Icon name={this.state.sidebarVisible ? 'close' : 'arrow-right'} />
          </SidebarToggle>
          <SideContent visible={this.state.sidebarVisible}>
            <Sidebar />
          </SideContent>
          <MainContent id="main">
            <Body>
              <Route exact path="/guiding-principles" component={GuidingPrinciples} />
              <Route exact path="/system-guidelines" component={SystemGuidelines} />
              <Route path="/usage" component={Usage} />
              <Route exact path="/contribution-guide" component={ContributionGuide} />
              <Route exact path="/faqs" component={FAQS} />
              <Route exact path="/changes" component={Changes} />
              <Route exact path="/automation" component={AutomationGlossary} />
              <Route exact path="/playground" component={Playground} />
              <Route exact path="/component/:componentName" component={Spec} />
              <Route exact path="/" component={Home} />
            </Body>
            <Route exact path="/overview" component={Overview} />
          </MainContent>
        </Layout>
      </Router>
    )
  }
}

export default App
