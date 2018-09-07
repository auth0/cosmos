```meta
  category: Forms
  description: "Empty states are displayed when a page has no content."
```

Empty states are displayed when a page has no content.

```jsx
<EmptyState
  {props} defaults={{title: "Clients", icon: "clients", link: "auth0.com"}}
  action={{
    icon: 'plus',
    label: 'Create Client',
    handler: () => {}
  }}
>
  No items have been added to this section.
</EmptyState>
```

## Examples

You can change how the help link opens by passing an `object` with `target` instead of `string` to `link`

```js
<EmptyState
  icon="clients"
  title="Clients"
  link={{ href: 'https://auth0.com', target: '_blank' }}
  action={{
    icon: 'plus',
    label: 'Create Client',
    handler: () => {}
  }}
>
  No items have been added to this section.
</EmptyState>
```
