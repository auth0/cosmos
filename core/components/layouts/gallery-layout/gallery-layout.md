```meta
category: layout
description: Use this component to organize elements vertically and horizontally into a gallery grid
```

---

Use a to organize its children into a row layouts, creating a separation between each item.

The `GalleryLayout` arranges its children into a gallery like layout. For example to create a list of cards.

```jsx
<GalleryLayout {props}>
  <Well style={{textAlign: 'center'}}><Logo/></Well>
  <Well style={{textAlign: 'center'}}><Logo color="dark"/></Well>
  <Well style={{textAlign: 'center'}}><Logo color="dark"/></Well>
  <Well style={{textAlign: 'center'}}><Logo/></Well>
  <Well style={{textAlign: 'center'}}><Logo/></Well>
  <Well style={{textAlign: 'center'}}><Logo color="dark"/></Well>
</GalleryLayout>
```

## Usage

Use this layout only to create for example list of cards.

### Do not use it for:

- **Columns Layouts:** Use the `ColumnLayout` instead.

## Accessibility

This gallery layout is an an ordered list of components. The semantics are baked into the component.
