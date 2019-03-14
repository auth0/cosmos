```meta
category: Layout
```

`import { Navigation } from '@auth0/cosmos'`

The <code>Nagivation</code> is a vertical menu that allow users to navigate across, into, and back out from the different pieces of content within your app.

It supports a secondary navigation and nagivation groups.

```jsx
<Navigation description="Main sidebar navigation">
  <Navigation.Item>
    <Icon name="dashboard" />
    <Navigation.Item.Text>Dashboard</Navigation.Item.Text>
  </Navigation.Item>
  <Navigation.Item>
    <Icon name="clients" />
    <Navigation.Item.Text>Applications</Navigation.Item.Text>
  </Navigation.Item>
  <Navigation.Item>
    <Icon name="apis" />
    <Navigation.Item.Text>APIs</Navigation.Item.Text>
  </Navigation.Item>
  <Navigation.Item>
    <Icon name="sso-integrations" />
    <Navigation.Item.Text>SSO Integrations</Navigation.Item.Text>
  </Navigation.Item>

  <Navigation.Item defaultOpen>
    <Icon name="connections" />
    <Navigation.Item.Text>Connections</Navigation.Item.Text>

    <Navigation.Subnav>
      <Navigation.Item>
        <Icon name="arrow-right" />
        <Navigation.Item.Text>Database</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="arrow-right" />
        <Navigation.Item.Text>Social</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="arrow-right" />
        <Navigation.Item.Text>Enterprise</Navigation.Item.Text>
      </Navigation.Item>
      <Navigation.Item>
        <Icon name="arrow-right" />
        <Navigation.Item.Text>Passwordless</Navigation.Item.Text>
      </Navigation.Item>
    </Navigation.Subnav>
  </Navigation.Item>

  <Navigation.Item>
    <Icon name="users" />
    <Navigation.Item.Text>Users</Navigation.Item.Text>
  </Navigation.Item>
  <Navigation.Item>
    <Icon name="rules" />
    <Navigation.Item.Text>Rules</Navigation.Item.Text>
  </Navigation.Item>
</Navigation>
```

## Usage

Use the Navigation component to create the primary navigation of your app.

## Examples

Coming soon...
Groups
Sub items
No Icons
width Badge

## Accessibility

The component follows [WCAG recommendations to build menus](https://www.w3.org/WAI/tutorials/menus/).
