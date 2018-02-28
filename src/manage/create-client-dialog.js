import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dialog, Form, Icon, Paragraph, Stack } from '../components'
import { colors, fonts, misc, spacing } from '../tokens'

const ClientTypeImages = {
  native: (
    <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M27.368 45H2.632A2.632 2.632 0 0 1 0 42.368V17.632A2.632 2.632 0 0 1 2.632 15h24.736A2.632 2.632 0 0 1 30 17.632v24.736A2.632 2.632 0 0 1 27.368 45"
          fill="#16214D"
        />
        <path
          d="M34.868 37.5H10.132A2.632 2.632 0 0 1 7.5 34.868V10.132A2.632 2.632 0 0 1 10.132 7.5h24.736a2.632 2.632 0 0 1 2.632 2.632v24.736a2.632 2.632 0 0 1-2.632 2.632"
          fill="#EC5424"
        />
        <path
          d="M42.368 30H17.632A2.632 2.632 0 0 1 15 27.368V2.632A2.632 2.632 0 0 1 17.632 0h24.736A2.632 2.632 0 0 1 45 2.632v24.736A2.632 2.632 0 0 1 42.368 30"
          fill="#44C7F4"
        />
      </g>
    </svg>
  ),
  non_interactive: (
    <svg viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
      <title>Group 2</title>
      <g fill="none" fillRule="evenodd">
        <path fill="#44C7F4" d="M8.446 26.337l-3.487-2L15.81 5.667l3.488 2z" />
        <path fill="#EC5424" d="M26.66 26.337L15.81 7.667l3.487-2 10.851 18.67z" />
        <path
          d="M24.272 6.667c0 3.682-3.005 6.666-6.711 6.666-3.707 0-6.711-2.984-6.711-6.666C10.85 2.985 13.854 0 17.56 0c3.706 0 6.711 2.985 6.711 6.667"
          fill="#16214D"
        />
        <path
          d="M13.422 25.333c0 3.682-3.004 6.667-6.71 6.667C3.004 32 0 29.015 0 25.333s3.005-6.666 6.711-6.666c3.707 0 6.711 2.984 6.711 6.666"
          fill="#EC5424"
        />
        <path
          d="M35.122 25.333c0-3.682-3.005-6.666-6.711-6.666-3.707 0-6.711 2.984-6.711 6.666 0 3.682 3.004 6.667 6.71 6.667 3.707 0 6.712-2.985 6.712-6.667"
          fill="#44C7F4"
        />
      </g>
    </svg>
  ),
  regular_web: (
    <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M33.498 3.04A23.149 23.149 0 0 0 22 0v15.112a7.716 7.716 0 0 1 3.833 1.013c3.666 2.086 4.922 6.707 2.805 10.32L41.915 34c6.35-10.84 2.582-24.701-8.417-30.96"
          fill="#16214D"
        />
        <path
          d="M22.5 0C10.074 0 0 10.148 0 22.666c0 4.129 1.096 8 3.011 11.334l12.993-7.556A7.563 7.563 0 0 1 15 22.666c0-4.173 3.358-7.556 7.5-7.556 4.142 0 7.5-3.382 7.5-7.555C30 3.383 26.642 0 22.5 0"
          fill="#EC5424"
        />
        <path
          d="M29.001 25.834a7.552 7.552 0 0 1-2.747 2.805c-3.59 2.117-8.179.86-10.25-2.805-2.073-3.666-6.662-4.922-10.25-2.806-3.59 2.117-4.82 6.805-2.747 10.47 6.216 10.999 19.983 14.767 30.75 8.417A22.655 22.655 0 0 0 42 33.5l-12.999-7.666z"
          fill="#44C7F4"
        />
        <path
          d="M31.75 35.994a7.499 7.499 0 1 1 7.5-12.988 7.499 7.499 0 0 1-7.5 12.988"
          fill="#16214D"
        />
      </g>
    </svg>
  ),
  spa: (
    <svg viewBox="0 0 45 47" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M18.008 23.5L31.515 0H13.506L0 23.5 13.506 47h18.009L18.008 23.5z"
          fill="#44C7F4"
        />
        <path
          d="M26.99 23.5L13.484 47h18.008l13.506-23.5L31.492 0H13.484L26.99 23.5z"
          fill="#EC5424"
        />
        <path
          d="M31.492 0H13.484l9.004 15.667L31.492 0zM13.484 47h18.008l-9.004-15.667L13.484 47z"
          fill="#16214D"
        />
      </g>
    </svg>
  )
}

const ClientType = props => (
  <ClientType.Element onClick={props.onClick} selected={props.selected}>
    <ClientType.Image>{props.image}</ClientType.Image>
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

ClientType.Image = styled.div`
  width: 64px;
  height: 64px;
  background: ${colors.base.grayLight};
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
        <Form layout="label-on-top">
          <Form.TextInput
            label="Name"
            description="You can change the client name later in the client settings."
            value={name}
          />
          <Form.FieldSet label="Choose a client type">
            <Stack alignVertical="top">
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
