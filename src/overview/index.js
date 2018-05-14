import React from 'react'

import { Row, Col } from './ov-components/grid'
import Overview from './ov-components/overview'
import Container from './ov-components/container'
import Navigation from './ov-components/navigation'

import Colors from './examples/colors'
import Spacing from './examples/spacing'
import Icons from './examples/icons'
import Forms from './examples/forms'
import EmptyStates from './examples/empty-states'
import PageHeaders from './examples/page-headers'
import Overlays from './examples/overlays'
import Tooltip from './examples/tooltip'
import Inputs from './examples/inputs'
import Typography from './examples/typography'
import TabsExample from './examples/tabs'
import Buttons from './examples/buttons'
import ButtonsInputs from './examples/buttons-inputs'
import Logos from './examples/logos'
import Avatars from './examples/avatars'
import Thumbnails from './examples/thumbnails'
import Lists from './examples/lists'
import ResourceLists from './examples/resource-lists'
import Tables from './examples/tables'
import Labels from './examples/labels'

export default () => (
  <Overview>
    <Navigation />
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
          <Thumbnails />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tooltip />
        </Col>
        <Col>
          <Overlays />
        </Col>
      </Row>
      <Row>
        <Col>
          <Labels />
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
  </Overview>
)
