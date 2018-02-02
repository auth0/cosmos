```meta
  category: Layout
```

`import List from 'cosmos/list'`

---

Use this component to layout a list of `components` vertically

```jsx
<List {props}>
  <div>one</div>
  <div>two</div>
  <div>three</div>
</List>
```

#### Examples

```js
<List label="Social">
  <Stack>
    <div>github</div> <div>GitHub</div> <Switch on />
  </Stack>
  <Stack>
    <div>google-oauth2</div> <div>Google</div> <Switch off />
  </Stack>
</List>
```
