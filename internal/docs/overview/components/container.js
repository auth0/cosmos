import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  width: 95%;
`

export default (props) => <Container>{props.children}</Container>
