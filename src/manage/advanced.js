import React from 'react'
import { Form, Code, Well } from '../components'

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
        <Well>
          <Form>
            <Form.FieldSet label="Application Metadata">
              <p>
                Application metadata are custom string keys and values (max 255 characters each),
                set on a per application basis. Metadata is exposed in the Client object as{' '}
                <Code>client_metadata</Code>, and in Rules as <Code>context.clientMetadata</Code>
              </p>
            </Form.FieldSet>
          </Form>
        </Well>
        <Well>
          <Form>
            <Form.FieldSet label="iOS Settings">
              <Form.TextInput
                label="Team ID"
                type="text"
                placeholder="9JA89QQLNQ"
                description={
                  <span>
                    <a href="link">How to obtain a Team ID?</a>
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
                placeholder="D8:A0:83:..., D9:C1:B2:..."
                length="3"
                description="The SHA256 fingerprints of your app’s signing certificate. You can specify multiple key hashes by comma-separating them or one by line."
              />
            </Form.FieldSet>
            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
          </Form>
        </Well>

        <Well>
          <Form>
            <Form.FieldSet label="OAuth">
              <Form.TextArea
                label="Allowed APPs / APIs"
                placeholder="D8:A0:83:..., D9:C1:B2:..."
                length="3"
                description="Allowed Applications / APIs are clients that will be allowed to make delegation request. By default, all your clients will be allowed. This field allows you to enter specific client ids. You can specify multiple IDs by comma-separating them or one by line."
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
                description={
                  <span>
                    Clients flagged as OIDC Conformant will strictly follow the OIDC specification.
                    Turning on this flag can introduce breaking changes to this client. If you have
                    any questions you can <a href="link">contact support</a>.
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
            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
          </Form>
        </Well>
        <Well>
          <Form>
            <Form.FieldSet label="Grant Types">
              <p>
                Notification: Using Password or MFA grant types with public clients is not
                recommended. To use the Client Credentials grant you have to set a Token Endpoint
                Auth Method other than "none". See our documentation for more information.
              </p>
              <br />
              <p>Grants go here... </p>
            </Form.FieldSet>
          </Form>
        </Well>
        <Well>
          <Form>
            <Form.FieldSet label="WS-Federation">
              <p>Code block goes here...</p>

              <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
            </Form.FieldSet>
          </Form>
        </Well>
        <Well>
          <Form>
            <Form.FieldSet label="Certificates">
              <Form.TextArea
                label="Signing Certificate"
                code
                readOnly
                value="-----BEGIN CERTIFICATE-----
MIIDADCCAeigAwIBAgIJBplWRwBLlQgHMA0GCSqGSIb3DQEBBQUAMCcxJTAjBgNV
BAMTHGZlcm5hbmRvY2FycmV0dG9uaS5hdXRoMC5jb20wHhcNMTcwMTI3MjE0OTM1
WhcNMzAxMDA2MjE0OTM1WjAnMSUwIwYDVQQDExxmZXJuYW5kb2NhcnJldHRvbmku
YXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvW0PbOzi
7bmeTFRu/AQcSal0tLC6/o6x7pf5ti3oCa8QyS//yXP39mR5vlbQq42Bpt01TY9/
3jqtk1wU9UmXVuspX/pS3SbjnuB8l1efrQC845N8XhyHSWcd1cL9iNPF8ucAYfvl
uAMobs9j7s7T3cTHRVo1ffbRp0PN/u40uah6l1tUnzZuK3ZeAZqVWQi++yVHKyTi
Ff7n+A55IK2Tq2qLchspH6jd5/Wf92t9nBvKutaALRllKt3NLdtK/d+UKJ1AB+72
6XDEPiBD8lxfW/nGzQUkoiICjrhIvux5aCWzEs1uE4flQe11fSsNZroK6T6xXSEm
ClaQJhnbrGqlPQIDAQABoy8wLTAMBgNVHRMEBTADAQH/MB0GA1UdDgQWBBSgORhm
28ZObhg39mXLfVZrqik9rTANBgkqhkiG9w0BAQUFAAOCAQEAi2vPPBbms5oaZi4s
DOWpuETpIfRhlGuNxqA5B/sFjN7O7/bgCUY/f7Pvp/Vz5QSVjLpPOe59C69QDugk
y6h3UsjD2VbYhgErDLT2nfeAoDRSqtsZ74mDK48olBULhqf3E+aHN18lt7Y7F38a
nY1vfnps8ueZlsOxrJD+UPVjR66STjeQJNG9CZrDcK7L2KAd8OOtZSvrPgIG1VgP
i7e07/bY313KWhLLTf9x5awoYN0itSwU+Y5PZS7Zq8HcFO/q82bulQ2q5fgbLatd
X8CdcIKzC8FHsB5HtW2mKaqwsMTUJAVYI8nRse1UyYFataMtTVpTUWnsrX7xriuZ
KrYthg==
-----END CERTIFICATE-----"
                length="8"
              />
              <Form.TextInput
                label="Signing Certificate Fingerprint"
                type="text"
                code
                readOnly
                value="E0:78:98:F6:0B:45:42:34:A1:8E:55:BC:41:75:0D:71:BD:E7:D9:C9"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="Signing Certificate Fingerprint"
                type="text"
                code
                readOnly
                value="E0:78:98:F6:0B:45:42:34:A1:8E:55:BC:41:75:0D:71:BD:E7:D9:C9"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
            </Form.FieldSet>
            <Form.Actions
              primaryAction={{
                label: 'Download Certificate',
                method: this.save
              }}
            />
          </Form>
        </Well>
        <Well>
          <Form>
            <Form.FieldSet label="OAuth Endpoints">
              <Form.TextInput
                label="OAuth Authorization URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/authorize"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="OAuth Token URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/oauth/token"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="OAuth User Info URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/userinfo"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="OpenID Configuration"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/.well-known/openid-configuration"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="JSON Web Key Set"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/.well-known/jwks.json"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
            </Form.FieldSet>
            <Form.FieldSet label="SAML Endpoints">
              <Form.TextInput
                label="SAML Protocol URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/samlp/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="SAML Metadata URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/samlp/metadata/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
            </Form.FieldSet>
            <Form.FieldSet label="WS-Federations">
              <Form.TextInput
                label="WsFederation Metadata URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/wsfed/e4esSP93hcGXiuVAmtzSJfKiojt56QJr/FederationMetadata/2007-06/FederationMetadata.xml"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
              <Form.TextInput
                label="WsFederation Sign-in URL"
                type="text"
                readOnly
                value="https://mydomain.auth0.com/wsfed/e4esSP93hcGXiuVAmtzSJfKiojt56QJr"
                actions={[{ icon: 'copy', method: dummyFn }]}
              />
            </Form.FieldSet>
          </Form>
        </Well>
      </div>
    )
  }
}

export default Advanced
