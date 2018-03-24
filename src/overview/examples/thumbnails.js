import React from 'react'

import Example from '../ov-components/example'
import { Thumbnail, Icon } from 'auth0-cosmos'

const Thumbnails = () => (
  <Example title="Thumbnail" align="center">
    <Thumbnail source={<Icon name="settings" />} />
  </Example>
)

export default Thumbnails
