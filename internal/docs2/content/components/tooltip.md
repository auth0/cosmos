---
title: Tooltip
componentName: Tooltip
description: Use tooltips for giving extra context AND to make visual cues accessible
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
    <Icon name="help" />
  </Tooltip>
  <Tooltip position="bottom" content="Bottom">
    <Icon name="help" />
  </Tooltip>
  <Tooltip position="left" content="Left">
    <Icon name="help" />
  </Tooltip>
  <Tooltip position="right" content="Right">
    <Icon name="help" />
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
  <Icon name="help" />
</Tooltip>
```

### Tooltip for input actions

You can use a special variation of the tooltip which is made for input actions.

It does recieve a `content` object with the following keys:

- `default`: Is the default text to show in the tooltip (same as `content` in a normal tooltip).
- `loading`: Is the text will show if the child button `onClick` handler is an async function (Promise) while it's loading.
- `success`: Is the text will show when the `onClick` returns (if it's a sync function) or resolves (if it's async).
- `error`: If the text will show if the `onClick` is an async function and is rejected.

#### Example

```js
<TextInput
  type="text"
  placeholder="Enter some text"
  actions={[
    <Tooltip.Action
      content={{
        default: 'Copy',
        success: 'Copied!',
      }}
    >
      <Button icon="copy" onClick={e => console.log(e)} />
    </Tooltip.Action>,
    <Tooltip.Action
      content={{
        default: 'Do work',
        loading: 'Working...',
        success: 'Done!',
        error: 'Could not work',
      }}
    >
      <Button icon="wrench" onClick={e => console.log(e)} />
    </Tooltip.Action>,
    <Tooltip.Action
      content={{
        default: 'Do work',
        loading: 'Working...',
        success: 'Done!',
        error: 'Could not work',
      }}
    >
      <Button icon="reload" onClick={e => console.log(e)} />
    </Tooltip.Action>,
    <Button icon="delete" onClick={e => console.log(e)} />,
  ]}
/>
```
