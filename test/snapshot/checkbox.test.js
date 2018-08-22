import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Checkbox', () => {
  describe('renders with automation attribute', () => {
    it('single checkbox', () => {
      const tree = renderer.create(<Checkbox name="cosmos" />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('group of checkboxs', () => {
      const tree = renderer.create(<Checkbox.Group name="cosmos" />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
