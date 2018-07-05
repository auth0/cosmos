```meta
  category: Actions
  description: Use Links to connect pages with each other
```

`import { Button } from '@auth0/cosmos'`

---

```jsx
<Link href="https://auth0.com" {props}>Click me!</Link>
```

#### Examples

You can also convert `Link` into a controlled component by passing an `onClick` with `event.preventDefault()`

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
