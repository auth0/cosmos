import React from 'react'

import { Row, Col } from './ov-components/grid'
import Overview from './ov-components/overview'
import Container from './ov-components/container'
import Navigation from './ov-components/navigation'

import Avatars from './examples/avatars'
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
import Overlays from './examples/overlays'
import PageHeaders from './examples/page-headers'
import ResourceLists from './examples/resource-lists'
import Spacing from './examples/spacing'
import Tables from './examples/tables'
import TabsExample from './examples/tabs'
import Tags from './examples/tags'
import Thumbnails from './examples/thumbnails'
import Tooltip from './examples/tooltip'
import Typography from './examples/typography'

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
  </Overview>
)
