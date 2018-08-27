```meta
  category: Layout
  description: "A list of actions that can break functionality"
  unstable: true
```

`import { DangerZone } from '@auth0/cosmos'`

```jsx
<DangerZone
  items={[
    {
      title: 'Delete this application',
      description: 'All your apps using this client will stop working.',
      action: {
        label: 'Delete',
        onClick: evt => {
          // Handles on delete
        }
      }
    }
  ]}
/>
```

## Usage

A Danger Zone should be used in cases where the action/s are destructive for the correct functionality of an application.

## Examples

### Single action

```js
<DangerZone
  items={[
    {
      title: 'Delete this application',
      description: 'All your apps using this client will stop working.',
      action: {
        label: 'Delete',
        onClick: evt => {
          // Handles on delete
        }
      }
    }
  ]}
/>
```

### Multiple actions

```js
<DangerZone
  items={[
    {
      title: 'Delete this application',
      description: 'All your apps using this client will stop working.',
      action: {
        label: 'Delete',
        onClick: evt => {
          // Handles on delete
        }
      }
    },
    {
      title: 'Rotate secret',
      description: 'All authorized apps will need to be updated with the new client secret.',
      action: {
        label: 'Rotate',
        onClick: evt => {
          // Handles on rotate
        }
      }
    }
  ]}
/>
```
