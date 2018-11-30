```meta
category: layout
description: Row layout allows organization of it's children in row
```

---

Use a `RowLayout` to organize its children into a row layouts, creating a separation between each item.

```jsx
  <RowLayout {props}>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
  </RowLayout>
```

## Usage

Row layout allow to organize it's children vertically into row.

Use this layout only to create row within the main area.

### Do not use it for:

- **Page chrome:** Use the App Frame instead for the page chrome.
- **Arrange components next to each other:** To arrange components next to one another, with a consistent gutter use a Stack Layout.
- **Toolbars**: To position a set of tools or actions use the ToolBar layout instead.
- **Card List**: Use the Gallery layout instead.

Combine the Row layout with the Column Layout to achieve complex grid like dashboard for dashboard for examples.

## Accecibility

This layout is semantic free.

Make sure the Row layout is within a correct landmark.
