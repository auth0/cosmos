import React from 'react'

import { Text, Code, Link, Heading3, List, CodeBlock, FoldingSection } from '../../docs-components'

const BuildPipeline = () => (
  <FoldingSection page="contribution-guide" name="Build Pipeline">
    <Heading3>Development pipeline</Heading3>
    <Text>
      We use <Link href="http://npmjs.com/nps">nps</Link> to run our development scripts. These are
      documented in{' '}
      <Link href="https://github.com/auth0/cosmos/blob/master/package-scripts.js">
        /package-scripts.js
      </Link>
    </Text>
    <Text>
      You can run these scripts by running <Code>yarn i</Code> on your terminal
    </Text>
    <CodeBlock language="shell">{`
$ yarn i

❯ docs.dev                      Start metadata + documentation site in dev mode
  docs.dev_site                 Start documentation site in dev mode
  docs.build                    Build documentation site
  manage.dev                    Start manage POC in dev mode
  manage.build                  Build manage POC
    `}</CodeBlock>
    <Text>
      When you run <Code>docs.dev</Code>, there are a few things that start
    </Text>
    <List>
      <List.Item>
        <Code>metadata.dev</Code>
        <Text>
          This script takes the component (<Code>.js</Code>) and documentation files (
          <Code>.md</Code>) and creates a JSON object from them. This JSON has information about{' '}
          <Code>displayName</Code>, <Code>propTypes</Code> and documentation properties (See
          <Code>components/meta/metadata.json</Code>)
        </Text>
      </List.Item>

      <List.Item>
        <Code>docs.dev_site</Code>
        <Text>
          The documentation site takes information from the `metadata.json` file and creates a page
          for each component.
        </Text>
        <Text>
          The documentation site also contains guides for using and contributing to cosmos.
        </Text>
      </List.Item>
      <List.Item>
        <Code>icons.dev</Code>
        <Text>
          Icon files live in <Code>/core/icons</Code>, to make them usable by components and
          documentation, we parse these svg files and create a JSON from them. You can think of this
          as icons metadata (Like other metadata, this also lives in{' '}
          <Code>/core/components/meta/</Code>)
        </Text>
      </List.Item>
    </List>
    <Text>
      To work on the manage demo application or in the storybook environmeent, you can run their
      respective dev scripts
      <Code>manage.dev</Code> or <Code>sandbox.dev</Code>. If you are working on a feature that
      requires access to the <i>live</i> metadata object, make sure you run the corresponding
      script.
    </Text>
    <Text>
      Example: If you are adding new icons to test in the manage demo app, make sure you run
      `icons.dev` in parallel to get access to the updated icons.
    </Text>
    <Heading3>Production pipeline</Heading3>
    <Text>
      When we deploy the codebase to production (
      <Link href="https://auth0-cosmos.now.sh">auth0-cosmos.now.sh</Link>
      ), the <Code>build</Code> scripts for all the moving pieces is run:{' '}
      <List>
        <List.Item>
          Metadata: <Code>metadata.build</Code>, <Code>icons.build</Code>
        </List.Item>
        <List.Item>
          Websites: <Code>docs.build</Code>, <Code>manage.build</Code>, <Code>sandbox.build</Code>
        </List.Item>
      </List>
    </Text>
    <Text>
      All the built static websites are copied to a <Code>/build</Code> folder which is served on
      the website.
    </Text>
    <Text>
      Note: The production pipeline is different from the release pipeline, see{' '}
      <Link href="#/contribution-guide#release-process">Release process</Link> for the release
      process.
    </Text>
  </FoldingSection>
)

export default BuildPipeline
