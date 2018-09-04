import React from 'react'
import renderer from 'react-test-renderer'
import { Tag } from '@auth0/cosmos'
import 'jest-styled-components'

describe('Tag', () => {
  describe('renders with automation attribute', () => {
    it('single Tag', () => {
      const tree = renderer.create(<Tag />).toJSON()
      expect(tree).toMatchSnapshot()
    })

    it('group of Tags', () => {
      const tree = renderer.create(<Tag.Group />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
