```meta
  category: Actions
  description: Buttons are great to ask users for action
```

`import { Button } from 'auth0-cosmos'`

```jsx
<Button {props}>Button</Button>
```

## Examples

### Basic button

Buttons are great to ask users for action

```js
<Button>Save</Button>
```

### Button types

* Primary actions help attract attention to the main action
* Use secondary actions for actions that are not as important
* Link button for linky stuff, idk?
* Destructive buttons warn the user about it's effects. Proceed with caution.

```js
<div>
  <Stack>
    <Button>default</Button>
    <Button appearance="primary">primary</Button>
    <Button appearance="transparent">secondary</Button>
    <Button appearance="link">Clear</Button>
    <Button appearance="destructive">Delete</Button>
  </Stack>
</div>
```

### Button states

You can disable a button if you don't want the user to be able to click it. You can also add a spinner
to indicate that data is loading, or a success checkmark to indicate (for example) that data has been
saved successfully.

```js
<div>
  <Stack>
    <Button disabled>Disabled</Button>
    <Button loading>Button</Button>
    <Button success>Button</Button>
  </Stack>
</div>
```

### Icons in Buttons

Icon buttons work well in compact spaces. You can pick name of `icon` from [docs/Icon](/docs/Icon)

```js
<div>
  <Stack>
    <Button appearance="link" icon="copy" />
    <Button icon="copy" />
  </Stack>
</div>
```

### Label/Tooltips

Especially with buttons that only have an icon and no text, it might be helpful to add a label
which appear when a user hovers over a button.

```js
<Button icon="copy" label="Copy to clipboard" />
```
