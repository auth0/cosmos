```meta
  category: Actions
  description: Buttons are great to ask users for action
```

`import { Button } from '@auth0/cosmos'`

```jsx
<Button {props}>Button</Button>
```

## Examples

### Basic button

```js
<Button>Save</Button>
```

### Button appearance

The `appearance` prop defines the overall visual style of the Button. You can use
this prop to indicate to the user the purpose or importance of the button, or call
their attention to it.

- **Primary buttons** can be used to indicate an important action (for example, submitting a form).
- **CTA buttons** can be used to draw attention to the main call-to-action on a page.
- **Secondary buttons** can be used for actions which are less important, an usually follow a Primary button.
- **Default buttons** are used for the main action in places where the primary button is already in used. For example, for actions
- **Destructive buttons** indicate that the user should be cautious when triggering it, for example, when deleting content.
- **Link buttons** will cause the button to be styled similarly to a hyperlink, and are primarily used
  when the button is embedded in another component (for example, a form field).

```js
<div>
  <Stack>
    <Button appearance="cta">cta</Button>
    <Button appearance="primary">primary</Button>
    <Button appearance="secondary">secondary</Button>
    <Button>default</Button>
    <Button appearance="destructive">destructive</Button>
    <Button appearance="link" icon="copy" label="I'm a button, but look like a link." />
  </Stack>
</div>
```

### Button sizes

You can create buttons of various sizes.

- Large buttons are used for calls to action and in empty page states.
- Default-sized buttons are used in most situations, like in Form Actions and Dialogs.
- Compressed buttons are used for filters or inline forms.
- Small buttons are used inside tables: in editable rows, or row actions.

```js
<div>
  <Stack>
    <Button size="large">large</Button>
    <Button>default</Button>
    <Button size="compressed">compressed</Button>
    <Button size="small">small</Button>
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
    <Button loading>Loading</Button>
    <Button success>Success</Button>
  </Stack>
</div>
```

### Icon buttons

Icon buttons work well in compact spaces. You can pick name of `icon` from [docs/Icon](#/component/icon)

```js
<div>
  <Stack>
    <Button appearance="link" icon="copy" />
    <Button icon="copy" />
  </Stack>
</div>
```

### Adding tooltips

You can set the `label` property to add a tooltip that will appear when the user hovers over
the button. This can help clarify the purpose of the button, and is especially useful with
buttons that only have an icon and no text.

```js
<Button icon="copy" label="Copy to clipboard" />
```
