```meta
category: Miscellaneous
description: Use tooltips for giving extra context AND to make visual cues accessible
```

---

```jsx
<Tooltip defaults={{content: "Here is some text"}} {props}>Hover me</Tooltip>
```

## Examples

### Tooltip Positions

Tooltips can be attached to any of the four sides of an element using the `position` prop.

```js
<Stack>
  <Tooltip position="top" content="Top">
    <Icon size={16} name="help" />
  </Tooltip>
  <Tooltip position="bottom" content="Bottom">
    <Icon size={16} name="help" />
  </Tooltip>
  <Tooltip position="left" content="Left">
    <Icon size={16} name="help" />
  </Tooltip>
  <Tooltip position="right" content="Right">
    <Icon size={16} name="help" />
  </Tooltip>
</Stack>
```

### Long text

The Tooltip wraps long text by default to make it readable. Try to keep the content short and helpful for the user.

```js
<Tooltip
  position="top"
  content="This is a very long text. Please try to keep it no longer than 4 lines. The tooltip should be a short and helpful text."
>
  <Icon size={16} name="help" />
</Tooltip>
```
