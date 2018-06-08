```meta
  category: Actions
  description: Displays a value in a set, and allows the user to interact with it
```

`import { Tag } from '@auth0/cosmos'`

---

```jsx
<Tag
  onClick={evt => alert('Tag was clicked!')}
  onRemove={evt => alert('Remove icon was clicked!')} {props}
>
  Example
</Tag>
```

To display more than one tag in a row, you can use the `Tag.Group` container:

```js
<Tag.Group>
  <Tag onRemove={evt => alert('First tag was removed!')}>First</Tag>
  <Tag onRemove={evt => alert('Second tag was removed!')}>Second</Tag>
  <Tag onRemove={evt => alert('Third tag was removed!')}>Third</Tag>
</Tag.Group>
```

If the `onRemove` callback is omitted, the tag will be rendered without a remove icon. You can still receive click events using the `onClick` handler. For example:

```js
<Tag.Group>
  <Tag
    onClick={evt => alert('First tag was clicked!')}
    onRemove={evt => alert('First tag was removed!')}
  >
    First
  </Tag>
  <Tag onClick={evt => alert('Second tag was clicked!')}>Second</Tag>
</Tag.Group>
```
