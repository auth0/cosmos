import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Overlay from '../../atoms/overlay'
import Icon from '../../atoms/icon'
import { colors, fonts, spacing } from '../../../tokens'

const Dialog = props => (
  <Overlay {...props}>
    <Dialog.Element width={props.width}>
      <Dialog.TitleBar>
        <span>{props.title}</span>
        <Icon onClick={props.onClose} />
      </Dialog.TitleBar>
      {props.children}
    </Dialog.Element>
  </Overlay>
)

Dialog.Element = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.width}px;
  background: ${colors.base.white};
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`

Dialog.TitleBar = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  padding: ${spacing.small};
  padding-bottom: 0;
  font-weight: ${fonts.weight.bold};
  text-align: center;
  span {
    flex: 1;
  }
  & ${Icon.Element} {
    flex: none;
    cursor: pointer;
  }
`

Dialog.Body = styled.div`
  padding: ${spacing.medium} ${spacing.large};
`

Dialog.Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing.xsmall};
  border-top: 1px solid ${colors.base.grayLight};
`

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number
}

Dialog.defaultProps = {
  width: 500
}

export default Dialog
