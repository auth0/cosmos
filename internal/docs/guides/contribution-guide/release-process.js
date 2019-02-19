import React from 'react'

import {
  Heading3,
  Heading4,
  Text,
  Link,
  List,
  ListItem,
  ListItemItem,
  CodeBlock,
  Code,
  Checkbox,
  FoldingSection
} from '../../docs-components'

const ReleaseProcess = () => (
  <FoldingSection page="contribution-guide" name="Release process">
    <Text>You can check off steps of this list as you go along the steps</Text>
    <List style={{ listStyle: 'none' }}>
      <ListItem>
        <Checkbox name="task" />
        Make sure <Code>stable</Code> branch does not exist (on both github and local, delete it if
        it does)
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Pull master
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Create new local branch <Code>stable</Code>
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Update changelog
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Update root package version only{' '}
        <Link href="https://github.com/auth0/cosmos/blob/master/package.json#L3">
          root package.json
        </Link>
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Commit and push (pushing to stable branch with new version will
        trigger jenkins release task)
      </ListItem>
      <ListItem>
        <Checkbox name="task" />
        Wait for{' '}
        <Link href="https://tools-jenkins-us-west-2.forge.auth0.net/blue/organizations/jenkins/cosmos/activity/">
          jenkins task
        </Link>
        to be completed (confirm it published the version you wanted under{' '}
        <Code>npm run scripts deploy</Code>
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Run <Code>yarn scripts deploy.catchup</Code> on local{' '}
        <Code>stable</Code> branch and push
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Merge PR to master
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Go to{' '}
        <Link href="https://zeit.co/dashboard/deployments">zeit dashboard</Link> and create an alias
        for the latest deployment. Example:{' '}
        <Code>
          now alias cosmos-rzbpuowrox.now.sh auth0-cosmos-0-8-0.now.sh --team=auth0-design
        </Code>
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Create a{' '}
        <Link href="https://github.com/auth0/cosmos/releases">new release on github</Link>
      </ListItem>
      <ListItem>
        <Checkbox name="task" /> Delete stable branch on github
      </ListItem>
      <ListItem>
        <Checkbox name="task" />
        Announce it on the slack channel:
        <Link href="https://auth0.slack.com/messages/C5ZK0DD8X">design-system</Link>
      </ListItem>
    </List>
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
      <ListItem>The changelog is for cosmos users to read</ListItem>
      <ListItem>
        The title should communicate what feature it adds/bug it fixes (not what the implementation
        is)
      </ListItem>
      <ListItem>Change the title of a pull request if it doesn't communicate </ListItem>
      <ListItem>
        The internal changes are used just as a good-to-know, as does not affect the app.
      </ListItem>
    </List>
  </FoldingSection>
)

export default ReleaseProcess
