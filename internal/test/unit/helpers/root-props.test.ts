import { rootProps } from '@auth0/cosmos/_helpers/root-props'

describe('rootProps', () => {
  it('omits the title key', () => {
    const props = { title: 'Dialog', otherProp: 1, anotherProp: 'abc' }
    const validProps = rootProps(props)
    expect(validProps).toEqual({ otherProp: 1, anotherProp: 'abc' })
  })

  it('returns an empty object if an empty object is provided', () => {
    const props = {}
    const validProps = rootProps(props)
    expect(validProps).toEqual({})
  })

  it('returns an empty object if an only title is provided', () => {
    const props = { title: 'Dialog' }
    const validProps = rootProps(props)
    expect(validProps).toEqual({})
  })

  it('returns the same object if an title is not present', () => {
    const props = { otherProp: 1, anotherProp: 'abc' }
    const validProps = rootProps(props)
    expect(validProps).toEqual({ otherProp: 1, anotherProp: 'abc' })
  })
})
