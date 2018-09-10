import React from 'react'
import styled from '@auth0/cosmos/styled'

const StyledContainer = styled.div`
  max-width: 1034px;
  margin: 0 auto;
`

const Container = props => {
  /* you can pass on all the props to the component like this */
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

Container.propTypes = {}

Container.defaultProps = {}

export default Container
