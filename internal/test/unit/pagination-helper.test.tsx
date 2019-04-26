import * as React from 'react'
import {
  pageInputWidth,
  pagesFromItems,
  changePageIfAppropiate,
  totals,
  getPaginationSlice
} from '@auth0/cosmos/_helpers/pagination'

describe('Pagination helper tests', () => {
  it('should calculate page input width', () => {
    expect(pageInputWidth(1)).toEqual(58)
    expect(pageInputWidth(10)).toEqual(66)
    expect(pageInputWidth(100)).toEqual(74)
    expect(pageInputWidth(1000)).toEqual(82)
  })

  it('should calculate pagesFromItems', () => {
    expect(pagesFromItems(100, 10)).toEqual(10)
    expect(pagesFromItems(104, 10)).toEqual(11)
    expect(pagesFromItems(1, 10)).toEqual(1)
    expect(pagesFromItems(0, 10)).toEqual(0)
  })

  it('should call change page handlers on last edge when appropiate', () => {
    const changePageHandler = jest.fn()

    let nextPage = 121
    const totalItems = 1200
    const perPage = 10
    changePageIfAppropiate(nextPage, totalItems, perPage, changePageHandler)
    expect(changePageHandler).not.toHaveBeenCalled()

    nextPage = 120
    changePageIfAppropiate(nextPage, totalItems, perPage, changePageHandler)
    expect(changePageHandler).toHaveBeenCalledWith(nextPage)
  })

  it('should call change page handlers on first edge when appropiate', () => {
    const changePageHandler = jest.fn()

    let nextPage = -1
    const totalItems = 1200
    const perPage = 10
    changePageIfAppropiate(nextPage, totalItems, perPage, changePageHandler)
    expect(changePageHandler).not.toHaveBeenCalled()

    nextPage = 1
    changePageIfAppropiate(nextPage, totalItems, perPage, changePageHandler)
    expect(changePageHandler).toHaveBeenCalledWith(nextPage)
  })

  it('should display totals', () => {
    expect(totals(75, 10, 12000)).toEqual('Showing 741 - 750 of 12000')
    expect(totals(75, 13, 12345)).toEqual('Showing 963 - 975 of 12345')
    expect(totals(1, 10, 54321)).toEqual('Showing 1 - 10 of 54321')
    expect(totals(1, 10)).toEqual('Showing 1 - 10')
    expect(totals(1200, 10, 12000)).toEqual('Showing 11991 - 12000 of 12000')
    expect(totals(1200, 10, -12)).toEqual('Showing 11991 - 12000')
  })

  it('should generate pagination content', () => {
    const prettify = p => p.map(i => (i.selected ? `[${i.label}]` : i.label))

    expect(prettify(getPaginationSlice(2, 100, 10, 10))).toEqual([
      1,
      '[2]',
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ])

    expect(prettify(getPaginationSlice(99, 1000, 10, 10))).toEqual([
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      '[99]',
      100
    ])

    expect(prettify(getPaginationSlice(93, 960, 10, 10))).toEqual([91, 92, '[93]', 94, 95, 96])
  })
})
