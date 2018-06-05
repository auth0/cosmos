import React from 'react'
import { FormGroup, Form, Link } from '@auth0/cosmos'

let dummyFn = () => {}

class Advanced extends React.Component {
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
      <div>
        <FormGroup>
          <Form>
            <Form.FieldSet label="iOS Settings">
              <Form.TextInput
                label="Team ID"
                type="text"
                code
                placeholder="9JA89QQLNQ"
                helpText={
                  <span>
                    <Link
                      target="_blank"
                      href="https://developer.apple.com/membercenter/index.action#accountSummary"
                    >
                      How to obtain a Team ID?
                    </Link>
                  </span>
                }
              />
              <Form.TextInput
                label="App bundle identifier"
                type="text"
                placeholder="com.my.autho.bundle"
              />
            </Form.FieldSet>
            <Form.FieldSet label="Android Settings">
              <Form.TextInput label="App Package Name" type="text" placeholder="com.example" />
              <Form.TextArea
                label="Key Hashes"
                code
                placeholder="D8:A0:83:..., D9:C1:B2:..."
                length="3"
                helpText="The SHA256 fingerprints of your app’s signing certificate. You can specify multiple key hashes by comma-separating them or one by line."
              />
            </Form.FieldSet>
            <Form.Actions primaryAction={{ label: 'Save Changes', handler: this.save }} />
          </Form>

          <Form>
            <Form.FieldSet label="OAuth">
              <Form.TextArea
                label="Allowed APPs / APIs"
                placeholder=""
                length="3"
                helpText="Allowed Applications / APIs are clients that will be allowed to make delegation request. By default, all your clients will be allowed. This field allows you to enter specific Client IDs. You can specify multiple IDs by comma-separating them or one by line."
              />

              <Form.Select
                label="JsonWebToken Signature Algorithm"
                readOnly
                options={[
                  { text: 'RS256', value: '1', defaultSelected: true },
                  { text: 'Second option', value: '2' },
                  { text: 'Third option', value: '3' },
                  { text: 'Fourth option', value: '4' }
                ]}
              />
              <Form.Switch
                label="OIDC Conformant"
                on
                helpText={
                  <span>
                    Clients flagged as OIDC Conformant will strictly follow the OIDC specification.
                    Turning on this flag can introduce breaking changes to this client. If you have
                    any questions you can{' '}
                    <Link target="_blank" href="https://support.auth0.com">
                      contact support
                    </Link>.
                  </span>
                }
              />
              <Form.TextInput
                label="Cross-Origin Verification Fallback"
                type="text"
                placeholder="https://domain.tld/path"
                description="Location URL for the page that will be rendered inside an iframe to perform the token verification when third party cookies are not enabled in the browser. Must be in the same domain where the embedded login form is hosted and must have a `https` scheme."
              />
            </Form.FieldSet>
            <Form.Actions primaryAction={{ label: 'Save Changes', handler: this.save }} />
          </Form>

          <Form>
            <Form.FieldSet label="Certificates">
              <Form.TextArea
                label="Signing Certificate"
                code
                readOnly
                value="-----BEGIN DUMMY CERTIFICATE-----
                HtW46whaHcTejeUnjyQFn6vwmPsSpzvNJWWUr8xbKk8FkWwXN9Ub9tkQ4Ec2NLq6hcsKySZ3bbjg6MjSE3bGN4YTEynMG4EP5EadUj68sBNzedt96Lmg8HyGevXsByTK6vfWnXPFDdXSjrujEdVBb5zPFM9wCJRcw86CUZN3BgpwUvnCKrMJaQUEU2f6YEFP9BpyrbedEM6jB8H4VEh4pkrfm2A5vLHPLM4saepv3dHtkY8bYKTs3d3Zpk7uVtrU8JjFkhygQ9YcB86GtT649FVZjcFuHHP9F5JwAvwhmekQjGQRtM7cgF2d2J4kYTp4j59c4DedDmHQCwhFgGmNdQqGNMtnhhRbZLqrt2k9QgTA5wG9zZUyH4Ab8yW7qpyJN29AzYVb7ZBKgun7tgNYzq6bbnByvTB7AtMqRheS789njTpYVjxgQ5WwjRKbBGa3SJsMscfrH9P4ncKAQBQzMtYzZuP6qwqCxUfYVXU73k24ejgmFNnsczBe6txdnJWSuNnvL5ZvR2kRCBsL7vakax3TNVRyvWhCxu9EeVb7xhyemhZFjmTBsqtJ6uJ56YSQxfWBWM5wzJTy62xv2F4wgV3TBKDyEbxzdgj785kAC5ZUs4eVZtT2gF9z9tAxJx38FmFRBvV556vEdjwNhQNXWht6MBBmKt3bmgHhEGuw3kjATYCRqY6y5XSUS6eKSGkZnDN44pTFDHZJkXjhjUQE7nVb5PFQ9Tm2pY3NBfVMj7gR4vxVYuB6sTw75RnFYPcfTNhDzKaLudau3bDSVDh5hNeTgpBKWfPuTs5Z5LS6sULdWuH6ZDVrSXyM9EyYdGnBkHvZAgc3T5w2Vev4wkWtfnpDChEJjSM3g6znP5NZtuFbYy3GFSgNt3VswfTdBE8pgK4YkAeGwnFpZDDpcRKErFvpuPZfHg436HvLTZ9BHFvKuQWxr5CdZGUK4fehR2fuWxaJrRWTUWUr469xpqqQSAFRJEgyMmjwfrNkADxugZF7fA6dwXSAd7GRSGumYUgT
                -----END DUMMY CERTIFICATE-----"
                length="8"
              />
              <Form.TextInput
                label="Signing Certificate Fingerprint"
                type="text"
                code
                readOnly
                value="L0:O8:R8:E6:MB:I5:P2:S4:U1:ME:D5:OC:L1:O5:RD:E1:SD:T7:D9:C9"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="Signing Certificate Fingerprint"
                type="text"
                code
                readOnly
                value="L0:O8:R8:E6:MB:I5:P2:S4:U1:ME:D5:OC:L1:O5:RD:E1:SD:T7:D9:C9"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
            </Form.FieldSet>
            <Form.Actions
              primaryAction={{
                label: 'Download Certificate',
                handler: this.save
              }}
            />
          </Form>

          <Form>
            <Form.FieldSet label="OAuth Endpoints">
              <Form.TextInput
                label="OAuth Authorization URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/authorize"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="OAuth Token URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/oauth/token"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="OAuth User Info URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/userinfo"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="OpenID Configuration"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/.FormGroup-known/openid-configuration"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="JSON Web Key Set"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/.FormGroup-known/jwks.json"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
            </Form.FieldSet>
            <Form.FieldSet label="SAML Endpoints">
              <Form.TextInput
                label="SAML Protocol URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/samlp/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="SAML Metadata URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/samlp/metadata/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
            </Form.FieldSet>
            <Form.FieldSet label="WS-Federations">
              <Form.TextInput
                label="WsFederation Metadata URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/wsfed/e4esSP93hcGXiuVAmtzSJfKiojt56QJr/FederationMetadata/2007-06/FederationMetadata.xml"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
              <Form.TextInput
                label="WsFederation Sign-in URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/wsfed/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', handler: dummyFn, label: 'Copy to clipboard' }]}
              />
            </Form.FieldSet>
          </Form>
        </FormGroup>
      </div>
    )
  }
}

export default Advanced
