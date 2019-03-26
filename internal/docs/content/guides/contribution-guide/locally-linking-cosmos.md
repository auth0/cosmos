### How to link cosmos to my application?

- Build Cosmos for in distribution mode by running `yarn build-packages`. This will compile cosmos to `dist/components/`.
- Got into `dist/components/` and run `yarn link`.
- Go to your project's folder and run `yarn link @auth0/cosmos`.
- That's it, you should see your new guided in the sidebar.

### How to remove the link?

- Go to your application's folder and run `yarn unlink @auth0/cosmos`
- Run `yarn install` or equivalent to restore the remote copy of cosmos you specified in `package.json.`
  > You'll need to run yarn build-packages everytime you change something on the Cosmos side for the changes to be applied in your application.
