import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import Automation from '../../_helpers/automation-attribute'
import { PageLayout } from '@auth0/cosmos'

storiesOf('Page Layout').add('default', () => (
  <Example title="default">
    <PageLayout>
      <PageLayout.Header {...Automation('page-header')}>
        <StyledPlaceholder />
      </PageLayout.Header>
      <PageLayout.Content {...Automation('page-content')}>
        <StyledPlaceholder />
      </PageLayout.Content>
    </PageLayout>
  </Example>
))
