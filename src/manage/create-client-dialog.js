import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Dialog, Form, Icon, Paragraph, Stack } from '../components'
import { colors, fonts, misc, spacing } from '../tokens'

import ClientTypeImages from './client-types-images'

const ClientType = props => (
  <ClientType.Element onClick={props.onClick} selected={props.selected}>
    <ClientType.Image>{props.image}</ClientType.Image>
    <ClientType.Title>{props.name}</ClientType.Title>
    <ClientType.Description>{props.description}</ClientType.Description>
    <ClientType.Example>eg: {props.example}</ClientType.Example>
  </ClientType.Element>
)

// TODO: Figure out how to apply :focus kind of styles with this element. also we could use the same tokens as the Input field.

// TODO: How to have a bunch of styles applied when prop.selected?

const ClientStack = styled(Stack)`
  > * {
    margin-right: ${spacing.small};
  }
  > *:last-child {
    margin-right: 0;
  }
`

ClientType.Element = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  cursor: pointer;
  height: 310px;
  padding: ${spacing.medium};
  transition: border-color ${misc.animationDuration}, box-shadow ${misc.animationDuration};
  border-radius: 3px;
  border: 1px solid;
  border-color: ${props => (props.selected ? colors.base.blueLight : colors.base.grayLight)};
  &:hover {
    border-color: ${colors.input.borderHover};
  }
  ${props => (props.selected ? SelectedStyles : null)};
`

const SelectedStyles = css`
  border-color: ${colors.input.borderFocus};
  box-shadow: 0px 0px 0 1px ${colors.input.borderFocus};
  outline: none;
  &:hover {
    border-color: ${colors.input.borderFocus};
  }
`

ClientType.Image = styled.div`
  width: 64px;
  height: 64px;
  background: #f1f1f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  svg {
    height: 36px;
    width: 36px;
  }
`

ClientType.Title = styled.div`
  font-weight: ${fonts.weight.medium};
  margin: ${spacing.small} 0;
`

ClientType.Description = styled(Paragraph)`
  font-size: 13px;
`

ClientType.Example = styled.div`
  color: ${colors.text.subtle};
  font-size: 13px;
  line-height: ${misc.lineHeight};
`

class CreateClientDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: 'My App', type: 'native' }
  }

  setValue = (name, value) => () => {
    this.setState({ [name]: value })
  }

  render() {
    const { open, onClose } = this.props
    const { name, type } = this.state

    const actions = [new Dialog.Action('Create', onClose, 'primary')]

    return (
      <Dialog open={open} width={800} title="Create Client" actions={actions} onClose={onClose}>
        <Form layout="label-on-top">
          <Form.TextInput
            label="Name"
            description="You can change the client name later in the client settings."
            value={name}
          />

          <Form.FieldSet label="Choose a client type">
            <ClientStack alignVertical="top">
              <ClientType
                image={ClientTypeImages.native}
                name="Native"
                description="Mobile or Desktop, apps that run natively in a device."
                example="iOS SDK"
                onClick={this.setValue('type', 'native')}
                selected={type === 'native'}
              />
              <ClientType
                image={ClientTypeImages.spa}
                name="Single Page Web Applications"
                description="A JavaScript front-end app that uses an API."
                example="Angular.JS + NodeJS"
                onClick={this.setValue('type', 'spa')}
                selected={type === 'spa'}
              />
              <ClientType
                image={ClientTypeImages.regular_web}
                name="Regular Web Applications"
                description="Traditional web app (with refresh)."
                example="Java ASP.NET"
                onClick={this.setValue('type', 'regular_web')}
                selected={type === 'regular_web'}
              />
              <ClientType
                image={ClientTypeImages.non_interactive}
                name="Non-Interactive Clients"
                description="CLI, Daemons or Services running on your backend."
                example="Shell Script"
                onClick={this.setValue('type', 'non_interactive')}
                selected={type === 'non_interactive'}
              />
            </ClientStack>
          </Form.FieldSet>
        </Form>
      </Dialog>
    )
  }
}

CreateClientDialog.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default CreateClientDialog
