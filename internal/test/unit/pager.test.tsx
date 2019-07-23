import { shallow } from 'enzyme'
import * as React from 'react'

import { Pager } from '@auth0/cosmos'

export type PagerFactoryParams = {
  page?: number
  perPage?: number
  items?: number
  showInfo?: boolean
  onPageChanged?: Function
}

const noop = () => {}

const paginationFactory = ({
  page,
  perPage,
  items,
  showInfo,
  onPageChanged = noop
}: PagerFactoryParams = {}) =>
  shallow(
    <Pager
      page={page}
      perPage={perPage}
      items={items}
      showInfo={showInfo}
      onPageChanged={onPageChanged}
    />
  )

describe('Pager', () => {
  describe('modes', () => {
    it('renders full mode', () => {
      const pagination = paginationFactory({ page: 4, perPage: 10, items: 10000 })

      expect(pagination).toMatchSnapshot()
    })

    it('renders page only mode', () => {
      const pagination = paginationFactory({ page: 4 })

      expect(pagination).toMatchSnapshot()
    })

    it('renders no info mode', () => {
      const pagination = paginationFactory({ page: 4, showInfo: false })

      expect(pagination).toMatchSnapshot()
    })

    it('renders previus page control disabled', () => {
      const pagination = paginationFactory({ page: 1, items: 10, perPage: 5 })

      expect(pagination).toMatchSnapshot()
    })

    it('renders next page control disabled', () => {
      const pagination = paginationFactory({ page: 2, items: 10, perPage: 5 })

      expect(pagination).toMatchSnapshot()
    })
  })
  describe('controls', () => {
    describe('previous page button', () => {
      it('calls onPageChanged when clicked', () => {
        const onPageChanged = jest.fn()
        const pagination = paginationFactory({ page: 4, perPage: 10, items: 10000, onPageChanged })
        const button = pagination.children().first()

        button.simulate('click')

        expect(onPageChanged).toHaveBeenCalledWith(3)
      })

      it('does not call onPageChanged when disabled and clicked', () => {
        const onPageChanged = jest.fn()
        const pagination = paginationFactory({ page: 1, perPage: 10, items: 10000, onPageChanged })
        const button = pagination.children().first()

        button.simulate('click')

        expect(onPageChanged).not.toHaveBeenCalled()
      })
    })

    describe('next page button', () => {
      it('calls onPageChanged when clicked', () => {
        const onPageChanged = jest.fn()
        const pagination = paginationFactory({ page: 4, perPage: 10, items: 10000, onPageChanged })
        const button = pagination.children().last()

        button.simulate('click')

        expect(onPageChanged).toHaveBeenCalledWith(5)
      })

      it('does not call onPageChanged when disabled and clicked', () => {
        const onPageChanged = jest.fn()
        const pagination = paginationFactory({ page: 4, perPage: 10, items: 40, onPageChanged })
        const button = pagination.children().last()

        button.simulate('click')

        expect(onPageChanged).not.toHaveBeenCalled()
      })
    })
  })
})
