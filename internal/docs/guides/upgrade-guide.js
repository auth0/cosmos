import React from "react";
import Helmet from "react-helmet";

import { Heading1, Heading2, Text, Link, CodeBlock, Code } from "../docs-components";

class UpgradeGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Upgrade guide &ndash; Cosmos" />
        <Heading1>Upgrading to 0.35.0</Heading1>
        <Text>
          v0.35.0 of Cosmos includes a few breaking changes. These changes are a result of updating styled-components to
          v5 from v3.5, as well as opening up support for SSR (Server Side Rendering). Below is a list of the most
          common required changes to make when upgrading from v0.3X.X. More can be read in styled-component's upgrade
          guide.
        </Text>
        <Text>
          <strong>
            It is recommended you pin your cosmos version, if you have not done so already, until we reach v1.0.0.
          </strong>
        </Text>
        <div>
          <Heading2>
            Global Styles <Code>CssBaseline</Code>
          </Heading2>
          <Text>
            The global styles are no longer added to the head of the document on component import doing this is a side
            effect, and prevented us from supporting SSR. styled-components introduced a helper,{" "}
            <Link href="https://styled-components.com/docs/api#helpers" target="_blank" rel="noreferrer noopener">
              createGlobalStyle
            </Link>
            , that we are now making use of. To include the global styles you now only need to import and render this
            new CssBaseline component once at the root of your app.
          </Text>
          <CodeBlock language="tsx">
            {`
import { CssBaseline } from '@auth0/cosmos';

const App = () => (
  <>
    <CssBaseline />
    { // ...the rest of your app }
  </>
);
        `}
          </CodeBlock>
          <Text>
            If you do not want to include CSS resets you can simply include the <Code>includeGlobals</Code> prop to the
            component with a value of false. This replaces the environment variable in previous versions.
          </Text>

          <CodeBlock language="tsx">
            {`
<CssBaseline includeGlobals={false} />
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading2>innerRef → ref</Heading2>
          <Text>
            styled-components v5 now uses the React utility <Code>forwardRef</Code>. This means that{" "}
            <Code>innerRef</Code> is no longer needed and has been deprecated. For any component that is a result of{" "}
            <Code>styled</Code> if you are using <Code>innerRef</Code> this needs to be switched to use <Code>ref</Code>
            .
          </Text>
          <CodeBlock language="tsx">
            {`
const Root = styled.div\`\`;

// before
const Foo = () => {
  const rootRef = React.useRef<HTMLDivElement>();
  return <Root innerRef={rootRef} />;
};

// after
const Foo = () => {
  const rootRef = React.useRef<HTMLDivElement>();
  return <Root ref={rootRef} />;
};
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading2>Component.withComponent has been deprecated</Heading2>
          <Text>
            <Code>Component.withComponent</Code> has been deprecated in favor of the new <Code>as</Code> attribute.
            There are a couple ways to use this:
          </Text>
          <CodeBlock language="tsx">
            {`
// before
const Layout = styled.div\`\`;
const Root =  Layout.withComponent('main');

// after
const Root = styled(Layout).attr({ as: 'main' })\`\`;
// or
const root = <Layout as="main" />;
        `}
          </CodeBlock>
        </div>

        <div>
          <Heading2>Component.extend(…) has been deprecated</Heading2>
          <Text>
            use <Code>styled(Component)`...`</Code> instead.
          </Text>
          <CodeBlock language="tsx">
            {`
// before
const Layout = styled.div\`
  background-color: blue;
\`;
const Root =  Layout.extend\`
  color: red;
\`;

// after
const Root = styled(Layout)\`
  color: red;
\`;
        `}
          </CodeBlock>
        </div>
      </div>
    );
  }
}

export default UpgradeGuide;
