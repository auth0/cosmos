import React from 'react'
import { shallow } from 'enzyme'
import { StackLayout } from '@auth0/cosmos'

describe('Stack Layout', () => {
  it('renders correctly when a child is null and it has a space assigned', () => {
    const stackLayout = shallow(
      <StackLayout space={['none', 1]}>
        {null}
        <div>something</div>
      </StackLayout>
    )
    expect(stackLayout).toMatchSnapshot()
  })
})
