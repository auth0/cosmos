import React from 'react'

import { Row, Col } from './ov-components/grid'
import Overview from './ov-components/overview'
import Container from './ov-components/container'
import Navigation from './ov-components/navigation'

import Icons from './examples/icons'
import Forms from './examples/forms'
import EmptyStates from './examples/empty-states'
import PageHeaders from './examples/page-headers'
import Overlays from './examples/overlays'
import Tooltip from './examples/tooltip'
import Inputs from './examples/inputs'
import Typography from './examples/typography'
import TabsExample from './examples/tabs'
import Lists from './examples/lists'
import Buttons from './examples/buttons'

export default () => (
  <Overview>
    <Navigation />
    <Container>
      <Typography />
      <Buttons />
      <Inputs />
      <Forms />
      <Icons />
      <Row>
        <Col>
          <Tooltip />
        </Col>
        <Col>
          <Overlays />
        </Col>
      </Row>
      <PageHeaders />
      <TabsExample />
      <EmptyStates />
      <Lists />
    </Container>
  </Overview>
)
