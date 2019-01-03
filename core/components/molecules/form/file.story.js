import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Weird').add('reproduce bug', () => (
  <input type="file"/>  
))
