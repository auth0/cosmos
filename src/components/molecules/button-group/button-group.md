```meta
  category: Layout
  description: Use a ButtonGroup to put related buttons together
```

`import ButtonGroup from 'cosmos/button-group'`

---

```jsx
<ButtonGroup {props}>
  <Button primary>Save changes</Button>
  <Button>Clear</Button>
</ButtonGroup>
```

## Examples

```js
<Stack>
  <ButtonGroup>
    <Button primary>Save changes</Button>
    <Button>Clear</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="trash" />
  </ButtonGroup>
</Stack>
```

```js
<Stack>
  <ButtonGroup compressed>
    <Button>Save changes</Button>
    <Button>Clear</Button>
  </ButtonGroup>
  <ButtonGroup compressed>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="trash" />
  </ButtonGroup>
</Stack>
```
