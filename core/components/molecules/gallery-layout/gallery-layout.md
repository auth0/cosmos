```meta
category: layout
description: Row layout allows organization of it's children in row
```

---

Use a  to organize its children into a row layouts, creating a separation between each item.

The `GalleryLayout` arranges its children into a gallery like layout. For example to create a list of cards.

```jsx
<GalleryLayout {props}>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
  <div style={{ border: "3px dotted #666", padding: "1rem" }>Component</div>
</GalleryLayout>
```

## Usage

Gallery layout allow to organize it's children vertically and horizontally into a gallery grid.

Use this layout only to create for example list of cards.

### Do not use it for:

- **Columns Layouts:** Use the `ColumnLayout` instead.

## Accecibility

This gallery layout is an unorder list of components. The semantics are baked into the component.