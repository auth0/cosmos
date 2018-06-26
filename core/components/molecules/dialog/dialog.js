import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Overlay from '../../atoms/overlay'
import Icon from '../../atoms/icon'
import Link from '../../atoms/link'
import DialogAction from './dialog-action'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'

const createButtonForAction = (action, index) => {
  const buttonProps = {
    onClick: action.handler,
    appearance: action.appearance
  }
  return (
    <Button key={index} {...buttonProps}>
      {action.label}
    </Button>
  )
}

const Dialog = props => (
  <Overlay {...props}>
    <DialogElement width={props.width}>
      <DialogTitleBar>
        <span>{props.title}</span>
        <Link onClick={props.onClose}>
          <Icon name="close" size={16} />
        </Link>
      </DialogTitleBar>
      <DialogBody>{props.children}</DialogBody>
      <DialogFooter>
        <ButtonGroup>{props.actions.map(createButtonForAction)}</ButtonGroup>
      </DialogFooter>
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

const DialogFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: ${spacing.small};
  border-top: 1px solid ${colors.base.grayLight};
`

Dialog.Action = DialogAction
Dialog.Element = DialogElement

Dialog.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.instanceOf(DialogAction)).isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  width: 500
}

export default Dialog
