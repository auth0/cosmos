import React from 'react'
import { render } from 'enzyme'
import { Select } from '@auth0/cosmos'

describe('Select', () => {
  it('simple variant renders SimpleSelect', () => {
    const select = render(
      <Select
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        placeholder="Something"
        onChange={event => console.log(event)}
        customProp={'something'}
      />
    )

    expect(select).toMatchSnapshot()
  })

  it('multiple variant renders ReactSelect', () => {
    const select = render(
      <Select
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        placeholder="Something"
        onChange={event => console.log(event)}
        defaultMenuOpen
        multiple
      />
    )

    expect(select).toMatchSnapshot()
  })

  it('searchable variant renders ReactSelect', () => {
    const select = render(
      <Select
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        placeholder="Something"
        onChange={event => console.log(event)}
        defaultMenuOpen
        searchable
      />
    )

    expect(select).toMatchSnapshot()
  })

  it('customOptionRenderer variant renders ReactSelect', () => {
    const select = render(
      <Select
        options={[
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
        placeholder="Something"
        onChange={event => console.log(event)}
        defaultMenuOpen
        customOptionRenderer={option => <div>{option.label}</div>}
      />
    )

    expect(select).toMatchSnapshot()
  })

  it('async variant renders ReactSelect', () => {
    const select = render(
      <Select
        async
        loadOptions={() => {}}
        placeholder="Something"
        onChange={event => console.log(event)}
        defaultMenuOpen
      />
    )

    expect(select).toMatchSnapshot()
  })
})
