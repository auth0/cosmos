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

## Heading

### default

```js
<Heading>This is a heading</Heading>
```

### different sizes

```js
<div>
  <Heading size={1}>Heading #1</Heading>
  <Heading size={2}>Heading #2</Heading>
  <Heading size={3}>Heading #3</Heading>
  <Heading size={4}>Heading #4</Heading>
</div>
```

⚠️ we don't support 5 and 6 sizes (h5 and h6).

️️⚠️ heading sizes are directly related to element tags. We should support changing the element independently of the size.

### with ids

```js
<div>
  <Heading id="heading-1" size={1}>
    Heading #1
  </Heading>
  <Heading id="heading-2" size={2}>
    Heading #2
  </Heading>
  <Heading id="heading-3" size={3}>
    Heading #3
  </Heading>
  <Heading id="heading-4" size={4}>
    Heading #4
  </Heading>
</div>
```

⚠️ `id` is something used frequently in headings (for anchors), it should be documented as part of the API.

## Image

### default

```js
<Image source="https://images.unsplash.com/photo-1522251670181-320150ad6dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" />
```

️⚠️ why do we use `source` instead of `src`. It is something that users have to learn (they will be used to `src`). Can you pass something to `source` you can't pass to `src`?

### with alt

```js
<Image
  source="https://images.unsplash.com/photo-1522251670181-320150ad6dab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
  alt="hand holding a key"
/>
```

⚠️ the `alt` prop should be required. and automatically generated on components that use the Image component inside. (eg. we can generate the `alt` prop from the user's/resource's name in Avatar and AvatarBlock)

### with base64 source

```js
<Image source="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ2MnB4IiBoZWlnaHQ9IjE2OHB4IiB2aWV3Qm94PSIwIDAgNDYyIDE2OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMC4zICg3ODkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5VbnRpdGxlZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHNrZXRjaDp0eXBlPSJNU1BhZ2UiPgogICAgICAgIDxnIGlkPSJsb2dvLWJsdWUtaG9yaXpvbnRhbCIgc2tldGNoOnR5cGU9Ik1TTGF5ZXJHcm91cCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcHBlZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg4LjAwMDAwMCwgNDQuMDAwMDAwKSIgZmlsbD0iIzE2MjE0RCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0Ni41MTcsMC4xMSBDMjM4LjQzOSwwLjExIDIzMS42MDcsMy45MTYgMjI2Ljc1OSwxMS4xMTUgQzIyMS45NCwxOC4yNzEgMjE5LjM5MywyOC4yNiAyMTkuMzkzLDQwIEMyMTkuMzkzLDUxLjc0IDIyMS45NCw2MS43MjkgMjI2Ljc1OSw2OC44ODQgQzIzMS42MDcsNzYuMDg0IDIzOC40MzksNzkuODg5IDI0Ni41MTcsNzkuODg5IEMyNTQuNTk1LDc5Ljg4OSAyNjEuNDI3LDc2LjA4NCAyNjYuMjc1LDY4Ljg4NCBDMjcxLjA5Myw2MS43MjkgMjczLjY0LDUxLjc0IDI3My42NCw0MCBDMjczLjY0LDI4LjI2IDI3MS4wOTMsMTguMjcxIDI2Ni4yNzUsMTEuMTE1IEMyNjEuNDI3LDMuOTE2IDI1NC41OTUsMC4xMSAyNDYuNTE3LDAuMTEgTDI0Ni41MTcsMC4xMSBaIE0yNDYuNTE3LDcwLjAwNSBDMjQyLjY1NSw3MC4wMDUgMjM5LjYwNCw2Ny44MiAyMzcuMTg3LDYzLjMyNCBDMjM0LjI2OCw1Ny44OTMgMjMyLjY2LDQ5LjYxIDIzMi42Niw0MCBDMjMyLjY2LDMwLjM5IDIzNC4yNjgsMjIuMTA2IDIzNy4xODcsMTYuNjc2IEMyMzkuNjA0LDEyLjE4IDI0Mi42NTUsOS45OTQgMjQ2LjUxNyw5Ljk5NCBDMjUwLjM3OCw5Ljk5NCAyNTMuNDMsMTIuMTggMjU1Ljg0NywxNi42NzYgQzI1OC43NjYsMjIuMTA2IDI2MC4zNzMsMzAuMzg5IDI2MC4zNzMsNDAgQzI2MC4zNzMsNDkuNjExIDI1OC43NjYsNTcuODk1IDI1NS44NDcsNjMuMzI0IEMyNTMuNDMsNjcuODIgMjUwLjM3OCw3MC4wMDUgMjQ2LjUxNyw3MC4wMDUgTDI0Ni41MTcsNzAuMDA1IFogTTcxLjQ1LDI5LjE3MiBMNzEuNDUsNjMuNDg0IEM3MS40NSw3Mi41MyA3OC44MSw3OS44ODkgODcuODU2LDc5Ljg4OSBDOTUuNzQ2LDc5Ljg4OSAxMDEuNzA3LDc1Ljk3NSAxMDMuOTAyLDc0LjI5MSBDMTA0LjAyNCw3NC4xOTcgMTA0LjE4NCw3NC4xNjkgMTA0LjMzMSw3NC4yMTYgQzEwNC40NzgsNzQuMjYzIDEwNC41OTIsNzQuMzc5IDEwNC42MzcsNzQuNTI3IEwxMDUuOTYxLDc4Ljg2IEwxMTUuNzM3LDc4Ljg2IEwxMTUuNzM3LDI5LjE3MiBMMTAzLjE3NSwyOS4xNzIgTDEwMy4xNzUsNjYuMzI2IEMxMDMuMTc1LDY2LjUwMSAxMDMuMDc2LDY2LjY2MiAxMDIuOTIxLDY2Ljc0MyBDMTAwLjU1OSw2Ny45NjEgOTUuODk5LDcwLjAwNiA5MS4yMzEsNzAuMDA2IEM4Ny4yNTIsNzAuMDA2IDg0LjAxMiw2Ni43NjggODQuMDEyLDYyLjc4NyBMODQuMDEyLDI5LjE3MiBMNzEuNDUsMjkuMTcyIEw3MS40NSwyOS4xNzIgWiBNMTk3LjIzNyw3OC44NTkgTDIwOS44LDc4Ljg1OSBMMjA5LjgsNDQuNTQ3IEMyMDkuOCwzNS41MDEgMjAyLjQ0LDI4LjE0MSAxOTMuMzk0LDI4LjE0MSBDMTg2LjczNSwyOC4xNDEgMTgxLjM5MywzMS4wMDQgMTc4LjgwMiwzMi43MSBDMTc4LjY1NywzMi44MDUgMTc4LjQ3MywzMi44MTMgMTc4LjMyMiwzMi43MzEgQzE3OC4xNzEsMzIuNjQ5IDE3OC4wNzUsMzIuNDkxIDE3OC4wNzUsMzIuMzE4IEwxNzguMDc1LDEuMTQxIEwxNjUuNTEzLDEuMTQxIEwxNjUuNTEzLDc4Ljg1OSBMMTc4LjA3NSw3OC44NTkgTDE3OC4wNzUsNDEuNzA0IEMxNzguMDc1LDQxLjUyOSAxNzguMTc0LDQxLjM2OCAxNzguMzMsNDEuMjg4IEMxODAuNjkxLDQwLjA2OSAxODUuMzUyLDM4LjAyNSAxOTAuMDE5LDM4LjAyNSBDMTkxLjk0NywzOC4wMjUgMTkzLjc2LDM4Ljc3NiAxOTUuMTIzLDQwLjEzOSBDMTk2LjQ4Niw0MS41MDIgMTk3LjIzNiw0My4zMTYgMTk3LjIzNiw0NS4yNDMgTDE5Ny4yMzYsNzguODU5IEwxOTcuMjM3LDc4Ljg1OSBaIE0xMjQuNzkyLDM5LjA1NSBMMTMyLjQzOCwzOS4wNTUgQzEzMi42OTcsMzkuMDU1IDEzMi45MDcsMzkuMjY1IDEzMi45MDcsMzkuNTI0IEwxMzIuOTA3LDY2Ljg1OCBDMTMyLjkwNyw3NC4wNDMgMTM4Ljc1Myw3OS44ODggMTQ1LjkzOCw3OS44ODggQzE0OC41NDMsNzkuODg4IDE1MS4xMTMsNzkuNTEyIDE1My41ODUsNzguNzcgTDE1My41ODUsNjkuNzk2IEMxNTIuMTQzLDY5LjkyMyAxNTAuNDg1LDcwLjAwNSAxNDkuMzEzLDcwLjAwNSBDMTQ3LjE5Myw3MC4wMDUgMTQ1LjQ2OSw2OC4yOCAxNDUuNDY5LDY2LjE2MSBMMTQ1LjQ2OSwzOS41MjMgQzE0NS40NjksMzkuMjY0IDE0NS42NzksMzkuMDU0IDE0NS45MzgsMzkuMDU0IEwxNTMuNTg1LDM5LjA1NCBMMTUzLjU4NSwyOS4xNzEgTDE0NS45MzgsMjkuMTcxIEMxNDUuNjc5LDI5LjE3MSAxNDUuNDY5LDI4Ljk2MSAxNDUuNDY5LDI4LjcwMiBMMTQ1LjQ2OSwxMi4yOTUgTDEzMi45MDcsMTIuMjk1IEwxMzIuOTA3LDI4LjcwMiBDMTMyLjkwNywyOC45NjEgMTMyLjY5NywyOS4xNzEgMTMyLjQzOCwyOS4xNzEgTDEyNC43OTIsMjkuMTcxIEwxMjQuNzkyLDM5LjA1NSBMMTI0Ljc5MiwzOS4wNTUgWiBNNTEuMzYxLDc4Ljg1OSBMNjQuNDI5LDc4Ljg1OSBMNDQuNTU1LDkuNTUgQzQyLjk2MiwzLjk5MiAzNy44MTEsMC4xMSAzMi4wMjksMC4xMSBDMjYuMjQ3LDAuMTEgMjEuMDk2LDMuOTkyIDE5LjUwMiw5LjU1IEwtMC4zNzIsNzguODU5IEwxMi42OTcsNzguODU5IEwxOC40NDksNTguNzk4IEMxOC41MDcsNTguNTk3IDE4LjY5MSw1OC40NTkgMTguOSw1OC40NTkgTDQ1LjE1OCw1OC40NTkgQzQ1LjM2Nyw1OC40NTkgNDUuNTUyLDU4LjU5NyA0NS42MDksNTguNzk4IEw1MS4zNjEsNzguODU5IEw1MS4zNjEsNzguODU5IFogTTQyLjA1Niw0OC41NzYgTDIyLjAwNCw0OC41NzYgQzIxLjg1Nyw0OC41NzYgMjEuNzE4LDQ4LjUwNyAyMS42MjksNDguMzg4IEMyMS41NDEsNDguMjcyIDIxLjUxMyw0OC4xMTkgMjEuNTUzLDQ3Ljk3OCBMMzEuNTc5LDEzLjAxMiBDMzEuNjM3LDEyLjgxMSAzMS44MjEsMTIuNjczIDMyLjAzLDEyLjY3MyBDMzIuMjM5LDEyLjY3MyAzMi40MjMsMTIuODExIDMyLjQ4LDEzLjAxMiBMNDIuNTA3LDQ3Ljk3OCBDNDIuNTQ3LDQ4LjEyIDQyLjUxOSw0OC4yNzIgNDIuNDMsNDguMzg4IEM0Mi4zNDIsNDguNTA3IDQyLjIwMyw0OC41NzYgNDIuMDU2LDQ4LjU3NiBMNDIuMDU2LDQ4LjU3NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJDbGlwcGVkIiBmaWxsPSIjRUI1NDI0Ij4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTE5LjU1NSwxMzUuODYxIEwxMDIuNzA1LDgzLjk5NyBMMTQ2LjgxMyw1MS45NTIgTDkyLjI5MSw1MS45NTIgTDc1LjQ0LDAuMDkgTDc1LjQzNSwwLjA3NiBMMTI5Ljk2NSwwLjA3NiBMMTQ2LjgyLDUxLjk0NyBMMTQ2LjgyMSw1MS45NDYgTDE0Ni44MzUsNTEuOTM4IEMxNTYuNjIzLDgyLjAzIDE0Ni41NDIsMTE2LjI1NiAxMTkuNTU1LDEzNS44NjEgTDExOS41NTUsMTM1Ljg2MSBaIE0zMS4zMjEsMTM1Ljg2MSBMMzEuMzA3LDEzNS44NzEgTDc1LjQyNiwxNjcuOTI0IEwxMTkuNTU1LDEzNS44NjIgTDc1LjQ0LDEwMy44MDggTDMxLjMyMSwxMzUuODYxIEwzMS4zMjEsMTM1Ljg2MSBaIE00LjA1Miw1MS45MzkgTDQuMDUyLDUxLjkzOSBDLTYuMjUyLDgzLjY2IDUuNzA5LDExNy4yNzIgMzEuMzEyLDEzNS44NjcgTDMxLjMxNiwxMzUuODUxIEw0OC4xNjgsODMuOTkgTDQuMDcsNTEuOTUxIEw1OC41NzksNTEuOTUxIEw3NS40MzEsMC4wODkgTDc1LjQzNSwwLjA3NSBMMjAuOTAyLDAuMDc1IEw0LjA1Miw1MS45MzkgTDQuMDUyLDUxLjkzOSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
```

I'm not sure if we should support/encourage authors to do this. Let's discuss about it.

⚠️ **We're missing some native `<img />` attributes like `crossorigin`, `sizes`, and `srcset`.**

## Link

### default

```js
<Link href="https://www.auth0.com/">Go to Auth0.com</Link>
```

### controlled mode

```js
<Link
  onClick={event => {
    event.preventDefault()
    console.log(event)
  }}
  href="https://auth0.com"
>
  Click me!
</Link>
```

⚠️ why do we support this? shouldn't we encourage to use a Button with type `link` instead?

Also, we haven't tested nor included examples about our `Link` being used along Next's or Gatsby's one. It would be nice to have.

## Paragraph

### default

```js
<Paragraph>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
  in culpa qui officia deserunt mollit anim id est laborum.
</Paragraph>
```

Paragraph is pretty simple, I don't have too much to say here.

### spaced

```js
<div>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Paragraph>
</div>
```

### with bold and emphatized text

```js
<Paragraph>
  <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate <em>velit esse cillum dolore eu fugiat nulla pariatur.</em> Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</Paragraph>
```

## Select

```js
<Select
  placeholder="Select an option..."
  options={[
    { text: 'One', value: 1, disabled: true },
    { text: 'Two', value: 2 },
    { text: 'Three', value: 3 }
  ]}
  onChange={(event, x) => console.log(event.target.value)}
/>
```

- Should we change this into a composable API? (with `Select.Option`, `Select.Group`).
- Currently, when `onChange` is called, you have to access to `event.target.value` to get the value. We could pass the value as a second argument.

## Spinner

### default

```js
<Spinner />
```

Spinner is another very straight-forward component.

- Should we add a determinate mode (maybe for import/export of users, migrations, loading processes where we know how much progress is made at any time)

### inverse

```js
<div style={{ background: '#333', padding: '20px' }}>
  <Stack>
    <div style={{ marginTop: 10 }}>
      <Spinner size="small" inverse />
    </div>
    <div style={{ marginTop: 10 }}>
      <Spinner size="medium" inverse />
    </div>
    <div style={{ marginTop: 10 }}>
      <Spinner size="large" inverse />
    </div>
  </Stack>
</div>
```

### normal

```js
<div style={{ padding: '20px' }}>
  <Stack>
    <div style={{ marginTop: 10 }}>
      <Spinner size="small" />
    </div>
    <div style={{ marginTop: 10 }}>
      <Spinner size="medium" />
    </div>
    <div style={{ marginTop: 10 }}>
      <Spinner size="large" />
    </div>
  </Stack>
</div>
```

## Switch

### state prop

```js
<Stack>
  <Switch /> <Switch on />
</Stack>
```

### event handler

```js
<Stack>
  <Switch onToggle={_ => _} />
</Stack>
```

⚠️ onToggle should probably be called onChange to match other data input elements

- accessibleLabels: we can probably just call it labels (and make them mandatory)

- hideAccessibleLabels: we had to introduce this prop to hide labels without breaking, we can get rid of this now

- labelPosition: child position prop, will contrast with other position props

## Tag

```js
<Tag onClick={_ => _} onRemove={_ => _}>
  Example
</Tag>
```

- onClick is a bad prop because it restricts to click events (not keyboard, tap, etc.), should call it `onSelect` maybe

- `onRemove` sounds like a good prop, let's contrast this with other destructive props

### Text Input

```js
<TextInput type="text" placeholder="Placeholder text" size="default" />
```

- onChange: great prop
- sizes: it has 4 sizes: default, large, small, compressed. we should 1) match this with size from other components 2) rename default, that's not a size
- actions: this takes a shap {label, icon, handler}, we should replace this with a button with property overriding (must be blue icon of fixed size)
- appearance?: `code` and `masked` are behaviour related appearances, we should merge them? (masked also makes the input readonly which is behavior but related to appearance?)
- there's a deprecated `error` prop, we just need to delete it at some point

### Text Area

```js
<TextArea length={3} resizable placeholder="Placeholder text" />
```

- length: this is a size prop, we should 1) rename it for consistency, give enum options instead of rows?
- code: same concerns as text-input, is this an appearance?
- actions: same concerns as text-input
- resizable: interesting prop, i wonder if there's a default here. when/why would you want to restrict user resizing?

### Text

```js
<Stack>
  <Text type="subdued">Subdued text</Text>
  <Text type="allcaps">All caps</Text>
  <Text type="strong">Strong text</Text>
</Stack>
```

- appearance property, let's call it appearance instead of type

### Tooltip

```js
<Tooltip content="Here is some text" position="top">
  Hover me
</Tooltip>
```

- position: this seems consistent, great!
- content: this is tricky, we want the prop to be named the same when it's explicit with a <Tooltip> or implicit with a <Button appearance="icon" title="something">, there's probably an accessibility name we can borrow - title / label / something else?
- defaultVisible: should we just call this isVisible? it's not like you can hide it (unlike Alerts contrast the API with it)

## end

click this to anchor (in url #end) to end of page in dev mode
