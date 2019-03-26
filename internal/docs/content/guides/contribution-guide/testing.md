In order to ensure the reliability and mantainability of the component, please write snapshot and unit tests. Each component should have a test file located `ininternal/test/unit/component.test.js` containing all test cases you consider.

Additionally, add a test case in `internal/test/unit/automation-attributes.test.js` checking your component's automation attribute is present. Here is an example:

```js
it("Button", () => {
  const button = shallow(<Button />)

  expect(button.prop("data-cosmos-key")).toEqual("button")
})
```

#### What do I test?

Please test the most possible out of our component including: prop-based rendering branches, handler/callback props being called accordingly, user-action based rendering branches (i.e. component visually changing based on user actions within the component), among others.

#### Rendering tests

Please, do not write functional tests in order to test rendering features. Use [snapshot testing](https://jestjs.io/docs/en/snapshot-testing) instead. Take a look at the `Table` component tests located in `internal/test/unit/table.test.js` as an example of a component that include both functional and snapshot rendering tests.

#### Test ownership

Ideally, each test should be written/fixed by the same person implemented the component/fix/feature in Cosmos.

#### Automation attributes

In order for Auth0 teams to write end-to-end tests with ease using tools like Webdriver.io or Chrome Puppeteer, please add automation attributes describing your component's name in `snake-case`.

Here's an example of that implementation:

```js
// ...
import Automation from "../../_helpers/automation-attribute"

// ...

const MyComponent = (
  <MyComponent.Element
    {...Automation("my-component")} // Here goes the automation attribute
    {...props}
    text={children}
  />
)
```
