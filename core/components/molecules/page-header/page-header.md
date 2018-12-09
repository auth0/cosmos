```meta
  category: Layout
  description: "Use to add a title, description and main actions to pages."
```

`import { PageHeader } from '@auth0/cosmos'`

```jsx
<PageHeader
  {props}
  defaults={{ title: "Clients" }}
  description={<span>Setup a mobile, web or <Link href="#/iot-apps">IoT application</Link> to use Auth0 for Authentication.</span>}
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
>

</PageHeader>
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
  learnMore="/link"
  description={
    <span>
      Setup a mobile, web or <Link href="#/iot-apps">IoT application</Link> to use Auth0 for
      Authentication.
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
  learnMore="/link"
  description={
    <span>
      Setup a mobile, web or <Link href="#/iot-apps">IoT application</Link> to use Auth0 for
      Authentication.
    </span>
  }
/>
```

## Usage
Use the `PageHeader` to add a title, description and main actions to pages.

<!-- This component should be placed within the `PageLayout.Header` layout to have the correct spacing between the header of the page and the content. -->

## Accessibility
The title is set to be an `h1` make sure that the rest of the headers througout the document follow the correct hierarchy.

<!-- The `PageHeader` should be placed within the `<main>` area. -->