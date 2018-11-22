```meta
category: layout
description: Column layout allows organization of it's children in columns
```

---

The `PageLayout` creates the structure for the Page by generating the space between the `PageLayout.Header` and the `PageLayout.Content`.

Both sections accept as many children as needed to achieve the desired UI. For example the `PageLayout.Header` can have the `PageHeader` component and `Breadcrumbs` and the `PageLayout.Content` can nest other layouts like `RowLayout` or `ColumnLayout`.

```jsx
<PageLayout {props}>
  <PageLayout.Header>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Page Header</div>
  </PageLayout.Header>
  <PageLayout.Content>
    <div style={{ border: "3px dotted #666", padding: "1rem" }}>Page Component</div>
  </PageLayout.Content>
</PageLayout>
```

## Usage

The `PageLayout` should be used specifically within the `main` area of the AppFrame to create the separation between the header and the content of the page.

**This layout is usecase speific to achevie just one goal, do not use it for anything else**

## Accecibility

This layout is semantic free.

always place it within the `<main>` area.