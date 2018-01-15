import React from 'react'
import { Form } from '../components'

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
    return <div />
  }
}

export default Advanced
