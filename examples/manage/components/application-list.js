import React from 'react'
import styled from 'styled-components'

import { Code, ResourceList } from '@auth0/cosmos'
import { spacing } from '@auth0/cosmos-tokens'
import { applications } from '../pages/applications/applications.json'

import ApplicationTypeImages from './application-types-images'

/* TODO: Find a good way to override: https://github.com/auth0/cosmos/issues/347 */
import { StyledTextSubdued } from '@auth0/cosmos/atoms/text'

const noop = () => {}

const ApplicationID = styled(StyledTextSubdued)`
  margin-right: ${spacing.xsmall};
  line-height: normal;
`

const ApplicationList = props => (
  <ResourceList
    items={applications}
    renderItem={(application, props, index) => (
      <ResourceList.Item
        key={index}
        title={application.name}
        subtitle={application.type}
        href={`#/applications/${application.id}`}
        image={ApplicationTypeImages[application.image]}
        actions={props.actions}
      >
        <ApplicationID>Application ID</ApplicationID>
        <Code>{application.id}</Code>
      </ResourceList.Item>
    )}
    actions={[
      { icon: 'quickstarts', label: 'Quickstart', handler: noop },
      { icon: 'settings', label: 'Settings', handler: noop },
      { icon: 'code', label: 'Addons', handler: noop },
      { icon: 'connections', label: 'Connections', handler: noop }
    ]}
  />
)

export default ApplicationList
