import React from 'react'
import { Text, Form, Code } from '../components'

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
        <Form>
          <Form.FieldSet label="Application Metadata">
            <Text>
              Application metadata are custom string keys and values (max 255 characters each), set
              on a per application basis. Metadata is exposed in the Client object as
              client_metadata, and in Rules as context.clientMetadata
            </Text>
            <Form>
              <Form.TextInput
                label="Key"
                type="code"
                defaultValue=""
                placeholder="Key"
                description={<span>8 metadata slots available</span>}
              />
              <Form.TextInput label="Value" type="code" defaultValue="" placeholder="Value" />
            </Form>
            {/* TO-DO: Inline form */}
            {/* TO-DO: Table */}
          </Form.FieldSet>
        </Form>
        <Form>
          <Form.FieldSet label="iOS Settings">
            <Form.TextInput
              label="Team ID"
              type="text"
              defaultValue=""
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
              defaultValue=""
              placeholder="com.my.autho.bundle"
            />

            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />

            {/* TO-DO: Add gray background for form */}
            {/* TO-DO: This could be default 'form actions' (no line and margins)? */}
          </Form.FieldSet>
        </Form>
        <Form>
          <Form.FieldSet label="Android Settings">
            <Form.TextInput
              label="App Package Name"
              type="text"
              defaultValue=""
              placeholder="com.example"
            />
            <Form.TextArea
              label="Key Hashes"
              defaultValue=""
              placeholder="D8:A0:83:..., D9:C1:B2:..."
              length="3"
              description="The SHA256 fingerprints of your app’s signing certificate. You can specify multiple key hashes by comma-separating them or one by line."
            />

            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
          </Form.FieldSet>
        </Form>

        <Form>
          <Form.FieldSet label="Android Settings">
            <Form.TextInput
              label="App Package Name"
              type="text"
              defaultValue=""
              placeholder="com.example"
            />
            <Form.TextArea
              label="Key Hashes"
              defaultValue=""
              placeholder="D8:A0:83:..., D9:C1:B2:..."
              length="3"
              description="The SHA256 fingerprints of your app’s signing certificate. You can specify multiple key hashes by comma-separating them or one by line."
            />

            <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
          </Form.FieldSet>
        </Form>

        {/* TO-DO: Keep adding content */}
      </div>
    )
  }
}

export default Advanced
