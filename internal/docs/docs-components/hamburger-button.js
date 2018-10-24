import React from 'react'
import styled from 'styled-components'

const MobileButton = styled.button`
  align-self: center;
  background-color: transparent;
  border: 0;
  display: none;
  height: 18px;
  padding: 0;
  position: relative;
  width: 26px;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  @media (max-width: 960px) {
    display: block;

    .icon-bar {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      right: 0;
      background-color: #FFFFFF;
      transition: .25s ease-in-out;
      border-radius: 1px;
    }

    .icon-bar:nth-of-type(2) {
      top: 0;
    }

    .icon-bar:nth-of-type(3),
    .icon-bar:nth-of-type(4) {
      top: 50%;
      transform: translateY(-50%);
    }

    .icon-bar:nth-of-type(5) {
      top: calc(100% - 2px);
    }

    &.is-open .icon-bar:nth-of-type(2),
    &.is-open .icon-bar:nth-of-type(5) {
      opacity: 0;
    }

    &.is-open .icon-bar:nth-of-type(3) {
      transform: rotate(45deg);
    }

    &.is-open .icon-bar:nth-of-type(4) {
      transform: rotate(-45deg);
    }
  }
`

const HamburgerButton = ({ isOpen, onClick }) => (
  <MobileButton
    className={`${isOpen ? 'is-open' : 'is-closed'}`}
    onClick={() => onClick()}
    type="button">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </MobileButton>
)

export default HamburgerButton
