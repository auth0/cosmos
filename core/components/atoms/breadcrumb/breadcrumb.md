```meta
  category: Navigation
  description: Display breadcrumbs on top of the page
```

`import { Breadcrumb } from '@auth0/breadcrumb'`

---

## Examples

`Breadcrumb` comes with `Breadcrumb.Link` which is the familiar [Link component](#/component/link)

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
</Breadcrumb>
```

You can add an icon the first link

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home" icon="home-fill">
    Home
  </Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
</Breadcrumb>
```

Sometimes you just need one link

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home" icon="arrow-left-fill">
    Back to applications
  </Breadcrumb.Link>
</Breadcrumb>
```
