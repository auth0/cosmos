import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, misc } from '../../tokens/'

const StyledContainer = styled.div`
  max-width: 1064px;
  margin: 0 auto;
`

const Container = props => {
  /* you can pass on all the props to the component like this */
  return <StyledContainer {...props}>{props.children}</StyledContainer>
}

Container.propTypes = {}

Container.defaultProps = {}

export default Container
