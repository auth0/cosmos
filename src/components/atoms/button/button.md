```meta
  category: Actions
```

`import Button from 'cosmos/button'`

```jsx
<Button {props}>Button</Button>
```

---

## Examples

#### Basic button

Buttons are great to ask users for action

```js
<Button>Save</Button>
```

#### Button types

* Primary actions help attract attention to the main action
* Use secondary actions for actions that are not as important
* Link button for linky stuff, idk?
* Destructive buttons warn the user about it's effects. Proceed with caution.

```js multiple
render(
  <div>
    <Button>default</Button>
    <Button primary>primary</Button>
    <Button primaryAlt>primary alt</Button>
    <Button transparent>secondary</Button>
    <Button link>Clear</Button>
    <Button destructive>Delete</Button>
  </div>
)
```

#### Button states

Disable a button if you don't want the user isn't allowed to click on it

```js multiple
render(
  <div>
    <Button disabled>Disabled</Button>
    <Button loading>Button</Button>
    <Button success>Button</Button>
  </div>
)
```

#### Icons in Buttons

Icon buttons work well in compact spaces. You can pick name of `icon` from [docs/Icon](/docs/Icon)

```js multiple
render(
  <div>
    <Button link icon="copy" />
    <Button icon="copy" />
  </div>
)
```
