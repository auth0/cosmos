### Release checklist

You can check off steps of this list as you go along the steps

- [] Make sure `stable` branch does not exist (on both github and local, delete it if it does)
- [] Pull master
- [] Create new local branch `stable`
- [] Update changelog
- [] Update root package version only [root package.json](https://github.com/auth0/cosmos/blob/master/package.json#L3)
- [] Commit and push (pushing to stable branch with new version will trigger jenkins release task)
- [] Wait for [jenkins task](https://tools-jenkins-us-west-2.forge.auth0.net/blue/organizations/jenkins/cosmos/activity/) to be completed (confirm it published the version you wanted under `npm run scripts deploy`
- [] Run `yarn scripts deploy.catchup` on local `stable` branch and push
- [] Merge PR to master
- [] Go to [zeit dashboard](https://zeit.co/dashboard/deployments) and create an alias for the latest deployment. Example: `now alias cosmos-rzbpuowrox.now.sh auth0-cosmos-0-8-0.now.sh --team=auth0-design`
- [] Create a [new release on github](https://github.com/auth0/cosmos/releases)
- [] Delete stable branch on github
- [] Announce it on the slack channel:[design-system](https://auth0.slack.com/messages/C5ZK0DD8X)

The changelog has a format we follow:

```markdown
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
```

There are a few things to keep in mind:

- The changelog is for cosmos users to read
- The title should communicate what feature it adds/bug it fixes (not what the implementation is)
- Change the title of a pull request if it doesn't communicate
- The internal changes are used just as a good-to-know, as does not affect the app.

#### Jenkins workflow

- When you merge a branch to `stable`, a jenkins build is triggered. Trigger configuration UI: [tools-jenkins](https://tools-jenkins-us-west-2.forge.auth0.net/job/cosmos/configure)
- The steps to perform are written in the [Jenkinsfile](https://github.com/auth0/cosmos/blob/master/Jenkinsfile) which sits at the root of this codebase. After cloning the codebase and installing dependencies, we run the deployment script: `npm run scripts deploy`
- The unique part about this file is that it creates a `.npmrc` from the auth token. This token is saved in the jenkins environment and not accessible outside it. We set it in `.npmrc` to be able to run `npm publish` from anywhere in the codebase.
