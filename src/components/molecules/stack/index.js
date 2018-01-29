import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { spacing } from '../../../tokens'

const Stack = props => {
  const columns = React.Children.map(props.children, child => <Col>{child}</Col>)
  return (
    <Grid fluid>
      <Row between="xs" middle="xs">
        {columns}
      </Row>
    </Grid>
  )
}

Stack.propTypes = {}

Stack.defaultProps = {}

export default Stack
