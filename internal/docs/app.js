import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import Sidebar from './sidebar'
import Spec from './spec'
import Home from './home'
import GuidingPrinciples from './guiding-principles'
import ContributionGuide from './contribution-guide'
import FAQS from './faqs'
import Changes from './changes'

const Layout = styled.div`
  position: relative;
  width: 100%;
`

const SideContent = styled.div`
  width: 19rem;
  position: fixed;
`

const MainContent = styled.div`
  padding-left: 19rem;
  padding-bottom: 4rem;
`

const Body = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.1rem 1.05rem;
`

class App extends React.Component {
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
      }
    }
    scrollToAnchor()
    window.onhashchange = scrollToAnchor
  }
  render() {
    return (
      <Router>
        <Layout>
          <SideContent>
            <Sidebar />
          </SideContent>
          <MainContent>
            <Body>
              <Route exact path="/guiding-principles" component={GuidingPrinciples} />
              <Route exact path="/contribution-guide" component={ContributionGuide} />
              <Route exact path="/faqs" component={FAQS} />
              <Route exact path="/changes" component={Changes} />
              <Route exact path="/component/:componentName" component={Spec} />
              <Route exact path="/" component={Home} />
            </Body>
          </MainContent>
        </Layout>
      </Router>
    )
  }
}

export default App
