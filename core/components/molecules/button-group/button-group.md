```meta
  category: Layout
  description: Use a ButtonGroup to put related buttons together
```

`import { ButtonGroup } from '@auth0/cosmos'`

---

```jsx
<ButtonGroup {props}>
  <Button icon={<Icon name="pencil" />
  <Button icon={<Icon name="copy" />
  <Button icon={<Icon name="delete" />
</ButtonGroup>
```

## Examples

When presenting actions inside lists and tables, you can use the Button Group.
In most other cases, these examples can be achieved by other more specialized components. For the submit and other actions of a form, you should check [Form Actions](#/component/form-actions). For presenting the main page actions, you should check [Page Header](#/component/page-header).

```js
<Stack>
  <ButtonGroup>
    <Button appearance="primary">Save changes</Button>
    <Button appearance="secondary" icon={<Icon name="play" />}>
      Try
    </Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button icon={<Icon name="pencil" />} />
    <Button icon={<Icon name="copy" />} />
    <Button icon={<Icon name="delete" />} />
  </ButtonGroup>
</Stack>
```

### Joining buttons

This is experimental and shouldn't be used yet.

```js
<Stack>
  <ButtonGroup compressed>
    <Button>Copy</Button>
    <Button>Paste</Button>
  </ButtonGroup>
  <ButtonGroup compressed>
    <Button icon={<Icon name="pencil" />} />
    <Button icon={<Icon name="copy" />} />
    <Button icon={<Icon name="delete" />} />
  </ButtonGroup>
</Stack>
```
