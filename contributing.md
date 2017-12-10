### Contributing

#### Setup

- clone this repo on your machine: `git clone https://github.com/auth0/cosmos.git`
- `npm install` will install all the dependencies
- `npm run dev` to start the dev server
- create a new branch and get started!

&nbsp;

#### Structure

There are 4 big parts of cosmos:

- Tokens: configs that can be shared imported into projects
- Components: React component library
- Overview: Bird's eye view of components
- Styleguide: Documentation of the design system

In it's current shape, this repository is a create-react-app project.

The src folder has all of the code, while assets has our design files.

If you peek under src, you will find the 3 big folders: tokens, components and overview.
As we build our library, these folders can directly import code from each other. However, in the final structure, tokens and components will be consumable as npm packages.

&nbsp;
