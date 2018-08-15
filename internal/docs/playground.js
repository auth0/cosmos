import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { Container } from './spec/playground'
import * as Components from '@auth0/cosmos'
import styled, { injectGlobal } from '@auth0/cosmos/styled'
import { Button, TextInput } from '@auth0/cosmos'

Components.styled = styled
Components.injectGlobal = injectGlobal

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
    if (window.location.hash.includes('?code=')) {
      const encodedCode = window.location.hash.split('?code=')[1]
      initialCode = decodeURI(encodedCode).replace(/%0A/g, '\n')
    } else initialCode = demoCode

    this.state = { initialCode }
  }

  componentDidMount() {
    this.onChange(this.state.initialCode)
  }

  onChange = code => {
    const encodedCode = encodeURI(code.replace(/\n/g, '%0A'))
    this.setState({ encodedCode, url: null })
  }

  share = () => {
    const url =
      window.location.origin +
      window.location.pathname +
      '#/playground?code=' +
      this.state.encodedCode
    this.setState({ url })
  }
  render() {
    return (
      <div>
        <Container>
          <LiveProvider code={this.state.initialCode} scope={Components} noInline={true}>
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
    )
  }
}

export default Playground
