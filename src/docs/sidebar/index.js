import React from 'react'
import styled from 'styled-components'

import { colors } from '../../tokens'
import LogoContainer from './logo'
import SearchBox from './search.js'
import List from './list'

/* import components from the generated metadata files */
import { metadata as components } from '../metadata.json'
import documentations from '../docs-loader'

const documentedComponentNames = documentations.map(docs => docs.name)
const documentedComponents = components.filter(component =>
  documentedComponentNames.includes(component.displayName)
)

console.log(documentedComponents)

const StyledSidebar = styled.div`
  background: ${colors.grayLightest};
  height: 100vh;
  overflow: scroll;
`

class Sidebar extends React.Component {
  constructor() {
    super()
    /* by default, show all components */
    this.state = { filteredComponents: documentedComponents }
  }
  filter(query) {
    /* filter components based on search query */
    const filteredComponents = documentedComponents.filter(component =>
      component.displayName.includes(query)
    )
    this.setState({ filteredComponents })
  }
  render() {
    return (
      <StyledSidebar>
        <LogoContainer />
        <SearchBox onChange={this.filter.bind(this)} />
        <List components={this.state.filteredComponents} />
      </StyledSidebar>
    )
  }
}

export default Sidebar
