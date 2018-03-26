import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Sidebar from './sidebar'
import Spec from './spec'
import GettingStarted from './pages/getting-started'
import GuidingPrinciples from './pages/guiding-principles'
import ContributionGuide from './pages/contribution-guide'
import FAQS from './pages/faqs'

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
          <Switch>
            <Route path="/docs/guiding-principles" component={GuidingPrinciples} />
            <Route path="/docs/contribution-guide" component={ContributionGuide} />
            <Route path="/docs/faqs" component={FAQS} />
            <Route path="/docs/:componentName" component={Spec} />
            <Route component={GettingStarted} />
          </Switch>
        </Body>
      </MainContent>
    </Layout>
  </Router>
)
