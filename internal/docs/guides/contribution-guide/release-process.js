import React from 'react'

import {
  Heading3,
  Text,
  Link,
  List,
  Checkbox,
  CodeBlock,
  Code,
  FoldingSection
} from '../../docs-components'

const ReleaseProcess = () => (
  <FoldingSection page="contribution-guide" name="Release process">
    <Heading3>Release checklist</Heading3>
    <Text>You can check off steps of this list as you go along the steps</Text>

    <List style={{ listStyle: 'none' }}>
      <List.Item>
        <Checkbox name="task" />
        Make sure <Code>stable</Code> branch does not exist (on both github and local, delete it if
        it does)
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Pull master
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Create new local branch <Code>stable</Code>
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Update changelog
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Update root package version only{' '}
        <Link href="https://github.com/auth0/cosmos/blob/master/package.json#L3">
          root package.json
        </Link>
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Commit and push (pushing to stable branch with new version will
        trigger jenkins release task)
      </List.Item>
      <List.Item>
        <Checkbox name="task" />
        Wait for{' '}
        <Link href="https://tools-jenkins-us-west-2.forge.auth0.net/blue/organizations/jenkins/cosmos/activity/">
          jenkins task
        </Link>
        to be completed (confirm it published the version you wanted under{' '}
        <Code>npm run scripts deploy</Code>
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Run <Code>yarn scripts deploy.catchup</Code> on local{' '}
        <Code>stable</Code> branch and push
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Merge PR to master
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Go to{' '}
        <Link href="https://zeit.co/dashboard/deployments">zeit dashboard</Link> and create an alias
        for the latest deployment. Example:{' '}
        <Code>
          now alias cosmos-rzbpuowrox.now.sh auth0-cosmos-0-8-0.now.sh --team=auth0-design
        </Code>
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Create a{' '}
        <Link href="https://github.com/auth0/cosmos/releases">new release on github</Link>
      </List.Item>
      <List.Item>
        <Checkbox name="task" /> Delete stable branch on github
      </List.Item>
      <List.Item>
        <Checkbox name="task" />
        Announce it on the slack channel:
        <Link href="https://auth0.slack.com/messages/C5ZK0DD8X">design-system</Link>
      </List.Item>
    </List>

    <Heading3>Changelog format</Heading3>

    <Text>The changelog has a format we follow:</Text>
    <CodeBlock>{`
0.9.0 [November 29, 2018]

### Added

- Table: Add support for truncating table cell text [#1011]
- Icons: Add social icons [#1146]

### Fixed

- Dialog: Dialogs are now responsive and accessible [#1102]
- Fix warnings in Manage POC by @jvelezpo [#1135]
- Remove out of sync prop-types to typescript declarations module [#1136]

### Internal

- Testing: Custom prop tests [#1308]


  `}</CodeBlock>

    <Text>There are a few things to keep in mind:</Text>
    <List>
      <List.Item>The changelog is for cosmos users to read</List.Item>
      <List.Item>
        The title should communicate what feature it adds/bug it fixes (not what the implementation
        is)
      </List.Item>
      <List.Item>Change the title of a pull request if it doesn't communicate </List.Item>
      <List.Item>
        The internal changes are used just as a good-to-know, as does not affect the app.
      </List.Item>
    </List>

    <Heading3>Jenkins workflow</Heading3>

    <Text>
      When you merge a branch to <Code>stable</Code>, a jenkins build is triggered. Trigger
      configuration UI:{' '}
      <Link href="https://tools-jenkins-us-west-2.forge.auth0.net/job/cosmos/configure">
        tools-jenkins
      </Link>
    </Text>
    <Text>
      The steps to perform are written in the{' '}
      <Link href="https://github.com/auth0/cosmos/blob/master/Jenkinsfile">Jenkinsfile</Link> which
      sits at the root of this codebase. After cloning the codebase and installing dependencies, we
      run the deployment script: <Code>npm run scripts deploy</Code>
    </Text>
    <Text>
      The unique part about this file is that it creates a <Code>.npmrc</Code> from the auth token.
      This token is saved in the jenkins environment and not accessible outside it. We set it in{' '}
      <Code>.npmrc</Code> to be able to run <Code>npm publish</Code> from anywhere in the codebase.
    </Text>
  </FoldingSection>
)

export default ReleaseProcess
