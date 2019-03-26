The `line-height` used in [styleguide](https://styleguide.auth0.com/) and cosmos are different. Styleguide uses `2` whereas cosmos uses `1.6` for it's elements.
To make sure cosmos does not override local components of the application, we need to scope these to cosmos components.
It's important to note that all elements should not have a line height of `1.6`. elements inside a container/wrapper element should inherit their parent's line height.
Example:

```html
<p>
  <span>this is a child element</span>
  <span>that should inherit the paragraph's line height</span>
</p>
```

You can import `containerStyles` into container/wrapper components

```jsx
import containerStyles from "@auth0/cosmos/_helpers/container-styles"
const Paragraph = styled.p`
  ${containerStyles};
  color: ${colors.text};
`
```
