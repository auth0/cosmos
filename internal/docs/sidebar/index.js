import React from 'react'
import styled from 'styled-components'

import { colors } from '@auth0/cosmos/tokens'
import SearchBox from './search.js'
import List from './list'

/* import components from the generated metadata files */
import { metadata as components } from '@auth0/cosmos/meta/metadata.json'

const StyledSidebar = styled.div`
  background: ${colors.base.grayLightest};
  height: 100vh;
  overflow: scroll;
  padding-bottom: 2rem;
  border-right: 1px solid ${colors.base.grayLightest};
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
        <SearchBox onChange={this.filter.bind(this)} />

        <List components={this.state.filteredComponents} />
      </StyledSidebar>
    )
  }
}

export default Sidebar
