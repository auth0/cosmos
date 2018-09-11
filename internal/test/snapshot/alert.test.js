import React from 'react'
import renderer from 'react-test-renderer'
import { Alert } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Alert', () => {
  it('renders with automation attribute', () => {
    const tree = renderer.create(<Alert dismissible>Text</Alert>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
