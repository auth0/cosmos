import React from 'react'

import { Row, Col } from './components/grid'
import Container from './components/container'

import Avatars from './examples/avatars'
import AvatarBlocks from './examples/avatar-blocks'
import Badges from './examples/badges'
import Buttons from './examples/buttons'
import ButtonsInputs from './examples/buttons-inputs'
import Colors from './examples/colors'
import EmptyStates from './examples/empty-states'
import Forms from './examples/forms'
import Icons from './examples/icons'
import Inputs from './examples/inputs'
import Labels from './examples/labels'
import Lists from './examples/lists'
import Logos from './examples/logos'
import Dialogs from './examples/dialogs'
import PageHeaders from './examples/page-headers'
import ResourceLists from './examples/resource-lists'
import Spacing from './examples/spacing'
import Tables from './examples/tables'
import TabsExample from './examples/tabs'
import Tags from './examples/tags'
import Tooltip from './examples/tooltip'
import Typography from './examples/typography'

export default () => (
  <Container>
    <Row>
      <Col>
        <Colors />
      </Col>
      <Col>
        <Spacing />
      </Col>
    </Row>
    <Typography />
    <Buttons />
    <Inputs />
    <ButtonsInputs />
    <Forms />
    <Row>
      <Col>
        <Icons />
      </Col>
      <Col>
        <Logos />
      </Col>
    </Row>
    <Row>
      <Col>
        <Avatars />
      </Col>
      <Col>
        <AvatarBlocks />
      </Col>
    </Row>
    <Row>
      <Col>
        <Tooltip />
      </Col>
      <Col>
        <Dialogs />
      </Col>
    </Row>
    <Row>
      <Col>
        <Labels />
      </Col>
      <Col>
        <Badges />
      </Col>
    </Row>
    <Row>
      <Col>
        <Tags />
      </Col>
      <Col />
    </Row>
    <PageHeaders />
    <TabsExample />
    <EmptyStates />
    <Lists />
    <ResourceLists />
    <Tables />
  </Container>
)
