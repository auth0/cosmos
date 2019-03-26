import React, { useContext } from "react"
import styled from "styled-components"
import { Context } from "../context/component-context"
import { colors } from "@auth0/cosmos/tokens"
import SearchBox from "./search.js"
import List from "./list"

const StyledSidebar = styled.div`
  background: ${colors.base.grayLightest};
  padding-bottom: calc(2rem + 80px);
`

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    /* by default, show all components */
    this.state = { filteredComponents: props.components, query: "" }
  }
  filter(query) {
    /* filter components based on search query */
    const filteredComponents = this.props.components.filter(component =>
      component.displayName.toLowerCase().includes(query.toLowerCase())
    )
    this.setState({ filteredComponents, query })
  }
  render() {
    return (
      <StyledSidebar>
        <SearchBox onChange={this.filter.bind(this)} />
        <List
          components={this.state.filteredComponents}
          query={this.state.query}
        />
      </StyledSidebar>
    )
  }
}

export default function() {
  const components = useContext(Context)
  return <Sidebar components={components} />
}
