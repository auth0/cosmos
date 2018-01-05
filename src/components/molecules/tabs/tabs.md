```meta
  category: Layout
```

---

`Tabs` are great for splitting information into sections to make them easy to consume

---

#### Examples

```js
<Tabs>
  <Tabs.Tab label="Tab 1">this is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">you can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3">third tab!</Tabs.Tab>
</Tabs>
```

By default the first tab is selected, you can change this behaviour attaching the `selected` prop to a `Tab`.

```js
<Tabs>
  <Tabs.Tab label="Tab 1">this is tab 1</Tabs.Tab>
  <Tabs.Tab label="Tab 2">you can render anything you want here</Tabs.Tab>
  <Tabs.Tab label="Tab 3" selected>
    look, third tab is selected by default!
  </Tabs.Tab>
</Tabs>
```
