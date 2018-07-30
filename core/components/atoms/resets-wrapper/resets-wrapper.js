import React from 'react'
import styled from 'styled-components'
import { componentResets } from '../../_helpers/globals'

const Wrapper = styled.div`
  ${componentResets};
`

const ResetsWrapper = props => <Wrapper>{props.children}</Wrapper>

export default ResetsWrapper
