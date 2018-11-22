import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import Automation from '../../_helpers/automation-attribute'
import { AppFrame } from '@auth0/cosmos'

storiesOf('App Frame').add('default', () => (
  <Example title="default">
    <AppFrame>
      <AppFrame.Header {...Automation('app-frame.header')} role="banner">
        <div>Header</div>
      </AppFrame.Header>
      <AppFrame.SideBar {...Automation('app-frame.sidebar')}>SideBar</AppFrame.SideBar>
      <AppFrame.Content {...Automation('app-frame.content')} role="main">ConThere are some key differences with how a grid layout works over the grid systems you may have used previously. As you can see, we do not need to add any markup to create a row, grid systems need to do this to stop elethings into rows, with no danger of them rising up into the row above if it is left empty. Due to this strict column and row placement we can also easily leave white space in our layout. We also don’t need special classes to pull or push things, to indent them into the grid. All we need to do is specify the start and end line for the item.tent</AppFrame.Content>

    </AppFrame>
  </Example>
))
