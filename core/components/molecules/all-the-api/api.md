## Notes

- a prop across components should behave the same
- similar functionality should have the same prop
- enum prop with same name should have similar options
- enum prop with same name should have similar defaults
- enum options should be compatible (small avatar next to a small button should look good)
- similar rules around flexibility (unless intentionally locked)
- props should not conflict with each other (`<Button primary secondary>`)
- do not support two props to do the same thing
- use children to fill contents (unless intentionally locked)

## Alert

### Simple

```js
<Alert>This is the alert content</Alert>
```

### appearances

The prop is called `type`

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

> 👍 uses children

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
  />
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

> 👎 conflicting props

> 👎 multiple props affect the same feature

## Badge

default badge

```js
<Badge>99</Badge>
```

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

> 👍 uses children

## Breadcrumb

### simple

```js
<Breadcrumb>
  <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
  <Breadcrumb.Link href="/parent/page">Page</Breadcrumb.Link>
</Breadcrumb>
```

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

> 👍 uses children

## Button

### default

```js
<Button>Button</Button>
```
