The `icon` property is required, and should be set to a valid icon type. (Same as the `type`
property in the `<Icon>` component.) Any children of the component will be rendered underneath
the icon.

```js props
<EmptyState icon='clients' title='SSO Integrations' {props}>
  <Text>No items have been defined.</Text>
</EmptyState>
```
