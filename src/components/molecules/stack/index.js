import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

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

/* Setting name explicitly because List depends on it */
Stack.displayName = 'Stack'

export default Stack
