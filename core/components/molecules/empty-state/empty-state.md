```meta
  category: Forms
  description: "Empty states are displayed when a page has no content."
```

Empty states are displayed when a page has no content.

```jsx
<EmptyState
  {props}
  defaults={{title: "Clients", icon: "clients", helpUrl: "auth0.com"}}
  action={{
    icon: 'plus',
    label: 'Create Client',
    handler: function() { /*...*/ }
  }}
/>
```

## Examples

You can change how the help link opens by passing an `object` with `target` instead of `string` to `helpUrl`

```js
<EmptyState
  icon="clients"
  text="No items have been added to this section."
  title="Clients"
  helpUrl={{ href: 'https://auth0.com', target: '_self' }}
  action={{
    icon: 'plus',
    label: 'Create Client',
    handler: () => {}
  }}
/>
```
