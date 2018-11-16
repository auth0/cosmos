import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { PageLayout } from '@auth0/cosmos'

storiesOf('Page Layout').add('default', () => (
  <Example title="default">
    <PageLayout>
      <StyledPlaceholder />
    </PageLayout>
  </Example>
))
