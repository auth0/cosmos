import React from 'react'

const Dummy = props => (
  <div style={{ minHeight: 200, border: '1px solid #eee' }} props={props}>
    {props.children}
  </div>
)

const dummyFunction = () => {}

export { Dummy, dummyFunction }
