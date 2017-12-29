import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading3, Subheader } from '../components'

const Container = styled.div`
  height: 100vh;
`

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading3>Docs</Heading3>
          <Subheader>Select a component from the sidebar</Subheader>
        </Container>
      </div>
    )
  }
}

export default Home
