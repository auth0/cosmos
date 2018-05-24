```meta
  category: Layout
  description: "A single item in a ResourceList"
```

A `ResourceList.Item` is a single item that is displayed in a [ResourceList](/docs/resource-list). You won't typically use this directly, except to return it as a result from a `renderItem()` function passed to a `ResourceList`.

```jsx
<ResourceList.Item
  title="A List Item"
  subtitle="Example Subtitle"
  href="https://auth0.com/"
  icon="clients"
  actions={[
    { icon: 'settings', label: 'Settings', handler: function(){} },
    { icon: 'delete', label: 'Delete', handler: function(){} }
  ]} {props} />
```

As you can see, the display of the `ResourceList.Item` is very versatile. To improve the visual appearance of your `ResourceList`, you should ensure that all of the items have the same display.

## Progressive Enhancement

All of the props for `ResourceListItem` are optional, and omitting them will result in a simpler display.
For example, here's a very simple list item that just has a `title`.

```js
<ResourceList.Item title="A List Item" />
```

Here's a list item that has a `title` and a `subtitle`:

```js
<ResourceList.Item title="A List Item" subtitle="The subtitle" />
```

And here's a list item that has a `title` and an `image`, but no `subtitle`:

```js
<ResourceList.Item
  title="A List Item"
  image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aAogICAgICBkPSJNMjcuMzY4IDQ1SDIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDAgNDIuMzY4VjE3LjYzMkEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAxNWgyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgMzAgMTcuNjMydjI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSAyNy4zNjggNDUiCiAgICAgIGZpbGw9IiMxNjIxNEQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTM0Ljg2OCAzNy41SDEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSA3LjUgMzQuODY4VjEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSAxMC4xMzIgNy41aDI0LjczNmEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAyLjYzMnYyNC43MzZhMi42MzIgMi42MzIgMCAwIDEtMi42MzIgMi42MzIiCiAgICAgIGZpbGw9IiNFQzU0MjQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTQyLjM2OCAzMEgxNy42MzJBMi42MzIgMi42MzIgMCAwIDEgMTUgMjcuMzY4VjIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDE3LjYzMiAwaDI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSA0NSAyLjYzMnYyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgNDIuMzY4IDMwIgogICAgICBmaWxsPSIjNDRDN0Y0IgogICAgLz4KICA8L2c+Cjwvc3ZnPg=="
/>
```

## Images and Icons

To display a thumbnail image for the list item, just supply an image URL via the `image` prop:

```js
<ResourceList.Item
  title="A List Item"
  image="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDUgNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI4IiBoZWlnaHQ9IjI4Ij4KICA8ZyBmaWxsPSJub25lIiBmaWxsUnVsZT0iZXZlbm9kZCI+CiAgICA8cGF0aAogICAgICBkPSJNMjcuMzY4IDQ1SDIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDAgNDIuMzY4VjE3LjYzMkEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAxNWgyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgMzAgMTcuNjMydjI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSAyNy4zNjggNDUiCiAgICAgIGZpbGw9IiMxNjIxNEQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTM0Ljg2OCAzNy41SDEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSA3LjUgMzQuODY4VjEwLjEzMkEyLjYzMiAyLjYzMiAwIDAgMSAxMC4xMzIgNy41aDI0LjczNmEyLjYzMiAyLjYzMiAwIDAgMSAyLjYzMiAyLjYzMnYyNC43MzZhMi42MzIgMi42MzIgMCAwIDEtMi42MzIgMi42MzIiCiAgICAgIGZpbGw9IiNFQzU0MjQiCiAgICAvPgogICAgPHBhdGgKICAgICAgZD0iTTQyLjM2OCAzMEgxNy42MzJBMi42MzIgMi42MzIgMCAwIDEgMTUgMjcuMzY4VjIuNjMyQTIuNjMyIDIuNjMyIDAgMCAxIDE3LjYzMiAwaDI0LjczNkEyLjYzMiAyLjYzMiAwIDAgMSA0NSAyLjYzMnYyNC43MzZBMi42MzIgMi42MzIgMCAwIDEgNDIuMzY4IDMwIgogICAgICBmaWxsPSIjNDRDN0Y0IgogICAgLz4KICA8L2c+Cjwvc3ZnPg=="
/>
```

To display an icon instead, you can supply an icon name via the `icon` prop:

```js
<ResourceList.Item title="A List Item" icon="clients" />
```

## Body

By passing child elements to the `ResourceList.Item`, you can render a "body" for the item which will be displayed
between the header (title, subtitle, etc.) and the actions. This is the main reason you'll want to specify a
`renderItem()` function for `ResourceList`. Here's an example:

```js
<ResourceList.Item
  title="A List Item"
  subtitle="Example Subtitle"
  icon="clients"
  actions={[
    { icon: 'settings', label: 'Settings', handler: function() {} },
    { icon: 'delete', label: 'Delete', handler: function() {} }
  ]}
>
  This is the list item's body
</ResourceList.Item>
```
