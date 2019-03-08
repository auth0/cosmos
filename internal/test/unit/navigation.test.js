import React from 'react'
import { render } from 'enzyme'
import { Icon, Navigation } from '@auth0/cosmos'

describe('Navigation', () => {
  it('renders empty', () => {
    const nav = render(<Navigation description="Test navigation" />)

    expect(nav).toMatchSnapshot()
  })

  it('renders', () => {
    const nav = render(
      <Navigation description="Test navigation">
        <Navigation.Item onClick={() => {}}>
          <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
        </Navigation.Item>
      </Navigation>
    )

    expect(nav).toMatchSnapshot()
  })

  it('renders with icon item', () => {
    const nav = render(
      <Navigation description="Test navigation">
        <Navigation.Item onClick={() => {}}>
          <Icon name="apis" />
          <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
        </Navigation.Item>
      </Navigation>
    )

    expect(nav).toMatchSnapshot()
  })

  it('renders with sub navigation', () => {
    const nav = render(
      <Navigation description="Test navigation">
        <Navigation.Item onClick={() => {}}>
          <Icon name="apis" />
          <Navigation.Item.Text>Dashboard</Navigation.Item.Text>

          <Navigation.Subnav>
            <Navigation.Item>
              <Navigation.Item.Text>Test element</Navigation.Item.Text>
            </Navigation.Item>
          </Navigation.Subnav>
        </Navigation.Item>
        <Navigation.Item onClick={() => {}}>
          <Icon name="apis" />
          <Navigation.Item.Text>Another</Navigation.Item.Text>
        </Navigation.Item>
      </Navigation>
    )

    expect(nav).toMatchSnapshot()
  })

  it('renders navigation groups', () => {
    const nav = render(
      <Navigation description="Test navigation">
        <Navigation.Group title="Group 1">
          <Navigation.Item onClick={() => {}}>
            <Icon name="apis" />
            <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item onClick={() => {}}>
            <Icon name="apis" />
            <Navigation.Item.Text>Another</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Group>
        <Navigation.Group title="Group 2">
          <Navigation.Item onClick={() => {}}>
            <Icon name="apis" />
            <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
          </Navigation.Item>
          <Navigation.Item onClick={() => {}}>
            <Icon name="apis" />
            <Navigation.Item.Text>Another</Navigation.Item.Text>
          </Navigation.Item>
        </Navigation.Group>
      </Navigation>
    )

    expect(nav).toMatchSnapshot()
  })
})
