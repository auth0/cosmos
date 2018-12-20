import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
// import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
// import Automation from '../../_helpers/automation-attribute'
import { FlexLayout } from '@auth0/cosmos'

storiesOf('Flex Layout', module).add('default', () => (
  <Example title="default">
    listitem
    <FlexLayout distribution="equalSpacing">
      <FlexLayout.Item grow="1">Chead jlhashjads adljasd sa</FlexLayout.Item>

      <FlexLayout.Item>actions</FlexLayout.Item>
    </FlexLayout>
  </Example>
))
