import React from 'react'
import { storiesOf } from '@storybook/react'
import ApplicationIndex from './pages/applications'
import ApplicationDetail from './pages/application-detail'

storiesOf('Manage').add('applications index', () => <ApplicationIndex />)

const routerMock = { match: { params: { applicationId: 'apXVn76xBT7WougWj17MGXHSthfrBB' } } }
storiesOf('Manage').add('application', () => <ApplicationDetail {...routerMock} />)
