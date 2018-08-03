import React from 'react'
import { storiesOf } from '@storybook/react'
import Manage from './index'

storiesOf('Manage').add('applications index', () => <Manage defaultRoute="applications" />)
storiesOf('Manage').add('application', () => (
  <Manage defaultRoute="applications/apXVn76xBT7WougWj17MGXHSthfrBB" />
))
