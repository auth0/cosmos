```meta
  category: Navigation
  description: A breadcrumb helps the user navigate and identify the hierarchy of page within the application.
```

`import { Breadcrumb } from '@auth0/cosmos'`

---

```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

`Breadcrumb` comes with `Breadcrumb.Link` which is the familiar [Link component](#/component/link)

## Usage

A breadcrumb is a hierarchical representation of the page within the application. Breadcrumbs provide a trail for the user to follow back to the starting or entry point.

- The breadcrumb is displayed as single horizontal line.
- Using this component is optional: it only makes sense when there is a hierarchy of pages to display.
- The last item of the breadcrumb indicates the current page and it’s not clickable.

## Examples

### Simple breadcrumb

Used when the page is part of more than two levels in navigation.

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

### With home icon

Option to add a home icon to the first link to mark it as the home or root page.

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home" icon="home-fill">
    Home
  </Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

### Using a ‘Back to parent’ link

Used when there is a single navigation level on detail pages. It provides a shortcut back to the parent index/list page from the detail page. For example: it can be used on a User detail page to go back to the Users list page. The link displays the name of the parent section: “Users”, “Applications”.

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home" icon="arrow-left-fill">
    Applications
  </Breadcrumb.Link>
</Breadcrumb>
```
