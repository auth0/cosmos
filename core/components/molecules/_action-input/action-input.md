```meta
  category: Input
  description: Use to add actions to your input
```

`import { ActionInput } from '@auth0/cosmos'`

Inherits all the props of `TextInput` + Adds actions. Used in `Form.Field`

```jsx
<ActionInput
  placeholder="Placeholder text"
  actions={[
    { icon: 'copy', handler: () => {}, label: 'Copy to clipboard' },
    { icon: 'delete', handler: () => {}, label: 'Delete value' }
  ]}
/>
```
