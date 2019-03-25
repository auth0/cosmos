import * as React from 'react'
import { shallow } from 'enzyme'
import { Pager } from '@auth0/cosmos'

const noop = () => {}
const paginationFactory = ({ page, perPage, items, onPageChanged = noop } = {}) =>
  shallow(<Pager page={page} perPage={perPage} items={items} onPageChanged={onPageChanged} />)

describe('Pager', () => {
  it('calls onPageChanged when the previous page button is clicked', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 4, perPage: 10, items: 10000, onPageChanged })
    const button = pagination.children().first()

    button.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(3)
  })

  it('calls onPageChanged when the next page button is clicked', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 4, perPage: 10, items: 10000, onPageChanged })
    const button = pagination.children().last()

    button.simulate('click')

    expect(onPageChanged).toHaveBeenCalledWith(5)
  })
})
