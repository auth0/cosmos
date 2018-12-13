## Some API thoughts:

- a prop across components should behave the same
- similar functionality should have the same prop
- enum prop with same name should have similar options
- enum prop with same name should have similar defaults
- enum options should be compatible (small avatar next to a small button should look good)
- similar rules around flexibility (unless intentionally locked)
- props should not conflict with each other (`<Button primary secondary>`)
- do not support two props to do the same thing
- use children to fill contents (unless intentionally locked)

## Repeating patterns (WIP):

> Note: These are just patterns, not judgements.
>
> Some of these inconsistencies are a result of how the API has evolved and can be minimised
>
> Some of these have good reasons to be inconsistent - We can acknowledge it as a better solution

### appearance

```txt
// From the docs:

Alert: Style of alert to show
Badge: The visual style used to convey the label's purpose
Button: The visual style used to convey the button's purpose
```

```js
<div>
  <Stack>
    <Alert type="default">default</Alert>
    <Alert type="information">information</Alert>
    <Alert type="success">success</Alert>
    <Alert type="warning">warning</Alert>
    <Alert type="danger">danger</Alert>
  </Stack>
  <br />
  <Stack>
    <Badge appearance="default">123</Badge>
    <Badge appearance="information">99</Badge>
    <Badge appearance="success">345</Badge>
    <Badge appearance="warning">6</Badge>
    <Badge appearance="danger">55</Badge>
  </Stack>
  <br />
  <Stack>
    <Button>default</Button>
    <Button appearance="primary">primary</Button>
    <Button appearance="secondary">secondary</Button>
    <Button appearance="cta">cta</Button>
    <Button appearance="link">link</Button>
    <Button appearance="destructive">destructive</Button>
  </Stack>
</div>
```

> 👎 `Button` and `Badge` call it `appearance`, `Alert` calls it `types`

> 👍 `Alert` and `Badge` have the same options for `appearance`

### size

```txt
// From the docs:

Avatar: The size of the avatar
Button: The size of the button
```

```js
<div>
  <Stack>
    <Avatar type="user" size="xsmall" image="https://twitter-avatar.now.sh/evilrabbit_" />
    <Avatar type="user" size="small" image="https://twitter-avatar.now.sh/evilrabbit_" />
    <Avatar type="user" size="medium" image="https://twitter-avatar.now.sh/evilrabbit_" />
    <Avatar type="user" size="large" image="https://twitter-avatar.now.sh/evilrabbit_" />
    <Avatar type="user" size="xlarge" image="https://twitter-avatar.now.sh/evilrabbit_" />
    <Avatar type="user" size="xxlarge" image="https://twitter-avatar.now.sh/evilrabbit_" />
  </Stack>
  <br />
  <Stack>
    <Button size="small">small</Button>
    <Button size="compressed">compressed</Button>
    <Button>default</Button>
    <Button size="large">large</Button>
  </Stack>
</div>
```

> 👎 inconsistent options across the same prop

### icon

```txt
// From the docs:

Alert: Name of icon
Avatar: An icon to display
Button: Name of icon
Breadcrumb: -
```

```js
<Stack>
  <Alert icon="delete">alert</Alert>
  <Avatar icon="delete" />
  <Button icon="delete">delete</Button>
  <Breadcrumb>
    <Breadcrumb.Link href="/home" icon="home-fill">
      Home
    </Breadcrumb.Link>
  </Breadcrumb>
</Stack>
```

> 👍 consistent API for icon across these components (till now)

### image

```js
<Stack>
  <Avatar image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar image={<Image source="https://twitter-avatar.now.sh/evilrabbit_" />} />
</Stack>
```

## All the components:

## Alert

### Simple

```js
<Alert>This is the alert content</Alert>
```

👍 uses children

### appearances

The prop is called `type`: `default, information, success, warning, danger`

```js
<div>
  <Alert type="default">This is the alert content</Alert>
  <Alert type="information">This is the alert content</Alert>
  <Alert type="success">This is the alert content</Alert>
  <Alert type="warning">This is the alert content</Alert>
  <Alert type="danger">This is the alert content</Alert>
</div>
```

⚠️ Should this be called `appearance` instead?

### with title

```js
<Alert title="A title">This is the alert content</Alert>
```

### with link

```js
<Alert link="/test">This is the alert content</Alert>
```

### with icon

```js
<Alert icon="delete">This is the alert content</Alert>
```

⚠️ uses `icon` instead if `Icon name`, are the `icon` styles intentionally locked down?

### flexible children

```js
<Alert>
  <Text type="strong">A title</Text> This is the alert content <Link href="/test">Read more</Link>
</Alert>
```

⚠️ Is this kind of redundant, what role does `title` and `link` prop play?

### behaviour customisations

```js
<Alert dismissible={false} dismissAfterSeconds={5} onDismiss={() => {}}>
  This is the alert content
</Alert>
```

## Avatar

### default

```js
<Avatar image="https://twitter-avatar.now.sh/evilrabbit_" />
```

### type of avatar

user/medium is the default

```js
<Stack>
  <Avatar type="user" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="resource" image="https://twitter-avatar.now.sh/evilrabbit_" />
</Stack>
```

### sizes

`xsmall, small, medium, large, xlarge, xxlarge`

```js
<Stack>
  <Avatar type="user" size="xsmall" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="user" size="small" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="user" size="medium" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="user" size="large" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="user" size="xlarge" image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar type="user" size="xxlarge" image="https://twitter-avatar.now.sh/evilrabbit_" />
</Stack>
```

### image

supports `url | component`

```js
<Stack>
  <Avatar image="https://twitter-avatar.now.sh/evilrabbit_" />
  <Avatar image={<Image source="https://twitter-avatar.now.sh/evilrabbit_" />} />
</Stack>
```

⚠️ what's the use case to support both? (especially `Image`)

### icon

Accepts name of `icon`

```js
<Avatar icon="delete" />
```

```js
<Stack>
  <Avatar icon="delete" />
  <Avatar image="https://twitter-avatar.now.sh/evilrabbit_" icon="delete" />
</Stack>
```

⚠️ conflicting props: icon overrides image
⚠️ uses `icon` instead if `<Icon>`, are the `icon` styles intentionally locked down?

### initials

```js
<Stack>
  <Avatar initials="ER" />
  <Avatar initials="ER" email="evil@rabbit.com" />
</Stack>
```

🐞 initials only work with email

### email

pulls image from gravatar based on email

```js
<Stack>
  <Avatar email="siddharth.kshetrapal@gmail.com" />
  <Avatar initials="ER" email="siddharth.kshetrapal@gmail.com" />
</Stack>
```

🐞 gravatar doesn't work without initials?
⚠️ is gravatar something we want to internalise in cosmos?

```js
<Stack>
  <Avatar email="example@auth0.com" initials="AB" />
  <Avatar
    email="example@auth0.com"
    initials="AB"
    image="https://twitter-avatar.now.sh/evilrabbit_"
  />
</Stack>
```

⚠️ conflicting props: image overrides initial (probably a feature not a bug?)
you can have both, initials are a fallback for image

```js
<Stack>
  <Avatar email="example@auth0.com" initials="AB" />
  <Avatar email="example@auth0.com" initials="AB" icon="delete" />
</Stack>
```

⚠️ conflicting props: icon overrides initials

> Avatar summary:

> 👎 conflicting props

> 👎 multiple props affect the same feature

## Badge

default badge

```js
<Badge>99</Badge>
```

👍 uses children

```js
<Badge>whatever i wish</Badge>
```

⚠️ is it worth adding a validation on child: Proptypes.number?

### appearance

```js
<Stack>
  <Badge appearance="default">123</Badge>
  <Badge appearance="information">99</Badge>
  <Badge appearance="success">345</Badge>
  <Badge appearance="warning">6</Badge>
  <Badge appearance="danger">55</Badge>
</Stack>
```

ℹ️ uses `appearance` for appearance

## Breadcrumb

### simple

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

👍 uses children

### with `icon`

```js
<Stack>
  <Breadcrumb>
    <Breadcrumb.Link href="/home" icon="home-fill">
      Home
    </Breadcrumb.Link>
    <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  </Breadcrumb>
  <Breadcrumb>
    <Breadcrumb.Link href="/home" icon="arrow-left-fill">
      Back to where I came from
    </Breadcrumb.Link>
  </Breadcrumb>
</Stack>
```

⚠️ are the `icon` styles intentionally locked down?

## Button

### default

```js
<Button>Button</Button>
```

### appearance

`default, primary, secondary, cta, link, destructive`

```js
<Stack>
  <Button>default</Button>
  <Button appearance="primary">primary</Button>
  <Button appearance="secondary">secondary</Button>
  <Button appearance="cta">cta</Button>
  <Button appearance="link">link</Button>
  <Button appearance="destructive">destructive</Button>
</Stack>
```

### size

```js
<Stack>
  <Button size="large">large</Button>
  <Button>default</Button>
  <Button size="compressed">compressed</Button>
  <Button size="small">small</Button>
</Stack>
```

### states

```js
<Stack>
  <Button disabled>Disabled</Button>
  <Button loading>Loading</Button>
  <Button success>Success</Button>
</Stack>
```

```js
<Stack>
  <Button disabled loading>
    disabled + loading
  </Button>
  <Button disabled success>
    disabled + success
  </Button>
  <Button loading success>
    loading + success
  </Button>
</Stack>
```

⚠️ are these combinations conflicting or valid?

### icons

```js
<ButtonGroup>
  <Button icon="delete">Delete</Button>
  <Button icon="delete" iconAlign="right">
    Delete
  </Button>
</ButtonGroup>
```

```js
<div>
  <Stack>
    <Button icon="delete">Delete</Button>
    <Button icon="delete" appearance="primary">
      Delete
    </Button>
    <Button icon="delete" appearance="secondary">
      Delete
    </Button>
    <Button icon="delete" appearance="cta">
      Delete
    </Button>
    <Button icon="delete" appearance="link">
      Delete
    </Button>
    <Button icon="delete" appearance="destructive">
      Delete
    </Button>
  </Stack>
  <Stack>
    <Button icon="delete" />
    <Button icon="delete" appearance="primary" />
    <Button icon="delete" appearance="secondary" />
    <Button icon="delete" appearance="cta" />
    <Button icon="delete" appearance="link" />
    <Button icon="delete" appearance="destructive" />
  </Stack>
</div>
```

⚠️ icon color is always blue if there is no text, looks like a 🐞 bug?

## Checkbox

### default

```js
<Stack>
  <Checkbox name="example" onChange={evt => console.log(evt)} value="one" checked={true}>
    This is a checked checkbox
  </Checkbox>
  <Checkbox name="example" onChange={evt => console.log(evt)} value="one" checked={false}>
    This is an unchecked checkbox
  </Checkbox>
</Stack>
```

This one seems pretty okay, it uses the standard `onChange` name for the action handler. And it uses the standard HTML attributes like `value` and `checked` for state.

## end

click this to anchor (in url #end) to end of page in dev mode
