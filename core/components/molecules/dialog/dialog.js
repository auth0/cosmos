import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Overlay from '../../atoms/_overlay'
import Icon from '../../atoms/icon'
import Link from '../../atoms/link'
import DialogFooter from './footer'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'

const Dialog = props => (
  <Overlay {...props}>
    <DialogElement width={props.width}>
      <DialogTitleBar>
        <span>{props.title}</span>
        <Link onClick={props.onClose}>
          <Icon name="close" size={16} />
        </Link>
      </DialogTitleBar>
      {props.children}
    </DialogElement>
  </Overlay>
)

const DialogElement = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.width}px;
  background: ${colors.base.white};
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`

const DialogTitleBar = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  padding: ${spacing.small};
  padding-bottom: 0;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.medium};
  text-align: center;
  span {
    flex: 1;
  }
  & ${Icon.Element} {
    flex: none;
    cursor: pointer;
  }
`

const DialogBody = styled.div`
  padding: ${spacing.medium} ${spacing.large};
`

Dialog.Body = DialogBody
Dialog.Element = DialogElement
Dialog.Footer = DialogFooter

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  width: 500
}

export default Dialog
