import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Dialog, Form, Paragraph, Stack, ColumnLayout } from '@auth0/cosmos'
import { colors, misc, spacing } from '@auth0/cosmos/tokens'
import { StyledHeading } from '@auth0/cosmos/atoms/heading'

import ApplicationTypeImages from '../../components/application-types-images'

const ApplicationType = props => (
  <ApplicationType.Element onClick={props.onClick} selected={props.selected}>
    <ApplicationType.Image>{props.image}</ApplicationType.Image>
    <ApplicationType.Title>{props.name}</ApplicationType.Title>
    <ApplicationType.Description>{props.description}</ApplicationType.Description>
    <ApplicationType.Example>eg: {props.example}</ApplicationType.Example>
  </ApplicationType.Element>
)

const ApplicationStack = styled(Stack)`
  > * {
    margin-right: ${spacing.small};
  }
  > *:last-child {
    margin-right: 0;
  }
`

ApplicationType.Element = styled.a`
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

ApplicationType.Image = styled.div`
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

ApplicationType.Title = styled(StyledHeading[4])`
  margin: ${spacing.small} 0;
`

ApplicationType.Description = styled(Paragraph)`
  font-size: 13px;
  margin-top: 0;
`

ApplicationType.Example = styled.div`
  color: ${colors.text.subtle};
  font-size: 13px;
  line-height: ${misc.lineHeight};
`

class CreateApplicationDialog extends React.Component {
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
      <Dialog
        open={open}
        width={800}
        title="Create Application"
        actions={actions}
        onClose={onClose}
      >
        <Form layout="label-on-top">
          <Form.TextInput
            label="Name"
            helpText="You can change the application name later in the application settings."
            value={name}
          />

          <Form.FieldSet label="Choose a application type">
            <ColumnLayout distribution="1/4 1/4 1/4 1/4" gutter="condensed">
              <ApplicationType
                image={ApplicationTypeImages.native}
                name="Native App"
                description="Mobile or Desktop, an app that runs natively in a device."
                example="iOS SDK"
                onClick={this.setValue('type', 'native')}
                selected={type === 'native'}
              />
              <ApplicationType
                image={ApplicationTypeImages.spa}
                name="Single Page Web App"
                description="A JavaScript front-end app that uses an API."
                example="Angular.JS + NodeJS"
                onClick={this.setValue('type', 'spa')}
                selected={type === 'spa'}
              />
              <ApplicationType
                image={ApplicationTypeImages.regular_web}
                name="Regular Web App"
                description="Traditional web app (with refresh)."
                example="Java ASP.NET"
                onClick={this.setValue('type', 'regular_web')}
                selected={type === 'regular_web'}
              />
              <ApplicationType
                image={ApplicationTypeImages.non_interactive}
                name="Machine to Machine App"
                description="A CLI, Daemon, or Service running on your backend."
                example="Shell Script"
                onClick={this.setValue('type', 'non_interactive')}
                selected={type === 'non_interactive'}
              />
            </ColumnLayout>
          </Form.FieldSet>
        </Form>
      </Dialog>
    )
  }
}

CreateApplicationDialog.propTypes = {
  onClose: PropTypes.func.isRequired
}

export default CreateApplicationDialog
