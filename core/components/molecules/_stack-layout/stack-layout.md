```meta
category: layout
description: The StackLayout horizontally organizes its children
```

---

The `StackLayout` is made of flexible items that wrap each of the stack’s children and positions them horizontally in a row. It lets you control the way they spread, space, and align.

```jsx
  <StackLayout {props}>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Component</div>
  </StackLayout>
```

## Usage

Use to quickly lay out a horizontal row of components and maintain their relative sizes.

You can nest StackLayouts or combine it with other layouts to create complex arrangements.

### Do not use it for:

- **Page chrome:** Use the App Frame instead for the page chrome.
- **Create columns:** To create a column layout, use the Column Layout instead.
- **Card List**: Use the Gallery layout instead.

## Accessibility

This layout is semantic free.

Make sure the Row layout is within a correct landmark.
