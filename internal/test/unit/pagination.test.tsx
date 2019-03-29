import * as React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from '@auth0/cosmos'

const noop = () => { }
export type PaginationFactoryParams = { page?: number, perPage?: number, items?: number, onPageChanged?: Function }

const paginationFactory = ({ page, perPage, items, onPageChanged = noop }: PaginationFactoryParams = {}) =>
  shallow(<Pagination page={page} perPage={perPage} items={items} onPageChanged={onPageChanged} />)

describe('Pagination', () => {
  it('calls onPageChanged handler when click first page', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 3, perPage: 5, items: 1000, onPageChanged })
    const prevPageButton = pagination.children().first()
    prevPageButton.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(1)
  })

  it('calls onPageChanged handler when click previous page', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 3, perPage: 5, items: 1000, onPageChanged })
    const prevPageButton = pagination.childAt(1)
    prevPageButton.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(2)
  })

  it('calls onPageChanged handler when click next page', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 3, perPage: 5, items: 1000, onPageChanged })
    const nextPageButton = pagination.childAt(7)
    nextPageButton.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(4)
  })

  it('calls onPageChanged handler when click last page', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 3, perPage: 5, items: 1000, onPageChanged })
    const lastPageButton = pagination.childAt(8)
    lastPageButton.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(200)
  })

  it('calls onPageChanged handler when page number button is clicked', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 75, perPage: 5, items: 1000, onPageChanged })
    const page73Button = pagination.childAt(4)
    page73Button.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(73)
  })
})
