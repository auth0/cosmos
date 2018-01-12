import React from 'react'
import { Form, Code } from '../components'

let dummyFn = () => {}

class Settings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'API Explorer Client',
      domain: 'storezero.auth0.com',
      clientID: props.clientId,
      secret: 'asoidvsubdwfqeagwbviuyeaobvi'
    }
  }
  save() {}
  render() {
    return (
      <Form>
        <Form.TextInput
          label="Name"
          type="text"
          defaultValue="API Explorer Client"
          placeholder="Add name for client"
        />
        <Form.TextInput
          label="Domain"
          type="text"
          readOnly
          defaultValue={this.state.domain}
          actions={[{ icon: 'copy', method: dummyFn }]}
        />
        <Form.TextInput
          label="Client ID"
          type="text"
          readOnly
          defaultValue={this.state.clientID}
          actions={[{ icon: 'copy', method: dummyFn }]}
        />
        <Form.TextInput
          label="Client Secret"
          type="password"
          readOnly
          defaultValue={this.state.secret}
          actions={[
            { icon: 'copy', method: dummyFn },
            { icon: 'copy', method: dummyFn },
            { icon: 'copy', method: dummyFn }
          ]}
          description="The Client Secret is not base64 encoded."
        />

        <Form.TextArea
          label="Description"
          placeholder="Add a description in less than 140 charachters"
          description="A free text description of the client. Max charachter count is 140"
          length={10}
        />
        <Form.TextInput
          label="Client Logo"
          type="text"
          placeholder="http://path.to/my_logo.png"
          description="The URL of the logo to display for the client, if none is set the default badge for this type of client will be shown. Recommended size is 150x150 pixels."
        />
        <Form.Select
          label="Client Type"
          options={[
            { text: 'Native', value: 'native', defaultSelected: true },
            { text: 'Non Interactive Client', value: 'non-interactive' },
            { text: 'Regular Web Application', value: 'regular' },
            { text: 'Single Page Application', value: 'spa' }
          ]}
          description="The type of client will determine which settings you can configure from the dashboard."
        />

        <Form.Select
          label="Token Endpoint Authentication Method"
          options={[
            { text: 'None', value: 'none', defaultSelected: true },
            { text: 'Basic', value: 'basic' },
            { text: 'Post', value: 'post' }
          ]}
          description="Defines the requested authentication method for the token endpoint. Possible values are 'None' (public client without a client secret), 'Post' (client uses HTTP POST parameters) or 'Basic' (client uses HTTP Basic)."
        />

        <Form.TextArea
          label="Allowed Callback URLs"
          description="After the user authenticates we will only call back to any of these URLs. You can specify multiple valid URLs by comma-separating them (typically to handle different environments like QA or testing). Make sure to specify the protocol, `http://` or `https://`, otherwise the callback may fail in some cases."
        />
        <Form.TextArea
          label="Allowed Callback URLs"
          description={
            'Comma-separated list of allowed origins for use with Cross-Origin Authentication and web message response mode, in the form of `<scheme> "://" <host> [ ":" <port> ]`, such as `https://login.mydomain.com` or `http://localhost:3000`.'
          }
        />
        <Form.TextArea
          label="Allowed Logout URLs"
          description={
            <span>
              A set of URLs that are valid to redirect to after logout from Auth0. After a user logs
              out from Auth0 you can redirect them with the <Code>returnTo</Code> query parameter.
              The URL that you use in
              <Code>returnTo</Code> must be listed here. You can specify multiple valid URLs by
              comma-separating them. You can use the star symbol as a wildcard for subdomains
              ('*.google.com'). Notice that querystrings and hash information are not taking into
              account when validating these URLs. Read more about this at{' '}
              <a href="https://auth0.com/docs/logout">https://auth0.com/docs/logout</a>
            </span>
          }
        />
        <Form.TextArea
          label="Allowed Origins (CORS)"
          description="Allowed Origins are URLs that will be allowed to make requests from JavaScript to Auth0 API (typically used with CORS). By default, all your callback URLs will be allowed. This field allows you to enter other origins if you need to. You can specify multiple valid URLs by comma-separating them or one by line, and also use wildcards at the subdomain level (e.g.: `https://*.contoso.com`). Notice that querystrings and hash information are not taking into account when validating these URLs."
        />

        <Form.TextInput
          label="JWT Expiration"
          type="number"
          defaultValue="3600"
          description="Control the expiration of the id tokens (in seconds)"
        />

        <Form.Switch
          label="Use Auth0 instead of the IdP to do Single Sign On"
          description="If this setting is enabled, Auth0
            will handle Single Sign On instead of the Identity Provider (e.g.: No redirect to Facebook
            to log the user in if they have already logged in before)."
        />

        <Form.Actions
          primaryAction={{ label: 'Save Changes', method: this.save }}
          destructiveActions={[{ label: 'Delete Client', method: this.delete }]}
        />
      </Form>
    )
  }
}

export default Settings
