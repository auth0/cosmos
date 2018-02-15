import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/button'
import Overlay from '../../atoms/overlay'
import Icon from '../../atoms/icon'
import DialogAction from './dialog-action'
import { colors, fonts, spacing } from '../../../tokens'

const createButtonForAction = action => {
  const buttonProps = {
    onClick: action.method,
    [action.appearance]: true
  }
  return <Button {...buttonProps}>{action.label}</Button>
}

const Dialog = props => (
  <Overlay {...props}>
    <DialogElement width={props.width}>
      <DialogTitleBar>
        <span>{props.title}</span>
        <Icon name="close" size="16" onClick={props.onClose} />
      </DialogTitleBar>
      <DialogBody>{props.children}</DialogBody>
      <DialogFooter>{props.actions.map(createButtonForAction)}</DialogFooter>
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

const DialogBody = styled.div`
  padding: ${spacing.medium} ${spacing.large};
`

const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing.xsmall};
  border-top: 1px solid ${colors.base.grayLight};
`

Dialog.Action = DialogAction
Dialog.Element = DialogElement

Dialog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.instanceOf(DialogAction)).isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number
}

Dialog.defaultProps = {
  width: 500
}

export default Dialog
