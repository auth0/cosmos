This component can be used as a placeholder for a list when the list would otherwise be empty.

```jsx
<EmptyState
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
