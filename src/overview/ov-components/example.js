import React from 'react'
import styled from 'styled-components'

import { Stack } from '../../components'

const Title = styled.div`
  position: absolute;
  font-family: 'Roboto Mono';
  font-size: 12px;
  color: rgb(168, 168, 168);
  top: 1.5em;
  left: 2em;
`

const Example = styled.div`
  background-color: white;
  padding: 4.5rem 3rem 3rem 3rem;
  position: relative;
  border: 1px solid rgb(236, 236, 236);
  margin-bottom: 1rem;
  border-radius: 3px;
  &.align-center {
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
  }
`

export default props => (
  <Example className={props.align == 'center' ? 'align-center' : null}>
    <Title>{props.title}</Title>
    {props.children}
  </Example>
)
