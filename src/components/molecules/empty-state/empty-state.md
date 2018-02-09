```meta
  category: Forms
  description: "Empty states are displayed when a page has no content."
```

Empty states are displayed when a page has no content.

```jsx
<EmptyState
  {props}
  title="Clients"
  icon="clients"
  action={{
    icon: 'add',
    text: 'Create Client',
    method: function() {
      /*...*/
    }
  }}
/>
```
