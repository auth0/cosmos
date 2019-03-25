### Development pipeline

We use [nps](http://npmjs.com/nps) to run our development scripts. These are
documented in
[/package-scripts.js](https://github.com/auth0/cosmos/blob/master/package-scripts.js)

You can run these scripts by running `yarn i` on your terminal

```shell
$ yarn i

❯ docs.dev                      Start metadata + documentation site in dev mode
  docs.dev_site                 Start documentation site in dev mode
  docs.build                    Build documentation site
  manage.dev                    Start manage POC in dev mode
  manage.build                  Build manage POC
```

When you run `docs.dev`, there are a few things that start

- `metadata.dev` This script takes the component (`.js`) and documentation files ( `.md`) and creates a JSON object from them. This JSON has information about `displayName`, `propTypes` and documentation properties (See `components/meta/metadata.json`)
- `docs.dev_site` The documentation site takes information from the `metadata.json` file and creates a page for each component. The documentation site also contains guides for using and contributing to cosmos.
- `icons.dev` Icon files live in `/core/icons`, to make them usable by components and documentation, we parse these svg files and create a JSON from them. You can think of this as icons metadata (Like other metadata, this also lives in `/core/components/meta/`)

To work on the manage demo application or in the storybook environmeent, you can run their
respective dev scripts
`manage.dev` or `sandbox.dev`. If you are working on a feature that
requires access to the <i>live</i> metadata object, make sure you run the corresponding
script.

Example: If you are adding new icons to test in the manage demo app, make sure you run
`icons.dev` in parallel to get access to the updated icons.

### Production pipeline

When we deploy the codebase to production (
[auth0-cosmos.now.sh](https://auth0-cosmos.now.sh">auth0-cosmos.now.sh)
), the `build` scripts for all the moving pieces is run:

- Metadata: `metadata.build`, `icons.build`
- Websites: `docs.build`, `manage.build`, `sandbox.build`

All the built static websites are copied to a `/build` folder which is served on
the website.

Note: The production pipeline is different from the release pipeline, see
[Release process](/contributing/release-process)for the release
process.
