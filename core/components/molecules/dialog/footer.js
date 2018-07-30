import React from 'react'
import styled from 'styled-components'

import { colors, spacing } from '@auth0/cosmos-tokens'
import { ButtonGroup } from '@auth0/cosmos'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing.small} 0;
  border-top: 1px solid ${colors.base.grayLight};
`

const DialogFooter = props => {
  return (
    <Container>
      <ButtonGroup>{props.children}</ButtonGroup>
    </Container>
  )
}

export default DialogFooter
