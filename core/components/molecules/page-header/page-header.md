```meta
  category: Layout
  description: "Use to add a title, description and main actions to pages."
```

`import { PageHeader } from '@auth0/cosmos'`

```jsx
<PageHeader
  {props}
  defaults={{ title: "Clients" }}
  description={<span>Setup a mobile, web or IoT application to use Auth0 for Authentication.</span>}
  learnMore="/link"
  primaryAction={{
    label: 'Create Client',
    icon: 'plus',
    handler: () => {}
  }}
  secondaryAction={{
    label: 'Tutorial',
    icon: 'play-circle',
    handler: () => {}
  }}
/>
```

## Examples

### Single actions

A Page header can have a single primary action:

```js
<PageHeader
  title="Clients"
  primaryAction={{
    label: 'Create Client',
    icon: 'plus',
    handler: () => {}
  }}
  description={
    <span>
      Setup a mobile, web or IoT application to use Auth0 for Authentication.{' '}
      <Link href="/clients">Learn more</Link>
    </span>
  }
/>
```

A Page header can also have a single secondary action:

```js
<PageHeader
  title="Clients"
  secondaryAction={{
    label: 'Tutorial',
    icon: 'play-circle',
    handler: () => {}
  }}
  description={
    <span>
      Setup a mobile, web or IoT application to use Auth0 for Authentication.{' '}
      <Link href="/clients">Learn more</Link>
    </span>
  }
/>
```
