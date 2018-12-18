import React from 'react'
import { storiesOf } from '@storybook/react'
import ApplicationIndex from './pages/applications'
import ApplicationDetail from './pages/application-detail'

storiesOf('Manage', module).add('applications index', () => <ApplicationIndex />)

const routerMock = { match: { params: { applicationId: 'apXVn76xBT7WougWj17MGXHSthfrBB' } } }
storiesOf('Manage', module).add('application', () => <ApplicationDetail {...routerMock} />)
