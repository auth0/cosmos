import React from 'react'
import { storiesOf } from '@storybook/react'

import { colors } from '@auth0/cosmos-tokens'
import { Stack } from '@auth0/cosmos'
import styled, { css } from '@auth0/cosmos/styled'

const borderStyles = css`
  border: 2px solid black;
`

const Box = styled.div`
  width: 50px;
  height: 50px;
  /* understands tokens */
  color: ${colors.base.white};
  /* understands props */
  background: ${props => colors.base[props.bg] || '#ccc'};
  /* css helper works */
  ${borderStyles};
`

/* extend works */
const TallBox = Box.extend`
  height: 200px;
`

/* styled wrapper works */
const ShortBox = styled(Box)`
  height: 20px;
`

/* withComponent works */
const InputBox = Box.withComponent('input').extend`
  :hover {
    background: #fff;
  }
`

const PasswordBox = styled('input').attrs({ type: 'password' })``
const ExtendedPasswordBox = styled(InputBox).attrs({ type: 'password' })``

storiesOf('Component', module).add('default', () => (
  <Stack>
    <Box />
    <Box bg="blue" />
    <TallBox bg="blue" />
    <ShortBox bg="blue" />
    <InputBox bg="blue" defaultValue="okay" />
    <PasswordBox bg="blue" defaultValue="okay" />
    <ExtendedPasswordBox bg="blue" defaultValue="okay" />
  </Stack>
))
