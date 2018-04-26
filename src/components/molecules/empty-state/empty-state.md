```meta
  category: Forms
  description: "Empty states are displayed when a page has no content."
```

Empty states are displayed when a page has no content.

```jsx
<EmptyState
  title="Clients"
  icon="clients"
  helpUrl="https://auth0.com"
  action={{
    icon: 'plus',
    text: 'Create Client',
    method: function() {
      /*...*/
    }
  }}
/>
```
