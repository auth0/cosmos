```meta
category: Miscellaneous
description: Use tooltips for giving extra context AND to make visual cues accessible
```

---

```jsx
<Tooltip content="Here is some text" {props}>Hover me</Tooltip>
```

## Examples

### Tooltip top:

```js
<Tooltip top content="Copy">
  <Icon name="copy" />
</Tooltip>
```

### Tooltip bottom:

```js
<Tooltip bottom content="Notifications">
  <Icon name="notifications" />
</Tooltip>
```
