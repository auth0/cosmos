```meta
  category: Layout
  description: Use a ButtonGroup to put related buttons together
```

`import ButtonGroup from 'cosmos/button-group'`

---

## Examples

```js
<ButtonGroup>
  <Button primary>Save changes</Button>
  <Button>Clear</Button>
</ButtonGroup>
```

```js
<Stack>
  <ButtonGroup>
    <Button icon="pencil" />
    <Button icon="copy" />
    <Button icon="trash" />
  </ButtonGroup>
  <ButtonGroup>
    <Button link icon="pencil" />
    <Button link icon="copy" />
    <Button link icon="trash" />
  </ButtonGroup>
</Stack>
```
