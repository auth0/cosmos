import React from 'react'
import styled from '@auth0/cosmos/styled'
import { storiesOf } from '@storybook/react'
import ApplicationIndex from './pages/applications'
import ApplicationDetail from './pages/application-detail'

const PageMock = styled.div`
  max-width: 836px;
  margin: 2rem auto;
`

storiesOf('Manage', module).add('applications index', () => (
  <PageMock>
    <ApplicationIndex />
  </PageMock>
))

const routerMock = { match: { params: { applicationId: 'apXVn76xBT7WougWj17MGXHSthfrBB' } } }
storiesOf('Manage', module).add('application', () => (
  <PageMock>
    <ApplicationDetail {...routerMock} />
  </PageMock>
))
