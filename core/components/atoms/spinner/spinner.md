```meta
category: Miscellaneous
desciption: Spinner is useful to notify the user of background activity
```

---

## Examples

### Default spinner:

```jsx
<Spinner {props} />
```

**Warning:** The default spinner size will change from `small` to `medium` on version 1.0.0 of Cosmos.

### Invert for dark background

```js
<div style={{ background: '#333', padding: '20px' }}>
  <div style={{ marginTop: 10 }}>
    <Spinner size="small" inverse />
  </div>
  <div style={{ marginTop: 10 }}>
    <Spinner size="medium" inverse />
  </div>
  <div style={{ marginTop: 10 }}>
    <Spinner size="large" inverse />
  </div>
</div>
```
