```meta
category: Miscellaneous
description: Use tooltips for giving extra context AND to make visual cues accessible
```

---

```jsx
<Tooltip defaults={{content: "Here is some text"}} {props}>Hover me</Tooltip>
```

## Tooltip Positions

Tooltips can be attached to any of the four sides of an element using the `position` prop.

```js
<Stack>
  <Tooltip position="top" content="Top">
    <Icon name="copy" />
  </Tooltip>
  <Tooltip position="bottom" content="Bottom">
    <Icon name="copy" />
  </Tooltip>
  <Tooltip position="left" content="Left">
    <Icon name="copy" />
  </Tooltip>
  <Tooltip position="right" content="Right">
    <Icon name="copy" />
  </Tooltip>
</Stack>
```
