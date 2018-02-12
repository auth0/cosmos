```meta
  category: Layout
  description: Tabs are great for splitting information into sections to make them easy to consume.
```

```jsx
<Tabs>
  <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3">Third tab's the charm!</Tabs.Tab>
</Tabs>
```

## Examples

### Default selected tab

By default, the first tab is selected but you can change this behavior attaching the `selected` prop to a `Tab`.

```js
<Tabs>
  <Tabs.Tab label="Tab 1">This is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">You can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3" selected>
    Look, third tab is selected by default!
  </Tabs.Tab>
</Tabs>
```
