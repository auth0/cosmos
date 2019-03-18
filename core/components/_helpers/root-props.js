/**
 * Avoid passing down native HTML props to the root element of a component.
 *
 * For example, when you use Dialog you type something like this:
 *
 *      <Dialog title="This is a title"> ... </Dialog>
 *
 * If we just do {...props} in the root element of the component, you
 * get the `title` prop passed to the native HTML element, and this
 * causes a tooltip to appear in the element when you rest the cursor on it.
 *
 * @param {object} props
 */
export const rootProps = props => {
  const { title, ...rest } = props
  return rest
}
