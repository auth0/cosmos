---
category: layout
description: It organizes elements vertically and horizontally into a gallery grid
---

---

The `GalleryLayout` arranges its children into a gallery grid. For example to create a list of cards.

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

Use `GalleryLayout` to organize components into a gallery.

### Do not use it for:

- **To create columns:** Use the `ColumnLayout` instead.

## Accessibility

This gallery layout is an an ordered list of components. The semantics are baked into the component.
