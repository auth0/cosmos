```meta
category: layout
description: Row layout allows organization of it's children in row
```

---

The `RowLayout` organizes its children into rows, creating a vertical separation between them.

```jsx
  <RowLayout {props}>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
  </RowLayout>
```

## Usage

Use the `Rowlayout` to organize components vertically into row.

### Do not use it for:

- **Arrange components next to each other:** To arrange components next to one another while keeping their relative sizes use the Stack Layout.
- **Card List**: Use the Gallery layout instead.

Combine the `ColymnLayout` with the `RowLayout` to achieve complex grid arrangments.

## Accessibility

This layout is semantic free.

Make sure the Row layout is within a correct landmark.
