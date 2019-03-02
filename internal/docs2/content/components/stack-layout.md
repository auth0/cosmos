---
title: Stack Layout
componentName: StackLayout
description: Organizes it's children into flexible horizontal row.
---

It gives control over the way they spread, space, and align.

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

Use the `StackLayout` to generate a horizontal row of components that maintain their relative sizes.

You can nest StackLayouts or combine it with other layouts to create complex arrangements.

### Do not use it for:

- **Create columns:** To create a column layout, use the `ColumnLayout` instead.
- **Card List**: Use the `GalleryLayout` instead.

## Accessibility

This layout is semantic free.
