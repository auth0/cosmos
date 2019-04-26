/*
  Story time!

  In certain components, we want to create a relation between
  2 html elements

  examples:

  1. form field labels

  <Form>
    <Label for="my-input">field</Label>
    <TextInput id="my-input"/>
  </Form>

  2. tabs

  <Tab.Link id="first-tab">Tab 1</Tab.Link>
  <Tab.Item id="first-tab-item" aria-labelledby="first-tab">...<Tab.Item>

  We try to implement this without asking to specify an id/label for each of these items

  A naive implement (the previous one) would be to generate random unique ids
  and use them. However this approach breaks snapshot tests because the id is
  not consistent across multiple test runs.

  This can be solved in user land by mocking this function
  jest.mock('path_to_this_file', () => () => '-m0ck3d')

  Another solution could be to generate IDs based on an "pure"-ish algorithm,
  which gives the same id as long as other environment factors are not changed
  1. In an isolated environment, the IDs are consistent across each run
  2. In a composed applications, the IDs change but are still unique

  The implemenation, it could just be an increasing integer.
*/

let globalCounter = 0

const generateId = (prefix = 'cosmos'): string => {
  prefix = prefix.toLowerCase().replace(/ /g, '_')

  return prefix + '-' + globalCounter++
}

export default generateId
