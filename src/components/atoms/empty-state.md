The `icon` property is required, and should be set to a valid icon type. (Same as the `type`
property in the `<Icon>` component.) Any children of the component will be rendered underneath
the icon.

```js
<EmptyState icon="clients">
  <Text>No items have been defined.</Text>
</EmptyState>
```

Icon size and color can be configured using the `iconSize` and `iconColor` properties, respectively.

```js
<EmptyState icon="clients" iconSize={60}>
  <Text>No items have been defined.</Text>
</EmptyState>
```

```js
<EmptyState icon="clients" iconColor="#0cc">
  <Text>No items have been defined.</Text>
</EmptyState>
```
