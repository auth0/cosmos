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

export default () => (
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
          <Route exact path="/" component={Home} />
          <Route exact path="/component/:componentName" component={Spec} />
        </Body>
      </MainContent>
    </Layout>
  </Router>
)
