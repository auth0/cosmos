import React from 'react'
import { Form, Code, Link } from '@auth0/cosmos'

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
          actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
        />
        <Form.TextInput
          label="Client ID"
          type="text"
          code
          readOnly
          defaultValue={this.state.clientID}
          actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
        />
        <Form.TextInput
          label="Client Secret"
          type="password"
          masked
          defaultValue={this.state.secret}
          actions={[
            { icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' },
            { icon: 'rotate', handler: dummyFn, label: 'Rotate secret' }
          ]}
          helpText="The Client Secret is not base64 encoded."
        />

        <Form.TextArea
          label="Description"
          placeholder="Add a description in less than 140 characters"
          helpText="A free text description of the client. Max character count is 140."
          length={5}
        />
        <Form.TextInput
          label="Client Logo"
          type="text"
          placeholder="http://path.to/my_logo.png"
          helpText="The URL of the logo to display for the client, if none is set the default badge for this type of client will be shown. Recommended size is 150x150 pixels."
        />
        <Form.Select
          label="Client Type"
          options={[
            { text: 'Native', value: 'native', defaultSelected: true },
            { text: 'Non Interactive Client', value: 'non-interactive' },
            { text: 'Regular Web Application', value: 'regular' },
            { text: 'Single Page Application', value: 'spa' }
          ]}
          helpText="The type of client will determine which settings you can configure from the dashboard."
        />

        <Form.Select
          label="Token Endpoint Authentication handler"
          options={[
            { text: 'None', value: 'none' },
            { text: 'Basic', value: 'basic' },
            { text: 'Post', value: 'post', defaultSelected: true }
          ]}
          helpText="Defines the requested authentication handler for the token endpoint. Possible values are 'None' (public client without a client secret), 'Post' (client uses HTTP POST parameters) or 'Basic' (client uses HTTP Basic)."
        />

        <Form.TextArea
          label="Allowed Callback URLs"
          length={3}
          helpText={
            <span>
              After the user authenticates we will only call back to any of these URLs. You can
              specify multiple valid URLs by comma-separating them (typically to handle different
              environments like QA or testing). Make sure to specify the protocol,{' '}
              <Code>http://</Code> or <Code>https://</Code>, otherwise the callback may fail in some
              cases.
            </span>
          }
        />
        <Form.TextArea
          label="Allowed Callback URLs"
          helpText={
            <span>
              Comma-separated list of allowed origins for use with Cross-Origin Authentication and
              web message response mode, in the form of{' '}
              <Code>&lt;scheme> "://" &lt;host> [ ":" &lt;port> ]</Code>, such as{' '}
              <Code>https://login.mydomain.com</Code> or <Code>http://localhost:3000</Code>.
            </span>
          }
          length={3}
        />
        <Form.TextArea
          label="Allowed Logout URLs"
          helpText={
            <span>
              A set of URLs that are valid to redirect to after logout from Auth0. After a user logs
              out from Auth0 you can redirect them with the <Code>returnTo</Code> query parameter.
              The URL that you use in
              <Code>returnTo</Code> must be listed here. You can specify multiple valid URLs by
              comma-separating them. You can use the star symbol as a wildcard for subdomains
              ('*.google.com'). Notice that querystrings and hash information are not taking into
              account when validating these URLs. Read more about this at{' '}
              <Link target="_blank" href="https://auth0.com/docs/logout">
                https://auth0.com/docs/logout
              </Link>
            </span>
          }
          length={3}
        />
        <Form.TextArea
          label="Allowed Origins (CORS)"
          length={3}
          helpText={
            <span>
              Allowed Origins are URLs that will be allowed to make requests from JavaScript to
              Auth0 API (typically used with CORS). By default, all your callback URLs will be
              allowed. This field allows you to enter other origins if you need to. You can specify
              multiple valid URLs by comma-separating them or one by line, and also use wildcards at
              the subdomain level (e.g.: <Code>https://*.contoso.com</Code>). Notice that
              querystrings and hash information are not taking into account when validating these
              URLs.
            </span>
          }
        />

        <Form.TextInput
          label="JWT Expiration"
          type="number"
          defaultValue="3600"
          helpText="Control the expiration of the id tokens (in seconds)"
        />

        <Form.Switch
          label="Use Auth0 instead of the IdP to do Single Sign On"
          helpText="If this setting is enabled, Auth0
            will handle Single Sign On instead of the Identity Provider (e.g.: No redirect to Facebook
            to log the user in if they have already logged in before)."
        />

        <Form.Actions primaryAction={{ label: 'Save Changes', handler: this.save }} />
      </Form>
    )
  }
}

export default Settings
