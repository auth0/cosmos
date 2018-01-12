import React from 'react'
import { Text, Form } from '../components'

let dummyFn = () => {}

class Connections extends React.Component {
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
        <Text>
          Connections are sources of users. They are categorized into Database, Social and
          Enterprise and can be shared among different applications.
        </Text>
      </div>
    )
  }
}

export default Connections
