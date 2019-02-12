```meta
  category: Text
```

`import { Heading } from '@auth0/cosmos'`

```jsx
<Heading {props}>Heading</Heading>
```

## Sizes

```js
<div>
  <Heading size={1}>Heading 1</Heading>
  <Heading size={2}>Heading 2</Heading>
  <Heading size={3}>Heading 3</Heading>
  <Heading size={4}>Heading 4</Heading>
</div>
```

## Accessibility

The Heading, by default, takes the corresponding `h` element for `size`. Make sure to adjust the heading level according to what makes sense on your document tree.

```js
<div>
  <Heading size={1} as="h2">
    Heading 1
  </Heading>
  <Heading size={2} as="h2">
    Heading 1
  </Heading>
  <Heading size={3} as="h2">
    Heading 1
  </Heading>
</div>
```
