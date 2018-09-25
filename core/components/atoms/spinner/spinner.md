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

### Invert for dark background

```js
<div style={{ background: '#333', padding: '20px' }}>
	<div style={{ marginTop: 10 }}>
		<Spinner size="small" inverse />
	</div>
	<div style={{ marginTop: 10 }}>
		<Spinner inverse />
	</div>
	<div style={{ marginTop: 10 }}>
		<Spinner size="large" inverse />
	</div>
</div>
```
