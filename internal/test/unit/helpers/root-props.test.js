import { rootProps } from '@auth0/cosmos/_helpers/root-props'

describe('rootProps', () => {
  it('omits the title key', () => {
    const props = { title: 'Dialog', otherProp: 1, anotherProp: 'abc' }
    const validProps = rootProps(props)
    expect(validProps).toEqual({ otherProp: 1, anotherProp: 'abc' })
  })
})
