import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'
import components from '../pages/_components'

const Navigation = styled.div`
  height: 100vh;
  position: fixed;
  background: #c1ffe8;
  width: 10%;

  & a {
    display: block;
    text-decoration: none;
    color: #215c44;
    padding: 10px 20px;
  }

  & a:hover {
    color: #00a182;
  }

  & a.active {
    color: #00a182;
  }

  @media screen and (max-width: 699px) {
    & {
      width: 100%;
      z-index: 2;
      position: relative;
      height: ${props => (props.open ? '100vh' : '175px')};
      overflow: hidden;
    }
  }
`

const Down = styled.div`
  text-align: center;
  color: #00a182;
  font-size: 12px;
  &:after {
    content: '▼';
  }
  display: none;
  @media screen and (max-width: 699px) {
    display: block;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  toggle() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <Navigation open={this.state.open} onClick={this.toggle.bind(this)}>
        <Header condensed />
        {!this.state.open && <Down />}
        {components.map(component =>
          <NavLink key={component.name} to={`/${component.name.toLowerCase()}`}>
            {component.name}
          </NavLink>
        )}
      </Navigation>
    )
  }
}
