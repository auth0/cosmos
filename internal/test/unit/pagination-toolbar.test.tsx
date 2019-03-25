import * as React from 'react'
import { shallow } from 'enzyme'
import { PaginationToolbar } from '@auth0/cosmos'

const noop = () => {}
const paginationFactory = ({ page, perPage, items, onPageChanged = noop } = {}) =>
  shallow(
    <PaginationToolbar page={page} perPage={perPage} items={items} onPageChanged={onPageChanged} />
  )

describe('Pagination Toolbar', () => {
  it('calls onPageChanged when the number on the page field is changed', () => {
    const onPageChanged = jest.fn()
    const pagination = paginationFactory({ page: 1, perPage: 10, items: 10000, onPageChanged })
    const input = pagination.childAt(0).childAt(1)

    input.simulate('change', { target: { value: '2' } })

    expect(onPageChanged).toHaveBeenCalledWith(2)
  })
})
