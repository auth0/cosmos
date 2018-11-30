```meta
category: layout
description: Column layout allows organization of it's children in columns
```

---

Use a `ColumnLayout` to organize its children into 2, 3, or 4 column layouts.

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

Column layout allow to organize it's children horizontally into columns.

Use this layout only to create columns within the main area.

### Do not use it for:

- **Page chrome:** Use the App Layout instead for the page chrome.
- **Arrange components next to each other:** To arrange components next to one another, with a consistent gutter use a Stack Layout.
- **Toolbars**: To position a set of tools or actions use the ToolBar layout instead.
- **Card List**: Use the Gallery layout instead.

Combine the Colymn layout with the Row Layout to achieve complex grid like dashboard for dashboard for examples.

## Accecibility

This layout is semantic free.

Make sure the Column layout is within a correct landmark.
