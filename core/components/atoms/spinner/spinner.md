```meta
category: Miscellaneous
desciption: Spinner is useful to notify the user of background activity
```

```jsx
<Spinner {props} />
```

## Examples

### Default spinner:

```js
<div style={{ padding: '20px' }}>
  <Spinner />
</div>
```

### Invert for dark background

```js
<div style={{ background: '#333', padding: '20px' }}>
  <Spinner type="inverse" />
</div>
```

### Gray for variable backgrounds

Sometimes you may have a component that can have light or dark backgrounds in an uncontrolled mode. A gray spinner will look fine on both.

```js
<Stack>
  <div style={{ background: '#333', padding: '20px' }}>
    <Spinner type="gray" />
  </div>
  <div style={{ padding: '20px' }}>
    <Spinner type="gray" />
  </div>
</Stack>
```
