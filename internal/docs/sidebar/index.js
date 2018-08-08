import React from 'react'
import styled from 'styled-components'

import { Logo } from '@auth0/cosmos'
import { colors } from '@auth0/cosmos/tokens'
import SearchBox from './search.js'
import List from './list'

/* import components from the generated metadata files */
import { metadata as components } from '@auth0/cosmos/meta/metadata.json'
import { version } from '@auth0/cosmos/package.json'

const StyledSidebar = styled.div`
  background: ${colors.base.grayLightest};
  height: 100vh;
  overflow: scroll;
  padding-bottom: 2rem;
`

const LogoContainer = styled.div`
  background-color: #222228;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 14px;
    letter-spacing: 1.4px;
    display: inline-block;
    color: ${colors.base.grayLightest};
    font-weight: 700;
    margin-left: 12px;
  }
`

class Sidebar extends React.Component {
  constructor() {
    super()
    /* by default, show all components */
    this.state = { filteredComponents: components }
  }
  filter(query) {
    /* filter components based on search query */
    const filteredComponents = components.filter(component =>
      component.displayName.toLowerCase().includes(query.toLowerCase())
    )
    this.setState({ filteredComponents })
  }
  render() {
    return (
      <StyledSidebar>
        <LogoContainer>
          <Logo />
          <h1>COSMOS v{version}</h1>
        </LogoContainer>
        <SearchBox onChange={this.filter.bind(this)} />
        <List components={this.state.filteredComponents} />
      </StyledSidebar>
    )
  }
}

export default Sidebar
