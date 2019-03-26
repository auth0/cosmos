Please enforce these guidelines at all times. Small or large, call out what's incorrect.

Every line of code should appear to be written by a single person, no matter the number of contributors.

This set of rules generate some constraints and conventions. If you run into instances where a convention isn’t obvious or a solution could be handled in a few different ways, contact the Cosmos community, have a conversation about how to handle it and update these guidelines when needed.

#### Separation of concerns

Cosmos is made out of isolated and modular structures that fall into 2 categories:

- Layouts
- Components

#### Layouts

Layouts are containers that allow for organizing and grouping its immediate children on the page.

- A layout never imposes padding or element styles on its children.

#### Syntax

Layout components are title cased and have the word "Layout" is appended, for example: `PageLayout`, `StackLayout`, `ToolBarLayout`, or `PageHeaderLayout`.

#### Components

Components are modular and independent structures concerned with how a thing looks.

- A component always touches all four sides of its parent container.
- The component itself never has widths, floats or margins.
- Elements inside a component never use top margins. The first element touches the top of its component and the last element's margin is cleared.
- Components should include semantic markup and necessary Aria tags implemented following WAI-ARIA AA standards and meet [the a11y project checklist](https://a11yproject.com/checklist).

#### Syntax

Components are title cased, for example: `Dialog`, `Button`, or `TextInput`.

#### Repetition is better than the wrong abstraction

Each component can subscribe to a set of modifiers or props. For example, a button can take different backgrounds.

These modifications generate a new entity, if they do, then create a new component.

#### Requirements

Every layout and component must be:

- documented
- responsive
- accessible
- behave and look correctly cross-browser
- pass all tests

#### Atomic Design

Cosmos components follow the Atomic design principles. Please make sure to read and understand the Atomic design philosophy as well as the Atomic design terminology and component architecture.

#### Naming convention with BEM-ish (B.E prop)

Cosmos components follow a modified version of BEM, where the Block and the Element are separated by a period, for example `Card.Header`.

The modifiers for each components comes in the form of props that a component can subscribe to.

for example:

```jsx
<Card>
  <Card.Header />
  <Card.Body />
  <Card.Footer />
</Card>
```

#### Theming

Cosmos follows a two-layer theming system where global tokens always inform component token. Each one of those layers follows a set of very specific rules.

#### Global tokens

The main reason to have global tokens is to maintain consistency. They adhere to the following rules:

- They are prefixed with the word `Global` and follow the formula `Global.Concept.Modifier`.
- a `Concept` is something like a `Spacer`, or a CSS property like `BackgroundColor` or `FontSize`;
- a `Modifier` is something like `Small`, or `Large`, or a state like `Hover`, or `Expanded`;
- They are concepts, never tied to an element or component. This is incorrect: `Global.FontSize.H1`, this is correct: `Global.FontSize.ExtraLarge`.

#### Component tokens

- The second layer is scoped to themeable component properties and follow these rules:
- They follow this formula `Block.Element.prop.state.CSSProperty`.
- The `Block.Element` is the selector name for example `Dialog.Header`
- The `prop` is something like `Primary`;
- a `state` is something like `hover` or `active`;
- The value of component scoped tokens is **always** defined by a global token.
- There should be tokens for all properties that are not related to layout.

This setup allows for consistency across components, it generates a common language between designers and developers, and it gives granular control to authors implementing the system.

#### Comment all magic values

If a situation arises where a value needs entering into the style sheets that aren't already defined in the global tokens this should serve as a red flag to you.

In the case where a 'magic' value needs entering, ensure to create a component token with the magic number for value, and a comment must be added on the line above to explain its relevance.
