import React from 'react'

import Container from './container'
import { Button } from '../../components'

class ButtonStateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mode: 'default' }
  }
  onClick() {
    this.setState({ mode: 'loading' })
    setTimeout(() => this.setState({ mode: 'success' }), 1000)
  }
  render() {
    let props = { ...this.props }
    if (this.state.mode === 'loading') props.loading = true
    else if (this.state.mode === 'success') props.success = true

    return (
      <Button {...props} onClick={this.onClick.bind(this)}>
        Button
      </Button>
    )
  }
}

const Buttons = () => (
  <Container title="Buttons">
    <ButtonStateWrapper />
    <br />
    <ButtonStateWrapper primary />
    <br />
    <ButtonStateWrapper transparent />
    <br />
    <ButtonStateWrapper disabled />
    <br />
    <ButtonStateWrapper destructive />
    <br />
    <ButtonStateWrapper link />
    <br />
    <ButtonStateWrapper link />
  </Container>
)

export default Buttons
