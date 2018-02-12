/*
  filepath format:
    1. src/components/atoms/component/index.js
    2. src/components/molecules/component/index.js
    3. src/components/molecules/component/child/index.js
*/

const attachChildren = components => {
  /* Attach children to their parents and remove from list */

  const parents = components.filter(component => !isChild(component)).map(parent => {
    parent.children = []
    return parent
  })

  const children = components.filter(component => isChild(component))
  children.forEach(child => {
    const parent = getParent(parents, child)
    parent.children.push(child)
  })

  return parents
}

/* Definitions that only works for the current file structure, might change */
const isChild = component => component.filepath.split('/').length === 6

const getParent = (components, child) => {
  const filepathArray = child.filepath.split('/')

  /* remove child layer from src/components/molecules/component/child/index.js */
  filepathArray.splice(-2, 1)

  /* return matching component*/
  const parentFilePath = filepathArray.join('/')
  return components.filter(component => component.filepath === parentFilePath)[0]
}

export default attachChildren
