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
    text: 'Create Client',
    handler: function() { /*...*/ }
  }}
/>
```
