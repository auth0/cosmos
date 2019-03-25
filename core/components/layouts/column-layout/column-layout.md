---
category: layout
description: Column layout allows organization of it's children in columns
---

---

The `ColumnLayout` organizes its children into 2, 3, or 4 column layouts.

```jsx
  <ColumnLayout {props}>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
  </ColumnLayout>
```

## Usage

Use the `ColumnLayout` to organize components horizontally into columns.

### Do not use it for:

- **Arrange components next to each other:** To arrange components next to one another while keeping their relative sizes use the Stack Layout.
- **Card List**: Use the Gallery layout instead.

Combine the `ColymnLayout` with the `RowLayout` to achieve complex grid arrangments.

## Accecibility

This layout is semantic free.

Make sure the Column layout is within a correct landmark.
