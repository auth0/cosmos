import React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from '@auth0/cosmos'

const noop = () => {}
const paginationFactory = ({ page, perPage, items, onPageChanged = noop } = {}) =>
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

  it('should display totals', () => {
    expect(totals(75, 10, 12000)).toEqual('Showing 741 - 750 of 12000')
    expect(totals(75, 13, 12345)).toEqual('Showing 963 - 975 of 12345')
    expect(totals(1, 10, 54321)).toEqual('Showing 1 - 10 of 54321')
    expect(totals(1, 10)).toEqual('Showing 1 - 10')
    expect(totals(1200, 10, 12000)).toEqual('Showing 11991 - 12000 of 12000')
    expect(totals(1200, 10, -12)).toEqual('Showing 11991 - 12000')
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
