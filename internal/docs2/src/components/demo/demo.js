import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: red;
  height: 100px;
  width: 100%;
`

const Demo = ({ children }) => <Wrapper>{children}</Wrapper>

export default Demo
