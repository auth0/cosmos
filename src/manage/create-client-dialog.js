import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dialog, Form, Icon, Paragraph, Stack } from '../components'
import { colors, fonts, misc, spacing } from '../tokens'

const ClientType = props => (
  <ClientType.Element onClick={props.onClick} selected={props.selected}>
    <span>
      <Icon name={props.icon} size={64} />
    </span>
    <ClientType.Title>{props.name}</ClientType.Title>
    <Paragraph>{props.description}</Paragraph>
    <ClientType.Example>eg: {props.example}</ClientType.Example>
  </ClientType.Element>
)

ClientType.Element = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  height: 310px;
  cursor: pointer;
  padding: ${spacing.medium};
  margin-right: 10px;
  border: 1px solid ${props => (props.selected ? colors.base.blueLight : colors.base.grayLight)};
  border-radius: 3px;
  transition: background ${misc.animationDuration} ease;
  &:hover {
    background: ${colors.base.grayLightest};
  }
`

ClientType.Title = styled.div`
  font-weight: ${fonts.weight.medium};
  margin: ${spacing.small} 0;
`

ClientType.Example = styled.div`
  color: ${colors.text.subtle};
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

    const actions = [
      new Dialog.Action('Create', onClose, 'primary'),
      new Dialog.Action('Cancel', onClose)
    ]

    return (
      <Dialog open={open} width={800} title="Create Client" actions={actions} onClose={onClose}>
        <Form layout="flexible">
          <Form.TextInput
            label="Name"
            description="You can change the client name later in the client settings."
            value={name}
          />
          <Form.FieldSet label="Choose a client type">
            <Stack alignVertical="top">
              <ClientType
                icon="help"
                name="Native"
                description="Mobile or Desktop, apps that run natively in a device."
                example="iOS SDK"
                onClick={this.setValue('type', 'native')}
                selected={type === 'native'}
              />
              <ClientType
                icon="help"
                name="Single Page Web Applications"
                description="A JavaScript front-end app that uses an API."
                example="Angular.JS + NodeJS"
                onClick={this.setValue('type', 'spa')}
                selected={type === 'spa'}
              />
              <ClientType
                icon="help"
                name="Regular Web Applications"
                description="Traditional web app (with refresh)."
                example="Java ASP.NET"
                onClick={this.setValue('type', 'regular_web')}
                selected={type === 'regular_web'}
              />
              <ClientType
                icon="help"
                name="Non-Interactive Clients"
                description="CLI, Daemons or Services running on your backend."
                example="Shell Script"
                onClick={this.setValue('type', 'non_interactive')}
                selected={type === 'non_interactive'}
              />
            </Stack>
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
