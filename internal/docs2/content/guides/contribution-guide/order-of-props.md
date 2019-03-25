- ### Components should respect the props passed to them and set them on the underlying element

  ```jsx
  const Link = (props) => (
    <a {...props}>clicky</a>
  )

  render(<Link id="custom-id">)
  ```

  renders

  ```html
  <a id="custom-id"></a>
  ```

- ### Props should override local attributes.

  This will make sure the parent gets preference over what is rendered.

  Example: When you add an automation attribute in `Breadcrumb.Link`, you are overriding the automation attribute of the underlying Link

  ```jsx
  const Breadcrumb.Link = (props) => (
    <Link {...Automation('breadcrumb.link')}>{props.children}</Link>
  )

  const Link = (props) => (
    <a {...Automation('link')} {...props}>clicky</a>
  )
  ```

  renders

  ```html
  <a data-cosmos-key="breadcrumb.link" />
  ```

  This principle extends to cosmos users as well, they can give their own attributes to cosmos components.

  ```html
  <link rel="nofollow" />

  // or even
  <link data-cosmos-key="custom-component.link" />
  ```

  This is usually the behaviour you want from any atomic component. So it's useful to make this into a rule.

  **`...props` should be the last thing inside a `Component.Element`**

- ### When needed, cosmos can override the user's intent

  This is a tricky one, you usually want the user to be able to have the final say.

  But, in some cases, you can override them to save them from making a mistake (usually a design mistake)

  Example:

  ```jsx
  const InputAction = props => <Button {...props} appearance="link" />
  ```

  Here we are locking `appearance` to link even if the user passed `appearance="destructive"`
