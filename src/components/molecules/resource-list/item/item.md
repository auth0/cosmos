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
  thumbnail={<Icon name="clients" />}
  actions={[
    { icon: 'settings', label: 'Settings', method: function(){} },
    { icon: 'delete', label: 'Delete', method: function(){} }
  ]} {props} />
```

## Optional Props

All of the props for `ResourceListItem` are optional, and omitting them will result in a simpler display.
For example, here's a very simple list item that just has a `title`.

```js
<ResourceList.Item title="A List Item" />
```

Here's a list item that has a `title` and a `subtitle`:

```js
<ResourceList.Item title="A List Item" subtitle="The subtitle" />
```

And here's a list item that has a `title` and a `thumbnail`, but no `subtitle`:

```js
<ResourceList.Item title="A List Item" thumbnail={<Icon name="clients" />} />
```

As you can see, the display of the `ResourceList.Item` is very versatile. To improve the visual appearance of your `ResourceList`, you should ensure that all of the items have the same display.

## Body

By passing child elements to the `ResourceList.Item`, you can render a "body" for the item which will be displayed
between the header (title, subtitle, etc.) and the actions. This is the main reason you'll want to specify a
`renderItem()` function for `ResourceList`. Here's an example:

```js
<ResourceList.Item
  title="A List Item"
  subtitle="Example Subtitle"
  thumbnail={<Icon name="clients" />}
  actions={[
    { icon: 'settings', label: 'Settings', method: function() {} },
    { icon: 'delete', label: 'Delete', method: function() {} }
  ]}
>
  This is the list item's body
</ResourceList.Item>
```
