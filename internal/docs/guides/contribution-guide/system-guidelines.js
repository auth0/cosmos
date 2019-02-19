import React from 'react'

import FoldingSection from '../../docs-components/folding-section'
import { Heading3, Heading4, Text, Link, List, ListItem } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import { Code } from '@auth0/cosmos'

const SystemGuidelines = () => (
  <FoldingSection page="contribution-guide" name="System guidelines">
    <Text>
      Please enforce these guidelines at all times. Small or large, call out what's incorrect.
    </Text>

    <Text>
      Every line of code should appear to be written by a single person, no matter the number of
      contributors.
    </Text>

    <Text>
      This set of rules generate some constraints and conventions. If you run into instances where a
      convention isn’t obvious or a solution could be handled in a few different ways, contact the
      Cosmos community, have a conversation about how to handle it and update these guidelines when
      needed.
    </Text>

    <Heading3>Separation of concerns</Heading3>
    <Text>Cosmos is made out of isolated and modular structures that fall into 2 categories:</Text>
    <List>
      <ListItem>Layouts</ListItem>
      <ListItem>Components</ListItem>
    </List>

    <Heading3>Layouts</Heading3>
    <Text>
      Layouts are containers that allow for organizing and grouping its immediate children on the
      page.
    </Text>
    <List>
      <ListItem>A layout never imposes padding or element styles on its children.</ListItem>
    </List>

    <Heading4>Syntax</Heading4>
    <Text>
      Layout components are title cased and have the word "Layout" is appended, for example:{' '}
      <Code>PageLayout</Code>, <Code>StackLayout</Code>, <Code>ToolBarLayout</Code>, or{' '}
      <Code>PageHeaderLayout</Code>.
    </Text>

    <Heading3>Components</Heading3>
    <Text>Components are modular and independent structures concerned with how a thing looks.</Text>
    <List>
      <ListItem>A component always touches all four sides of its parent container.</ListItem>
      <ListItem>The component itself never has widths, floats or margins.</ListItem>
      <ListItem>
        Elements inside a component never use top margins. The first element touches the top of its
        component and the last element's margin is cleared.
      </ListItem>
      <ListItem>
        Components should include semantic markup and necessary Aria tags implemented following
        WAI-ARIA AA standards and meet{' '}
        <Link href="https://a11yproject.com/checklist">the a11y project checklist</Link>.
      </ListItem>
    </List>

    <Heading4>Syntax</Heading4>
    <Text>
      Components are title cased, for example: <Code>Dialog</Code>, <Code>Button</Code>, or{' '}
      <Code>TextInput</Code>.
    </Text>

    <Heading4>Repetition is better than the wrong abstraction</Heading4>
    <Text>
      Each component can subscribe to a set of modifiers or props. For example, a button can take
      different backgrounds.
    </Text>
    <Text>These modifications generate a new entity, if they do, then create a new component.</Text>

    <Heading3>Requirements</Heading3>
    <Text>Every layout and component must be:</Text>
    <List>
      <ListItem>documented</ListItem>
      <ListItem>responsive</ListItem>
      <ListItem>accessible</ListItem>
      <ListItem>behave and look correctly cross-browser</ListItem>
      <ListItem>pass all tests</ListItem>
    </List>

    <Heading3>Atomic Design</Heading3>
    <Text>
      Cosmos components follow the Atomic design principles. Please make sure to read and understand
      the Atomic design philosophy as well as the Atomic design terminology and component
      architecture.
    </Text>

    <Heading3>Naming convention with BEM-ish (B.E prop)</Heading3>
    <Text>
      Cosmos components follow a modified version of BEM, where the Block and the Element are
      separated by a period, for example `Card.Header`.
    </Text>

    <Text>
      The modifiers for each components comes in the form of props that a component can subscribe
      to.
    </Text>

    <Text>for example:</Text>

    <CodeBlock language="javascript">
      {`
<Card>
  <Card.Header></Card.Header>
  <Card.Body></Card.Body>
  <Card.Footer></Card.Footer>
</Card>
    `}
    </CodeBlock>

    <Heading3>Theming</Heading3>

    <Text>
      Cosmos follows a two-layer theming system where global tokens always inform component token.
      Each one of those layers follows a set of very specific rules.
    </Text>

    <Heading3>Global tokens</Heading3>
    <Text>
      The main reason to have global tokens is to maintain consistency. They adhere to the following
      rules:
    </Text>

    <List>
      <ListItem>
        They are prefixed with the word <Code>Global</Code> and follow the formula{' '}
        <Code>Global.Concept.Modifier</Code>.
      </ListItem>
      <ListItem>
        a <Code>Concept</Code> is something like a <Code>Spacer</Code>, or a CSS property like{' '}
        <Code>BackgroundColor</Code> or <Code>FontSize</Code>;
      </ListItem>
      <ListItem>
        a <Code>Modifier</Code> is something like <Code>Small</Code>, or <Code>Large</Code>, or a
        state like <Code>Hover</Code>, or <Code>Expanded</Code>;
      </ListItem>
      <ListItem>
        They are concepts, never tied to an element or component. This is incorrect:{' '}
        <Code>Global.FontSize.H1</Code>, this is correct: <Code>Global.FontSize.ExtraLarge</Code>.
      </ListItem>
    </List>

    <Heading3>Component tokens</Heading3>
    <Text>
      The second layer is scoped to themeable component properties and follow these rules:
    </Text>

    <List>
      <ListItem>
        They follow this formula <Code>Block.Element.prop.state.CSSProperty</Code>.
      </ListItem>
      <ListItem>The `Block.Element` is the selector name for example `Dialog.Header` </ListItem>
      <ListItem>The `prop` is something like `Primary`;</ListItem>
      <ListItem>a `state` is something like `hover` or `active`;</ListItem>
      <ListItem>
        The value of component scoped tokens is **always** defined by a global token.
      </ListItem>
      <ListItem>There should be tokens for all properties that are not related to layout.</ListItem>
    </List>

    <Text>
      This setup allows for consistency across components, it generates a common language between
      designers and developers, and it gives granular control to authors implementing the system.
    </Text>

    <Heading4>Comment all magic values</Heading4>
    <Text>
      If a situation arises where a value needs entering into the style sheets that aren't already
      defined in the global tokens this should serve as a red flag to you.
    </Text>

    <Text>
      In the case where a 'magic' value needs entering, ensure to create a component token with the
      magic number for value, and a comment must be added on the line above to explain its
      relevance.
    </Text>
  </FoldingSection>
)

export default SystemGuidelines
