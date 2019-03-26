import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { Container } from "../component/live-code-block"
import * as Components from "@auth0/cosmos"
import styled from "@auth0/cosmos/styled"
import { Button, TextInput } from "@auth0/cosmos"

import AppLayout from "../layouts/app"
Components.styled = styled

const demoCode = `
/* you have access to all cosmos components here */

const Example = () => {
  return <Heading size={1}>Preview</Heading>
}

render(Example)
`

class Playground extends React.Component {
  constructor() {
    super()
    let initialCode

    this.state = { initialCode: demoCode }
  }

  componentDidMount() {
    if (window.location.search.includes("?code=")) {
      const encodedCode = window.location.search.split("?code=")[1]
      const initialCode = decodeURI(encodedCode).replace(/%0A/g, "\n")
      this.onChange(initialCode)
      this.setState({ initialCode })
    }
  }

  onChange = code => {
    const encodedCode = encodeURI(code.replace(/\n/g, "%0A"))
    this.setState({ encodedCode, url: null })
  }

  share = () => {
    const url =
      window.location.origin +
      window.location.pathname +
      "?code=" +
      this.state.encodedCode
    this.setState({ url })
  }
  render() {
    return (
      <AppLayout>
        <div>
          <Container>
            <LiveProvider
              code={this.state.initialCode}
              scope={Components}
              noInline={true}
            >
              <LivePreview />
              <LiveError />
              <LiveEditor onChange={this.onChange} />
            </LiveProvider>
          </Container>
          <Button appearance="primary" onClick={this.share}>
            Share
          </Button>
          <br />
          <br />

          {this.state.url && (
            <div>
              Share this url
              <TextInput autoFocus value={this.state.url} onChange={() => {}} />
            </div>
          )}
        </div>
      </AppLayout>
    )
  }
}

export default Playground
