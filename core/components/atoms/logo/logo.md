```meta
  category: Images
```

`import { Logo } from '@auth0/cosmos'`

```jsx
<Logo {props} />
```

## Examples

The `Logo` component exports an SVG version of the logo.

### Default logo

```js
<div>
  <div style={{ padding: 15 }}>
    <Stack>
      <Logo size="tiny" />
      <Logo size="small" />
      <Logo />
    </Stack>
  </div>
  <div style={{ marginTop: 10, padding: 15, backgroundColor: '#333' }}>
    <Stack>
      <Logo size="tiny" />
      <Logo size="small" />
      <Logo />
    </Stack>
  </div>
  <div style={{ padding: 15 }}>
    <Stack>
      <Logo color="dark" size="tiny" />
      <Logo color="dark" size="small" />
      <Logo color="dark" />
    </Stack>
  </div>
  <div style={{ marginTop: 10, padding: 15, backgroundColor: '#333' }}>
    <Stack>
      <Logo color="light" size="tiny" />
      <Logo color="light" size="small" />
      <Logo color="light" />
    </Stack>
  </div>
</div>
```

### Full logo

```js
<div>
  <div style={{ padding: 15 }}>
    <Stack>
      <Logo full size="tiny" />
      <Logo full size="small" />
      <Logo full />
    </Stack>
  </div>
  <div style={{ marginTop: 10, padding: 15, backgroundColor: '#333' }}>
    <Stack>
      <Logo full color="light" size="tiny" />
      <Logo full color="light" size="small" />
      <Logo full color="light" />
    </Stack>
  </div>
</div>
```
