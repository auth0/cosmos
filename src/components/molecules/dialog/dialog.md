```meta
category: Layout
```

---

A <code>Dialog</code> builds on an <code>Overlay</code>, providing more styling and
structure around what is displayed. It allows setting a fixed width, and adds a
titlebar, close button, and a footer.

```jsx
<Dialog
  title="Example Dialog"
  onClose={() => {}}
  actions={[new Dialog.Action('OK', () => {}, 'primary'), new Dialog.Action('Cancel', () => {})]}
>
  Are you sure?
</Dialog>
```

## Example

Here's an example <code>Dialog</code>:

![dialog example](/screenshots/dialog.png)
